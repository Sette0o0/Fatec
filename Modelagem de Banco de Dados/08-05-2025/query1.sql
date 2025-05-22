create database venda;
use venda;

select * from produto;
select pro_codigo, prod_descricao, pro_valor_unidade, pro_valor_unidade*1.10 as valor from produto;

select * from pedido
where ped_data = '2000-10-07';

select * from pedido
where ped_prazo_entrega > 20 and
ped_data > '2020-01-01';

select length(cli_nome), cli_nome from cliente
where length(cli_nome) > 6;

select * from cliente;

select count(*) from cliente;

select count(*) from pedido;

select cli_nome, ped_data from pedido, cliente;

select c.cli_nome, p.ped_data from
pedido as p, cliente as c where
c.cli_codigo = p.cli_codigo;

select c.cli_nome, p.ped_data
from pedido p inner join cliente c
on c.cli_codigo = p.cli_codigo
where p.ped_data > '2012-01-01';

select c.cli_nome, p.ped_numero, v.ven_nome
from pedido p, cliente c, vendedor v 
where c.cli_codigo = p.cli_codigo
and v.ven_codigo = p.ven_codigo;

select c.cli_nome, p.ped_numero, v.ven_nome
from pedido p
inner join cliente c on c.cli_codigo = p.cli_codigo
inner join vendedor v on v.ven_codigo = p.ven_codigo;

select pro.pro_codigo, pro.prod_descricao, v.ven_codigo, v.ven_nome, ped.ped_numero
from pedido ped
inner join vendedor v on ped.ven_codigo = v.ven_codigo 
inner join item_pedido ip on ped.ped_numero = ip.ped_numero
inner join produto pro on ip.pro_codigo = pro.pro_codigo
where v.ven_nome = 'Josias';
select * from item_pedido;