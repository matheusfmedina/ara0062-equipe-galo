// ==========================================================
// 1. ALTERNAR TEMA CLARO E NOTURNO
// ==========================================================

const botaoTema = document.getElementById("alternar-tema");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "noturno") {
    document.body.classList.add("tema-noturno");
}

if (botaoTema) {
    botaoTema.textContent = document.body.classList.contains("tema-noturno")
        ? "☀️ Tema claro"
        : "🌙 Tema noturno";

    botaoTema.addEventListener("click", function () {
        document.body.classList.toggle("tema-noturno");

        if (document.body.classList.contains("tema-noturno")) {
            botaoTema.textContent = "☀️ Tema claro";
            localStorage.setItem("tema", "noturno");
        } else {
            botaoTema.textContent = "🌙 Tema noturno";
            localStorage.setItem("tema", "claro");
        }
    });
}


// ==========================================================
// 2. NOTIFICAÇÕES DE CADASTRO
// ==========================================================

const parametros = new URLSearchParams(window.location.search);
const statusCadastro = parametros.get("cadastro");

const mensagemCadastro = document.getElementById("mensagem-cadastro");

const mensagens = {
    sucesso: {
        texto: "✓ Usuário cadastrado com sucesso!",
        classe: "mensagem-sucesso"
    },
    duplicado: {
        texto: "Este e-mail já está cadastrado.",
        classe: "mensagem-erro"
    },
    invalido: {
        texto: "Verifique os dados informados e tente outra vez.",
        classe: "mensagem-erro"
    },
    erro: {
        texto: "Não foi possível realizar o cadastro. Tente novamente.",
        classe: "mensagem-erro"
    }
};

function mostrarMensagemCadastro(status) {
    if (!mensagens[status] || !mensagemCadastro) {
        return;
    }

    mensagemCadastro.textContent = mensagens[status].texto;

    mensagemCadastro.classList.remove("mensagem-sucesso", "mensagem-erro");
    mensagemCadastro.classList.add(
        "notificacao-visivel",
        mensagens[status].classe
    );

    setTimeout(function () {
        mensagemCadastro.classList.remove("notificacao-visivel");
    }, 5000);
}

if (statusCadastro && mensagens[statusCadastro]) {
    mostrarMensagemCadastro(statusCadastro);

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname + "#cadastro"
    );
}

// ==========================================================
// 3. VALIDACAO DO FORMULARIO
// ==========================================================

const formulario = document.querySelector(".cadastro form");

if (formulario) {
    const campoNome = formulario.querySelector('[name="nome"]');
    const campoEmail = formulario.querySelector('[name="email"]');

    formulario.addEventListener("invalid", function () {
        mostrarMensagemCadastro("invalido");
    }, true);

    formulario.addEventListener("submit", function (evento) {
        if (!campoNome.value.trim()) {
            evento.preventDefault();
            mostrarMensagemCadastro("invalido");
            campoNome.focus();
            return;
        }

        if (!campoEmail.value.trim() || !campoEmail.validity.valid) {
            evento.preventDefault();
            mostrarMensagemCadastro("invalido");
            campoEmail.focus();
        }
    });
}

const listaUsuarios = document.getElementById("lista-usuarios");
const statusUsuarios = document.getElementById("status-usuarios");

async function carregarUsuarios() {
    if (!listaUsuarios || !statusUsuarios) {
        return;
    }

    try {
        const resposta = await fetch("../backend/lista-usuarios.php", {
            cache: "no-store"
        });

        if (!resposta.ok) {
            throw new Error("Falha ao consultar usuários.");
        }

        const usuarios = await resposta.json();
        if (!Array.isArray(usuarios)) {
            throw new Error("Resposta inválida ao consultar usuários.");
        }

        listaUsuarios.replaceChildren();

        if (usuarios.length === 0) {
            statusUsuarios.textContent = "Ainda não há usuários cadastrados.";
            return;
        }

        usuarios.forEach(function (usuario) {
            const linha = document.createElement("tr");
            const nome = document.createElement("td");
            const email = document.createElement("td");

            nome.textContent = usuario.nome;
            email.textContent = usuario.email;
            linha.append(nome, email);
            listaUsuarios.appendChild(linha);
        });

        statusUsuarios.textContent = "";
    } catch (erro) {
        statusUsuarios.textContent = "Não foi possível carregar os usuários cadastrados.";
    }
}

if (listaUsuarios && statusUsuarios) {
    carregarUsuarios();
    window.setInterval(carregarUsuarios, 30000);
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            carregarUsuarios();
        }
    });
}