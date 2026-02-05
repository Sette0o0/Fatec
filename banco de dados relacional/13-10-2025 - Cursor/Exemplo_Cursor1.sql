use rh;

DELIMITER //

CREATE PROCEDURE exemplo_cursor()
BEGIN
    DECLARE v_nome VARCHAR(100);
    DECLARE fim_linhas BOOLEAN DEFAULT FALSE;
    
    DECLARE cursor_funcionario CURSOR FOR SELECT fun_nome FROM funcionario;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim_linhas = TRUE;
    
    OPEN cursor_funcionario;

    leitura_loop: LOOP
        FETCH cursor_funcionario INTO v_nome;
        IF fim_linhas THEN
            LEAVE leitura_loop;
        END IF;

        -- Exemplo de lógica: apenas exibição
        SELECT CONCAT('Funcionario: ', v_nome);
    END LOOP;

    CLOSE cursor_funcionario;
END //

DELIMITER ;

call exemplo_cursor();

