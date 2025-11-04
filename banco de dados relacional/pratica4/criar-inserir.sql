create database db_empresa;
use db_empresa;

CREATE TABLE Estado (
    est_cod INT PRIMARY KEY,
    est_nome VARCHAR(30) NOT NULL
);

CREATE TABLE Cidade (
    cid_cod INT PRIMARY KEY,
    est_cod INT NOT NULL,
    cid_nome VARCHAR(30) NOT NULL,
    CONSTRAINT fk_cidade_estado FOREIGN KEY (est_cod) REFERENCES Estado(est_cod)
);

CREATE TABLE Departamento (
    dep_cod INT PRIMARY KEY,
    dep_descricao VARCHAR(20)
);

CREATE TABLE Cargo (
    car_cod INT PRIMARY KEY,
    car_descricao VARCHAR(20)
);

CREATE TABLE Funcionario (
	fun_cod INT PRIMARY KEY,
	fun_logradouro VARCHAR(30),
	fun_nome VARCHAR(30),
	fun_salario DECIMAL(8,2),
	fun_cep VARCHAR(8),
	fun_nro INT,
	car_cod INT,
	cid_cod INT,
	est_cod INT,
	dep_cod INT,
	CONSTRAINT fk_funcionario_cargo FOREIGN KEY (car_cod) REFERENCES Cargo(car_cod),
	CONSTRAINT fk_funcionario_cidade FOREIGN KEY (cid_cod) REFERENCES Cidade(cid_cod),
	CONSTRAINT fk_funcionario_estado FOREIGN KEY (est_cod) REFERENCES Estado(est_cod),
	CONSTRAINT fk_funcionario_departamento FOREIGN KEY (dep_cod) REFERENCES Departamento(dep_cod)
);

INSERT INTO Estado (est_cod, est_nome) VALUES
(1, 'São Paulo'),
(2, 'Rio de Janeiro'),
(3, 'Minas Gerais'),
(4, 'Bahia'),
(5, 'Paraná');

INSERT INTO Cidade (cid_cod, est_cod, cid_nome) VALUES
(1, 1, 'São Paulo'),
(2, 1, 'Campinas'),
(3, 2, 'Rio de Janeiro'),
(4, 3, 'Belo Horizonte'),
(5, 4, 'Salvador');

INSERT INTO Departamento (dep_cod, dep_descricao) VALUES
(1, 'RH'),
(2, 'Financeiro'),
(3, 'TI'),
(4, 'Marketing'),
(5, 'Vendas');

INSERT INTO Cargo (car_cod, car_descricao) VALUES
(1, 'Analista'),
(2, 'Gerente'),
(3, 'Desenvolvedor'),
(4, 'Estagiário'),
(5, 'Diretor');

INSERT INTO Funcionario 
(fun_cod, fun_logradouro, fun_nome, fun_salario, fun_cep, fun_nro, car_cod, cid_cod, est_cod, dep_cod) VALUES
(1, 'Rua A', 'João Silva', 3500.00, '01001000', 101, 1, 1, 1, 3),
(2, 'Rua B', 'Maria Souza', 7500.00, '20020000', 202, 2, 3, 2, 2),
(3, 'Av. Central', 'Carlos Lima', 5000.00, '30030000', 303, 3, 4, 3, 3),
(4, 'Rua das Flores', 'Ana Oliveira', 1800.00, '40040000', 404, 4, 5, 4, 1),
(5, 'Rua Paulista', 'Roberto Santos', 12000.00, '50050000', 505, 5, 2, 1, 5);
