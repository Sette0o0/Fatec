# create database db_loja;

# drop table cliente;

create table cliente(
	cli_code int primary key auto_increment,
    cli_nome varchar(30),
    cli_ativo int default 1,
    cli_data_nasc date
);

select * from information_schema.table_constraints
where table_schema = "db_loja";

select * from cliente;

describe cliente;
 
insert into cliente(cli_code, cli_nome, cli_data_nasc) value
	("1", "Rafael Sette", "2006-09-26");

ALTER TABLE cliente
RENAME COLUMN cli_code to cli_cod;

insert into cliente(cli_nome, cli_data_nasc) values
("Ana", "2003-3-4"),
("Maria", "2004-5-6"),
("Paulo", "2005-6-7");

create table aluno(
	alu_cod int primary key auto_increment,
    alu_matricula int not null,
    alu_nome varchar(40),
    alu_cpf varchar(11),
    unique(alu_cpf)
);

drop table aluno;

select * from aluno;

insert into aluno values
(default, 1, "José", "111"),
(default, 1, "Maria", "112"),
(default, 1, "Ana", "111");

create table pedido(
	ped_cod int primary key auto_increment,
    ped_data date,
    ped_valor decimal(7, 2),
    ped_cli_cod int,
    foreign key(ped_cli_cod) references cliente(cli_cod)
);

insert into pedido values
("2006-6-7", 2343.17, 1),
("2008-5-9", 213.29, 2),
("2005-9-2", 43.33, 1);

create table produto(
	pro_cod int primary key auto_increment,
	pro_nome varchar(30),
    pro_quantidade int,
    pro_valor decimal(7, 2)
);

insert into produto(pro_nome, pro_quantidade, pro_valor) values
("Queijo", 52, 121.43),
("Batata", 200, 0.77),
("Pc gamer boladão", 7, 7777.77);

create table item_pedido(
	ped_cod int,
    pro_cod int,
    ite_quantidade int,
    ite_valor decimal(7, 2),
    foreign key(ped_cod) references pedido(ped_cod),
    foreign key(pro_cod) references produto(pro_cod),
    primary key(ped_cod, pro_cod)
);

insert into item_pedido(ped_cod, pro_cod, ite_quantidade, ite_valor) values
(1, 1, 10, produto.pro_valor where produto.pro_cod = 1