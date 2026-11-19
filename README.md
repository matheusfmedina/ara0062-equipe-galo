
# Galo Informa

O **Galo Informa** é um jornal digital desenvolvido como projeto acadêmico da disciplina ARA0062, da Faculdade Newton Paiva. O site tem como objetivo reunir informações e novidades do mundo da tecnologia em um só lugar.

O projeto aborda temas como inteligência artificial, desenvolvimento de software, hardware, segurança digital, games, internet e inovação.

## Funcionalidades

- Página inicial com apresentação do projeto.
- Seção sobre a empresa.
- Informações de localização.
- Apresentação dos integrantes da equipe.
- Cadastro de leitores utilizando nome e e-mail.
- Armazenamento dos cadastros em banco de dados MySQL.
- Validação dos dados enviados pelo formulário.
- Impedimento de cadastro de e-mails duplicados.
- Alternância entre tema claro e tema noturno.
- Salvamento da preferência de tema no navegador.
- Notificações de sucesso e erro no cadastro.
- Layout responsivo para dispositivos móveis.

## Tecnologias utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins)

### Backend
- PHP
- MySQL
- PDO

### Ferramentas
- XAMPP
- Visual Studio Code
- Git
- GitHub

## Identidade visual

O projeto utiliza uma identidade visual baseada nas seguintes cores:

| Cor | Código |
|---|---|
| Azul-marinho | `#183153` |
| Azul-marinho escuro | `#10243d` |
| Vermelho | `#D62828` |
| Branco | `#FFFFFF` |
| Cinza claro | `#F4F6F8` |

A tipografia principal utilizada é Poppins.

O site também possui tema noturno, com cores adaptadas para proporcionar uma experiência de navegação confortável em ambientes com pouca iluminação.

## Estrutura do projeto

```text
galo-informa/
│
├── README.md
│
├── frontend/
│   ├── index.html
│   │
│   ├── css/
│   │   └── estilo.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── img/
│
└── backend/
    ├── config/
    │   └── conexao.php
    │
    ├── sql/
    │   └── banco.sql
    │
    └── processa-contato.php
```

## Banco de dados

O projeto utiliza o MySQL para armazenar os dados dos leitores cadastrados.

O banco de dados se chama `galo_informa` e possui a tabela `mensagens`.

### Estrutura da tabela

| Campo | Tipo | Descrição |
|---|---|---|
| id | INT | Identificador automático |
| nome | VARCHAR(100) | Nome do leitor |
| email | VARCHAR(150) | E-mail do leitor |
| criada_em | DATETIME | Data e hora do cadastro |

O campo `email` possui uma restrição de unicidade para impedir que o mesmo endereço seja cadastrado mais de uma vez.

### Conexão com o banco

A conexão é realizada por meio do PDO, utilizando as seguintes configurações padrão do XAMPP:

| Configuração | Valor |
|---|---|
| Servidor | localhost |
| Banco de dados | galo_informa |
| Usuário | root |
| Senha | Vazia |
| Codificação | utf8mb4 |

As configurações podem ser alteradas no arquivo `backend/config/conexao.php`, conforme o ambiente utilizado.

## Como executar o projeto

### 1. Instalar o XAMPP

Instale o XAMPP para disponibilizar os serviços Apache e MySQL no ambiente local.

### 2. Colocar o projeto no servidor local

Copie a pasta do projeto para o diretório `htdocs` do XAMPP.

No Windows, normalmente:

```text
C:\xampp\htdocs\
```

### 3. Iniciar os serviços

Abra o painel de controle do XAMPP e inicie:

- Apache
- MySQL

### 4. Criar o banco de dados

1. Acesse `http://localhost/phpmyadmin`.
2. Entre na opção **Importar**.
3. Selecione o arquivo `backend/sql/banco.sql`.
4. Execute a importação.

O banco de dados `galo_informa` e a tabela `mensagens` serão criados automaticamente.

### 5. Configurar a conexão

Abra o arquivo:

```text
backend/config/conexao.php
```

Verifique se as credenciais correspondem à configuração do seu MySQL:

```php
$host = "localhost";
$banco = "galo_informa";
$usuario = "root";
$senha = "";
```

### 6. Acessar o projeto

Com o Apache e o MySQL iniciados, abra o navegador e acesse:

```text
http://localhost/NOME-DA-PASTA/frontend/
```

Substitua `NOME-DA-PASTA` pelo nome da pasta utilizada dentro de `htdocs`.

## Equipe responsável

| Integrante | Parte Feita |
|---|---|
| Matheus Felipe Medina Moreira | HTML |
| Arthur Pereira Galdino | Tópicos 1 ao 11 do CSS |
| Leonardo Arthur Viana Bacelete | Tópicos 12 e 13 do CSS |
| João Victor Cezario Leão | PHP |
| Giovanna Diniz Lanna | JavaScript |

## Instituição

**Faculdade Newton Paiva — Grupo Wyden**

**Disciplina:** ARA0062

**Ano:** 2026

---

Projeto acadêmico desenvolvido pela Equipe Galo.
