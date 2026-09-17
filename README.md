# Equipe Galo — Galo Informa

Projeto da disciplina **ARA0062 · Desenvolvimento Web em HTML5, CSS, JavaScript
e PHP** — Centro Universitário Newton Paiva, 2026/2.

## Tema do projeto

Jornal diário com os principais acontecimentos do mundo da tecnologia.

**Líder:** Matheus Feipe Medina Moreira

| Nome completo | Matrícula | GitHub | Papel |
|---|---|---|---|
| Matheus Felipe Medina Moreira | 202602749611 | @matheusfmedina | **líder** |
| Arthur Pereira Galdino | 202603673243 | @arthutgaldino14 | integrante |
| Leonardo Arthur Viana Bacelete | 202601384775 | @leonardoarthur08 | integrante |
| João Victor Cezario Leão | 202608088357 | @jvleao01 | integrante | 
| Giovanna Diniz Lanna | 202608088373 | @GiovannaDinizLanna | integrante

# Galo Informa

*Assunto:* Jornal diário com os principais acontecimentos do mundo da tecnologia

*Equipe:* Arthur Pereira Galdino · Giovanna Diniz Lanna · João Victor Cezario Leão · Leonardo Arthur Viana Bacelete · Matheus Felipe Medina Moreira

*Disciplina:* ARA0062 — Desenvolvimento Web em HTML5, CSS, JavaScript e PHP

*Centro Universitário Newton Paiva · 2026/2*

---

## Sobre o projeto

O *Galo Informa* é um jornal digital voltado para pessoas interessadas em tecnologia. O site apresenta os principais acontecimentos do mundo da tecnologia ocorridos no dia anterior, reunindo informações sobre inteligência artificial, software, hardware, segurança, games e outros assuntos relacionados à área.

Até o fim do semestre, o site terá uma página inicial, páginas de notícias e categorias, uma página sobre o projeto e um formulário para cadastro dos leitores. Os dados dos usuários cadastrados serão armazenados em um banco de dados e utilizados para o envio do jornal diário por e-mail. O projeto poderá ser atualizado conforme o desenvolvimento da equipe.

---

## Identidade visual

Estas são as decisões que o frontend/css/estilo.css aplica. Elas estão aqui para quem lê o repositório entender **por que* o site tem essa cara — e para a equipe não mudar de ideia a cada aula.*

### Paleta

| Papel               | Cor       | Por que esta                                                                      |
| ------------------- | --------- | --------------------------------------------------------------------------------- |
| --principal       | #111111 | Cabeçalho e elementos principais; representa uma identidade moderna e tecnológica |
| --sobre-principal | #FFFFFF | Texto sobre a cor principal, garantindo boa leitura                               |
| --apoio           | #F5C400 | Botões, destaques e chamadas para o cadastro do jornal                            |
| --fundo           | #F5F5F5 | Fundo geral das páginas, proporcionando uma aparência limpa                       |
| --superficie      | #FFFFFF | Cartões de notícias e áreas de conteúdo                                           |
| --texto           | #222222 | Texto principal das notícias e demais conteúdos                                   |

text
--texto sobre --superficie ......... 15,5:1
--principal sobre --superficie ..... 18,9:1
--sobre-principal sobre --principal  18,9:1


Todos precisam ficar em 4,5:1 ou acima.

### Tipografia

*Fonte:* "Poppins", com plano B Arial, sans-serif
*Pesos:* 400 e 700
*Por que esta:* a fonte possui aparência moderna e limpa, combinando com a proposta de um jornal digital de tecnologia.

*Escala:* h1 2.5rem · h2 1.75rem · h3 1.25rem · corpo 1rem

### Segundo tema

*Arquivo:* frontend/css/tema-escuro.css
*O que é:* modo escuro para permitir que o leitor visualize o jornal em uma interface com fundo escuro, mantendo a identidade visual do Galo Informa.

Para ligá-lo, tire o comentário da linha do <link> no frontend/index.html.
Ela vem *depois* do estilo.css.

---

## Como abrir

1. Abra *a pasta inteira* no VS Code (Arquivo → Abrir Pasta).
2. Abra frontend/index.html e clique em *Go Live* (extensão Live Server).

---

## Estrutura

text
.
├─ README.md                 esta folha de rosto
├─ frontend/                 tudo o que roda no navegador
│   ├─ index.html
│   ├─ css/
│   │   ├─ estilo.css        a folha do projeto
│   │   └─ tema-escuro.css   o segundo tema: só variáveis
│   ├─ js/
│   │   └─ script.js         vazio até o ciclo 6
│   └─ img/
└─ backend/                  tudo o que roda no servidor
    ├─ config/
    │   └─ conexao.php       vazio até o ciclo 8
    └─ processa-contato.php
