# Rafael Sette e Rebeca Lima

alter table departamento
add column dep_total_sal decimal (10, 2) default 0;

update departamento d
join (
	select dep_id, sum(fun_sal) as total from funcionario
    where dep_id is not null
    group by dep_id
) f on f.dep_id = d.dep_id
set d.dep_total_sal = f.total;

# Inserção de um novo empregado
DELIMITER $$
CREATE TRIGGER update_dep_total_insert
AFTER INSERT ON funcionario
FOR EACH ROW
BEGIN
	update departamento
	set dep_total_sal = new.fun_sal + dep_total_sal
	where dep_id = new.dep_id;
END$$
DELIMITER ;

# teste
insert into funcionario values
(7, "Sette", 2000, 1);

# Alteração salarial de um empregado
DELIMITER $$
CREATE TRIGGER update_dep_total_update_sal
after update on funcionario
for each row
begin
	if new.fun_sal <> old.fun_sal then
		update departamento
		set dep_total_sal = dep_total_sal - old.fun_sal + new.fun_sal
        where dep_id = new.dep_id;
	end if;
END$$
DELIMITER ;

# teste
update funcionario
set fun_sal = 2300
where fun_cod = 7;

# Mudança de departamento
DELIMITER $$
CREATE TRIGGER update_dep_total_update_dep
after update on funcionario
for each row
begin
	if new.dep_id <> old.dep_id then
		update departamento
        set dep_total_sal = dep_total_sal - old.fun_sal
        where dep_id = old.dep_id;
        
        update departamento
        set dep_total_sal = dep_total_sal + old.fun_sal
        where dep_id = new.dep_id;
	end if;
END$$
DELIMITER ;

# teste
update funcionario
set dep_id = 2, fun_sal = 140
where fun_cod = 7;

# Remoção de um empregado
DELIMITER $$
CREATE TRIGGER update_dep_total_delete_func
after delete on funcionario
for each row
begin
	update departamento
    set dep_total_sal = dep_total_sal - old.fun_sal
    where dep_id = old.dep_id;
END$$
DELIMITER ;

# teste
delete from funcionario
where fun_cod = 7;