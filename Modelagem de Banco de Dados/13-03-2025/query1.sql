create database db_loja;

create table Cliente(
	cli_code int primary key auto_increment,
    cli_nome varchar(30),
    cli_ativo int default 1,
    cli_data_nasc date
);
 select * from information_schema.table_constraints;
 
 insert into Cliente(cli_code, cli_nome, cli_data_nasc) value
	("1", "Rafael Sette", "2006/09/26");