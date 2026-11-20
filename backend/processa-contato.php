<?php
$nome = trim(filter_input(INPUT_POST, 'nome', FILTER_UNSAFE_RAW) ?? '');
$email = trim(filter_input(INPUT_POST, 'email', FILTER_UNSAFE_RAW) ?? '');

$nomeSeguro = htmlspecialchars($nome, ENT_QUOTES, 'UTF-8');
$emailSeguro = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

$dadosValidos = $nome !== ''
    && strlen($nome) <= 100
    && filter_var($email, FILTER_VALIDATE_EMAIL)
    && strlen($email) <= 150;

require_once __DIR__ . "/config/conexao.php";

$cadastroRealizado = false;

if ($dadosValidos) {
    try {
        $sql = "INSERT INTO mensagens (nome, email)
                VALUES (:nome, :email)";

        $consulta = $conexao->prepare($sql);

        $consulta->execute([
            ':nome' => $nome,
            ':email' => $email
        ]);

        $cadastroRealizado = true;

    } catch (PDOException $erro) {
        $cadastroRealizado = false;
    }
}


?>
<!DOCTYPE html>
   <html lang="pt-BR">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Mensagem recebida — Equipe Galo</title>
         <link rel="stylesheet" href="../frontend/css/estilo.css">
         <script src="../frontend/js/script.js" defer></script>
      </head>
      <body>
         <header>
            <h1>Equipe Galo</h1>
         </header>
         <main>
            <section id="resposta">
              <?php if ($cadastroRealizado): ?>
                  <h2>Obrigado, <?php echo $nomeSeguro; ?>!</h2>
                  <p>
                     Seu cadastro foi realizado com sucesso.
                     As novidades serão enviadas para o e-mail
                     <strong><?php echo $emailSeguro; ?></strong>.
                  </p>
               <?php else: ?>
                  <h2>Não foi possível confirmar seu cadastro</h2>
                  <p>Informe um nome válido e um endereço de e-mail válido.</p>
               <?php endif; ?>
               <p><a href="../frontend/index.html#cadastro">← Voltar para a página</a></p>
            </section>
         </main>
         <footer>
            <p>Equipe Galo &middot; 2026 &middot; ARA0062 &middot; Newton Paiva</p>
         </footer>
      </body>
</html>
