# 1
select * from cliente order by cli_nome;

# 2
select * from cliente
where cli_nome like 'F%'
or cli_nome like 'B%'
and cli_estado = 'SP';

# 3
select cli.cli_codigo, cli.cli_nome, ped.ped_numero
from pedido ped
inner join cliente cli on ped.cli_codigo = cli.cli_codigo
where ped.ped_numero = 1;

# 4
select cli.cli_codigo, cli.cli_nome, ven.ven_codigo, ven.ven_nome, ped.ped_numero
from pedido ped
inner join cliente cli on ped.cli_codigo = cli.cli_codigo
inner join vendedor ven on ped.ven_codigo = ven.ven_codigo
where ped.ped_numero = 2;

# 5
select count(*) from pedido;

# 6
select ven_codigo, count(*) from pedido group by ven_codigo;

# 7
select ip.ped_numero, pro.prod_descricao
from item_pedido ip
inner join produto pro on ip.pro_codigo = pro.pro_codigo
where ip.ped_numero = 1;

# 8
select sum(ip.item_quantidade * pro.pro_valor_unidade) total, ped.ped_numero
from pedido ped
inner join item_pedido ip on ped.ped_numero = ip.ped_numero
inner join produto pro on ip.pro_codigo = pro.pro_codigo
where ped.ped_numero = 1;

# 9
select cli.*, tel.tel_numero
from cliente cli 
inner join telefone tel on cli.cli_codigo = tel.cli_codigo;

# 10
select cli.*, tel.tel_numero
from cliente cli 
left outer join telefone tel on cli.cli_codigo = tel.cli_codigo;

#11
select prod_descricao, pro_quantidade from produto;
 
# 12
select * from pedido
where ped_data = 2010-10-01;
 
# 13
select * from pedido
where ped_data = 2010-10-01 and ped_prazo_entrega > 3 ;
 
# 14
select * from pedido p
inner join item_pedido i on i.ped_numero = p.ped_numero
inner join produto pd on pd.pro_codigo = i.pro_codigo
where prod_descricao like 'Caneta';

# 15
select p.ped_numero, p.ped_data, c.cli_nome from cliente c
inner join pedido p on c.cli_codigo = p.cli_codigo
inner join item_pedido i on p.ped_numero = i.ped_numero
where c.cli_codigo = 1;
 
# 16
select count(*) from cliente c
inner join pedido p on c.cli_codigo = p.cli_codigo
inner join item_pedido i on p.ped_numero = i.ped_numero
where c.cli_codigo = 2;
 
# 17
select prod_descricao from produto 
where pro_valor_unidade = (select max(pro_valor_unidade) from produto);
 
# 18
select * from pedido p
inner join item_pedido i on p.ped_numero = i.ped_numero
where item_quantidade > 5;
 
# 19
select * from cliente c
inner join pedido p on c.cli_codigo = p.cli_codigo
where ped_prazo_entrega > 15 and cli_estado like 'SP' or 'RJ';
 