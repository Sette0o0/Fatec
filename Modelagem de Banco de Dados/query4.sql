create table cliente(
	cli_id int,
    cli_nome varchar(30)
);

create table pedido(
	ped_id int,
    ped_valor_total decimal,
    ped_data date
);
drop table pedido;

alter table cliente
add constraint primary key (cli_id);

alter table pedido
add constraint primary key (ped_id);

alter table pedido
add column cli_id int;

alter table pedido
add foreign key (cli_id) references cliente(cli_id);

select * from information_schema.table_constraints;

