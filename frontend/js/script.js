// ==========================================================
// 1. ALTERNAR TEMA CLARO E NOTURNO
// ==========================================================

const botaoTema = document.getElementById("alternar-tema");

if (botaoTema) {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "noturno") {
        document.body.classList.add("tema-noturno");
    }

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
        texto: "Verifique os dados informados e tente novamente.",
        classe: "mensagem-erro"
    },
    erro: {
        texto: "Não foi possível realizar o cadastro. Tente novamente.",
        classe: "mensagem-erro"
    }
};

if (statusCadastro && mensagens[statusCadastro] && mensagemCadastro) {

    // Define o texto da notificação
    mensagemCadastro.textContent = mensagens[statusCadastro].texto;

    // Adiciona a classe correspondente
    mensagemCadastro.classList.add(
        "notificacao-visivel",
        mensagens[statusCadastro].classe
    );

    // Remove a notificação após 5 segundos
    setTimeout(function () {
        mensagemCadastro.classList.remove("notificacao-visivel");
    }, 5000);

    // Limpa o parâmetro da URL
    window.history.replaceState(
        {},
        document.title,
        window.location.pathname + "#cadastro"
    );
}