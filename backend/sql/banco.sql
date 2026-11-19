CREATE DATABASE IF NOT EXISTS galo_informa
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;
USE galo_informa;

CREATE TABLE IF NOT EXISTS mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    criada_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uq_mensagens_email (email)
);
