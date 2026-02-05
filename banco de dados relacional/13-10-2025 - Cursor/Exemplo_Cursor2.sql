use rh;


 DELIMITER $$
CREATE PROCEDURE Calcular_Salario_Anual (IN v_dep_id INT)
BEGIN
    DECLARE v_fun_nome VARCHAR(20) DEFAULT "";
    DECLARE v_fun_sal DECIMAL(10,2) DEFAULT 0;
    DECLARE v_total_sal DECIMAL(10,2) DEFAULT 0;
    DECLARE done INT DEFAULT FALSE;
    
    -- Declarar o cursor
    DECLARE sal_func_cursor CURSOR FOR
        SELECT fun_nome, fun_sal, fun_sal * 12
        FROM funcionario
        WHERE dep_id = v_dep_id;
    
    -- Declarar o manipulador para o fim do cursor
    -- define a variável done como TRUE quando não houver mais registros no cursor.
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
    
    -- Abrir o cursor
    OPEN sal_func_cursor;
    
    funcionarios: LOOP
        -- Buscar dados no cursor
        FETCH sal_func_cursor INTO v_fun_nome, v_fun_sal, v_total_sal;
        
        -- Verificar se não há mais dados
        -- é verificado se done é TRUE, e se for, o laço é interrompido com LEAVE.
        IF done THEN
            LEAVE funcionarios;
        END IF;
        
        -- Inserir dados na tabela se o salário anual for maior que 3000
        IF v_total_sal > 3000.00 THEN
            INSERT INTO sal_tot VALUES(v_fun_nome, v_total_sal);
        END IF;
    END LOOP funcionarios;
    
    -- Fechar o cursor
    CLOSE sal_func_cursor;
END $$
DELIMITER ;



call Calcular_Salario_Anual (1);

select * from sal_tot;

select * from funcionario;




DELIMITER $$

CREATE PROCEDURE Inserir_Func_Acima_Media(IN v_dep_id INT)
BEGIN
    DECLARE v_fun_cod INT;
    DECLARE v_fun_nome VARCHAR(20);
    DECLARE v_fun_sal DECIMAL(10,2);
    DECLARE v_media_sal DECIMAL(10,2);
    DECLARE done INT DEFAULT FALSE;

    -- Declarar cursor para selecionar os funcionários do departamento
    DECLARE func_cursor CURSOR FOR
        SELECT fun_cod, fun_nome, IFNULL(fun_sal, 0) 
        FROM funcionario
        WHERE dep_id = v_dep_id;

    -- Manipulador para o fim do cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    -- Calcular a média salarial dos funcionários do departamento
    SELECT AVG(fun_sal) INTO v_media_sal
    FROM funcionario
    WHERE dep_id = v_dep_id;

    -- Abrir o cursor
    OPEN func_cursor;

    -- Loop para percorrer todos os funcionários
    funcionarios_loop: LOOP
        -- Buscar dados do cursor
        FETCH func_cursor INTO v_fun_cod, v_fun_nome, v_fun_sal;

        -- Verificar se não há mais registros
        IF done THEN
            LEAVE funcionarios_loop;
        END IF;

        -- Verificar se o salário do funcionário é maior que a média
        IF v_fun_sal > v_media_sal THEN
            -- Inserir na tabela funcionarios_acima_media
            INSERT INTO funcionarios_acima_media (fun_cod, fun_nome, fun_sal, dep_id)
            VALUES (v_fun_cod, v_fun_nome, v_fun_sal, v_dep_id);
        END IF;
    END LOOP funcionarios_loop;

    -- Fechar o cursor
    CLOSE func_cursor;
END $$

DELIMITER ;

CALL Inserir_Func_Acima_Media(2);

select * from funcionarios_acima_media;

select avg(fun_sal) from funcionario;-- 3500
select * from funcionario;

