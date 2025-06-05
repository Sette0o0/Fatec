create table departamento(
	cod_depart int(4) primary key,
    nome varchar(30) not null,
    data_inicial date
);

create table localizacao(
    cod_depart int(4),
	local varchar(252),
    primary key (cod_depart, local),
    foreign key (cod_depart) references departamento(cod_depart)
);

create table funcionario(
	cod_func int(4) primary key,
    nome varchar(100) not null,
    cpf varchar(15),
    salario decimal(4, 2) check (salario > 1000),
    endereco varchar(252),
    sexo char(1) check (sexo in ('F', 'M')),
    cod_super int(4),
    cod_depart int(4),
    foreign key (cod_super) references funcionario(cod_func),
    foreign key (cod_depart) references departamento(cod_depart)
);

create table projeto(
	cod_proj int(4) primary key,
    titulo varchar(150) not null,
    descricao varchar(252),
    data_cad date default (CURRENT_DATE),
    cod_depart int(4),
    foreign key (cod_depart) references departamento(cod_depart)
);

create table dependente(
	cod_func int(4),
    seq int(4),
    nome varchar(100) not null,
    parentesco varchar(30) not null check (parentesco in ('PAI', 'MÃE', 'IRMÃO', 'IRMÃ', 'FILHO', 'FILHA')),
    data_nasc date,
    PRIMARY KEY (cod_func, seq),
    foreign key (cod_func) references funcionario(cod_func)
);

create table participa(
    cod_func int(4),
    cod_proj int(4),
    horas varchar(50),
    primary key (cod_func, cod_proj),
    foreign key (cod_func) references funcionario(cod_func),
    foreign key (cod_proj) references projeto(cod_proj)
);