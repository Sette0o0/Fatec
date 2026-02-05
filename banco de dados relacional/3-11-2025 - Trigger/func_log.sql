create table func_log
(fun_id int,
 fun_data date,
 novo_sal varchar(30),
 msg varchar(30)); 
 
 
DELIMITER $$
CREATE TRIGGER historico_salario
AFTER UPDATE ON funcionario
FOR EACH ROW
BEGIN
	IF NEW.fun_sal > 1000 THEN
		INSERT INTO func_log (fun_id, fun_data, novo_sal, msg)
		VALUES (NEW.fun_cod, NOW(), NEW.fun_sal, 'Novo salário
		Superavaliado');
	END IF;
END$$
DELIMITER ;

