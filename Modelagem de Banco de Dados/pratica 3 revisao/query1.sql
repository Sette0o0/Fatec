#create database db_teste;

create table paciente(
	cpf varchar(11) primary key,
    nome varchar(30) not null
);
create table telefone(
	numero varchar(11) primary key,
    tipo varchar(10) not null,
    cpf varchar(11) references paciente(cpf)
);
create table consulta(
    cod_consulta int primary key,
    data date not null,
    hora time not null,
    cpf varchar(11) references paciente(cpf)
);
create table convenio(
	cod_convenio int primary key,
    nome_convenio varchar(20)
);
create table possui(
	cod_convenio int references convenio(cod_convenio),
    cpf varchar(11) references paciente(cpf),
    tipo varchar(15),
    vencimento datetime
);
create table paga(
	cod_convenio int references convenio(cod_convenio),
    cod_consulta int references consulta(cod_consulta),
    valor float
);
create table medico(
	crm varchar(10) primary key,
    nome varchar(30) not null,
    especialidade varchar(20) not null,
    telefone varchar(11) references telefone(numero)
);
create table atende(
    cpf varchar(11) references paciente(cpf),
    cod_consulta int references consulta(cod_consulta),
    crm varchar(10) references medico(crm)
);