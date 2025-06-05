-- Rafael Sette de Araujo
-- Questão 1
-- A
alter table projeto
add column status int(1) not null check (status in (0, 1));

-- B
alter table projeto
modify column titulo varchar(155) not null;

-- C
alter table projeto
rename column data_cad to data_cadastro;

-- Questão 2
-- A
alter table funcionario
drop column endereco;

create table endereco (
    id int(11) not null auto_increment primary key,
    numero int(11) not null,
    rua varchar(100) not null,
    cep char(8) not null,
    complemento varchar(50),
    bairro varchar(50) not null,
    cidade varchar(50) not null,
    estado char(2) not null
);

create table endereco_funcionario (
    id int(11) not null auto_increment primary key,
    funcionario_id int(11) not null,
    endereco_id int(11) not null,
    foreign key (funcionario_id) references funcionario(cod_func),
    foreign key (endereco_id) references endereco(id)
);

-- B
alter table funcionario
modify column salario decimal(4,2) not null;

-- Questão 3
-- A
alter table dependente
drop column parentesco;

create table parentesco (
    id int(11) not null auto_increment primary key,
    descricao varchar(50) not null
);

alter table dependente
add column parentesco_id int(11) not null,
add foreign key (parentesco_id) references parentesco(id);

-- B
alter table dependente
add column cpf char(11) not null unique;

-- C
ALTER TABLE dependente
DROP FOREIGN KEY dependente_ibfk_1;

ALTER TABLE dependente
ADD CONSTRAINT fk_dependente_funcionario
FOREIGN KEY (cod_func) REFERENCES funcionario(cod_func)
ON DELETE CASCADE;

-- Questão 4
-- A
alter table participa
rename to func_projeto;