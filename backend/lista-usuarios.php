<?php
header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/config/conexao.php';

try {
    $consulta = $conexao->query(
        'SELECT nome, email FROM mensagens ORDER BY criada_em DESC, id DESC'
    );

    echo json_encode($consulta->fetchAll(PDO::FETCH_ASSOC), JSON_UNESCAPED_UNICODE);
} catch (PDOException $erro) {
    http_response_code(500);
    echo json_encode(['erro' => 'Não foi possível carregar os usuários cadastrados.']);
}
