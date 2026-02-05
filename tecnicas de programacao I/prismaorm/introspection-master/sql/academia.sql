-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS prismaintrospection;

-- Selecionar o banco de dados para uso
USE prismaintrospection;

-- Tabela para armazenar os dados dos professores
CREATE TABLE IF NOT EXISTS Professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    genero ENUM('M', 'F') NOT NULL,  -- M para Masculino, F para Feminino
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    endereco TEXT,
    especialidade VARCHAR(100),  -- Especialidade do professor (ex: Jiu-Jitsu, Muay Thai, etc.)
    data_admissao DATE NOT NULL
);

-- Tabela para armazenar os níveis ou graus dos alunos
CREATE TABLE IF NOT EXISTS Niveis (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,  -- Exemplo: Iniciante, Intermediário, Avançado, Faixa Preta, etc.
    descricao TEXT
);

-- Tabela para armazenar os dados dos alunos
CREATE TABLE IF NOT EXISTS Alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    genero ENUM('M', 'F') NOT NULL,  -- M para Masculino, F para Feminino
    telefone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    endereco TEXT,
    data_inscricao DATE NOT NULL,
    nivel_id INT,  -- Relacionamento com a tabela Níveis
    FOREIGN KEY (nivel_id) REFERENCES Niveis(id)
);

-- Tabela para armazenar os pagamentos mensais dos alunos
CREATE TABLE IF NOT EXISTS Pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    data_pagamento DATE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    status_pagamento ENUM('PAGO', 'PENDENTE') NOT NULL,  -- Status do pagamento
    FOREIGN KEY (aluno_id) REFERENCES Alunos(id)
);

-- Tabela para registrar a presença dos alunos nas aulas
CREATE TABLE IF NOT EXISTS Presencas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    aluno_id INT,
    data_presenca DATE NOT NULL,
    aula_id INT,  -- Relacionamento com a tabela Aulas
    FOREIGN KEY (aluno_id) REFERENCES Alunos(id)
);

-- Tabela para registrar as aulas oferecidas pela academia
CREATE TABLE IF NOT EXISTS Aulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    professor_id INT,
    nome_aula VARCHAR(100) NOT NULL,
    data_aula DATE NOT NULL,
    horario TIME NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES Professores(id)
);