# 1
DELIMITER $$

CREATE PROCEDURE CadastrarLivroComExemplares (
    IN p_titulo VARCHAR(20),
    IN p_edicao INT,
    IN p_ano VARCHAR(4),
    IN p_editora INT,
    IN p_qtd_exemplares INT
)
BEGIN
    DECLARE novo_livro INT;
    DECLARE i INT DEFAULT 1;
    DECLARE max_exe_cod INT;

    INSERT INTO Livro (liv_titulo, edicao, anopublicacao, edi_cod)
    VALUES (p_titulo, p_edicao, p_ano, p_editora);

    SET novo_livro = LAST_INSERT_ID();
    
    SELECT COALESCE(MAX(exe_cod), 0) INTO max_exe_cod FROM Exemplar;

    WHILE i <= p_qtd_exemplares DO
        SET max_exe_cod = max_exe_cod + 1;
        INSERT INTO Exemplar (exe_cod, exe_descricao, liv_cod, ex_status)
        VALUES (max_exe_cod, i, novo_livro, 0);
        SET i = i + 1;
    END WHILE;
END $$

DELIMITER ;
CALL CadastrarLivroComExemplares('Programação Lógica', 1, '2020', 1, 3);

# 2
DELIMITER $$

CREATE PROCEDURE RegistrarEmprestimo (
    IN p_pes_cod INT,
    IN p_data_emprestimo DATE,
    IN p_data_prev_dev DATE
)
BEGIN
    DECLARE novo_emp_cod INT;
    
    SELECT COALESCE(MAX(emp_cod), 0) + 1 INTO novo_emp_cod FROM Emprestimo;
    
    INSERT INTO Emprestimo (emp_cod, pes_cod, emp_data_emprestimo, emp_data_PrevDev)
    VALUES (novo_emp_cod, p_pes_cod, p_data_emprestimo, p_data_prev_dev);
END $$

DELIMITER ;
CALL RegistrarEmprestimo(2, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 10 DAY));

# 3
DELIMITER $$

CREATE PROCEDURE RegistrarDevolucao (
    IN p_emp_cod INT,
    IN p_exe_cod INT
)
BEGIN
    DECLARE novo_dev_cod INT;
    
    SELECT COALESCE(MAX(dev_cod), 0) + 1 INTO novo_dev_cod FROM Devolucao;
    
    INSERT INTO Devolucao (dev_cod, data_dev, emp_cod, exe_cod)
    VALUES (novo_dev_cod, CURDATE(), p_emp_cod, p_exe_cod);
END $$

DELIMITER ;
CALL RegistrarDevolucao(1, 1);

# 4
DELIMITER $$

CREATE PROCEDURE HistoricoEmprestimos (
    IN p_pes_cod INT
)
BEGIN
    SELECT e.emp_cod, e.emp_data_emprestimo, e.emp_data_PrevDev, l.liv_titulo
    FROM Emprestimo e
    JOIN Item_Emprestimo ie ON e.emp_cod = ie.emp_cod
    JOIN Exemplar ex ON ex.exe_cod = ie.exe_cod
    JOIN Livro l ON l.liv_cod = ex.liv_cod
    WHERE e.pes_cod = p_pes_cod;
END $$

DELIMITER ;
CALL HistoricoEmprestimos(1);

# 5
DELIMITER $$

CREATE PROCEDURE LivrosEmprestadosNaoDevolvidos()
BEGIN
    SELECT DISTINCT l.liv_titulo, ex.exe_cod, e.emp_cod, e.emp_data_emprestimo
    FROM Livro l
    JOIN Exemplar ex ON ex.liv_cod = l.liv_cod
    JOIN Item_Emprestimo ie ON ie.exe_cod = ex.exe_cod
    JOIN Emprestimo e ON e.emp_cod = ie.emp_cod
    LEFT JOIN Devolucao d ON d.emp_cod = e.emp_cod AND d.exe_cod = ex.exe_cod
    WHERE d.dev_cod IS NULL;
END $$

DELIMITER ;
CALL LivrosEmprestadosNaoDevolvidos();

# 6
DELIMITER $$

CREATE PROCEDURE AtualizarStatus()
BEGIN
    UPDATE Exemplar ex
    SET ex.ex_status = 0;

    UPDATE Exemplar ex
    SET ex.ex_status = 1
    WHERE ex.exe_cod IN (
        SELECT ie.exe_cod
        FROM Item_Emprestimo ie
        LEFT JOIN Devolucao d ON d.exe_cod = ie.exe_cod AND d.emp_cod = ie.emp_cod
        WHERE d.dev_cod IS NULL
    );
END $$

DELIMITER ;
CALL AtualizarStatus();

# 7
DELIMITER $$

CREATE PROCEDURE DisponibilidadeLivro (
    IN p_liv_cod INT,
    OUT p_quantidade INT
)
BEGIN
    SELECT COUNT(*) INTO p_quantidade
    FROM Exemplar
    WHERE liv_cod = p_liv_cod AND ex_status = 0;
END $$

DELIMITER ;
CALL AtualizarStatus();
CALL DisponibilidadeLivro(2, @qtd);
SELECT @qtd AS 'Exemplares disponíveis';

# 8
DELIMITER $$

CREATE PROCEDURE AtualizarTitulacao (
    IN p_pes_cod INT,
    IN p_nova_titulacao VARCHAR(20)
)
BEGIN
    UPDATE Professor
    SET titulacao = p_nova_titulacao
    WHERE pes_cod = p_pes_cod;
END $$

DELIMITER ;
CALL AtualizarTitulacao(4, 'Doutorado');

# 9
DELIMITER $$

CREATE PROCEDURE InserirPessoaComTelefone (
    IN p_pes_cod INT,
    IN p_nome VARCHAR(40),
    IN p_cpf BIGINT,
    IN p_rg VARCHAR(20),
    IN p_email VARCHAR(30),
    IN p_tel_numero INT,
    IN p_tip_descricao VARCHAR(20),
    IN p_tel_ddd INT
)
BEGIN
    DECLARE novoTelCod INT;
    
    INSERT INTO Pessoa VALUES (p_pes_cod, p_nome, p_cpf, p_rg, p_email);
    
    SELECT COALESCE(MAX(tel_cod), 0) + 1 INTO novoTelCod FROM Telefone;
    
    INSERT INTO Telefone VALUES (
        novoTelCod,
        p_tel_numero, p_tip_descricao, p_tel_ddd, p_pes_cod
    );
END $$

DELIMITER ;
CALL InserirPessoaComTelefone(15, 'Carlos', 66666666666, '9999999', 'carlos@gmail.com', 99998888, 'CELULAR', 12);

# 10
DELIMITER $$

CREATE PROCEDURE DevolucoesEmAtraso()
BEGIN
    SELECT e.emp_cod, p.pes_nome, e.emp_data_PrevDev
    FROM Emprestimo e
    JOIN Pessoa p ON p.pes_cod = e.pes_cod
    LEFT JOIN Devolucao d ON d.emp_cod = e.emp_cod
    WHERE e.emp_data_PrevDev < CURDATE() AND d.dev_cod IS NULL;
END $$

DELIMITER ;
CALL DevolucoesEmAtraso();

# 11
DELIMITER $$

CREATE PROCEDURE RegistrarEmprestimoSeDisponivel (
    IN p_pes_cod INT,
    IN p_exe_cod INT
)
BEGIN
    DECLARE v_emp INT;
    DECLARE novo_emp_cod INT;

    SELECT COUNT(*) INTO v_emp
    FROM Item_Emprestimo ie
    LEFT JOIN Devolucao d ON d.emp_cod = ie.emp_cod AND d.exe_cod = ie.exe_cod
    WHERE ie.exe_cod = p_exe_cod AND d.dev_cod IS NULL;

    IF v_emp > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Erro: exemplar já emprestado e não devolvido.';
    ELSE
        SELECT COALESCE(MAX(emp_cod), 0) + 1 INTO novo_emp_cod FROM Emprestimo;
        
        INSERT INTO Emprestimo (emp_cod, pes_cod, emp_data_emprestimo, emp_data_PrevDev)
        VALUES (novo_emp_cod, p_pes_cod, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 10 DAY));
        
        INSERT INTO Item_Emprestimo (emp_cod, exe_cod)
        VALUES (novo_emp_cod, p_exe_cod);
    END IF;
END $$

DELIMITER ;
CALL RegistrarEmprestimoSeDisponivel(2, 3);

# 12
DELIMITER $$

CREATE PROCEDURE ExcluirPessoaSeSemEmprestimo (
    IN p_pes_cod INT
)
BEGIN
    DECLARE v_qtd INT;

    SELECT COUNT(*) INTO v_qtd FROM Emprestimo WHERE pes_cod = p_pes_cod;

    IF v_qtd > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Erro: pessoa possui empréstimos e não pode ser excluída.';
    ELSE
        DELETE FROM Telefone WHERE pes_cod = p_pes_cod;
        
        DELETE FROM Aluno WHERE pes_cod = p_pes_cod;
        DELETE FROM Professor WHERE pes_cod = p_pes_cod;
        
        DELETE FROM Pessoa WHERE pes_cod = p_pes_cod;
    END IF;
END $$

DELIMITER ;
CALL ExcluirPessoaSeSemEmprestimo(10);

# 13
DELIMITER $$

CREATE PROCEDURE ProrrogarEmprestimosPessoa (
    IN p_pes_cod INT
)
BEGIN
    DECLARE fim INT DEFAULT 0;
    DECLARE v_emp INT;
    DECLARE c CURSOR FOR
        SELECT e.emp_cod
        FROM Emprestimo e
        LEFT JOIN Devolucao d ON d.emp_cod = e.emp_cod
        WHERE e.pes_cod = p_pes_cod AND d.dev_cod IS NULL;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET fim = 1;

    OPEN c;
    REPEAT
        FETCH c INTO v_emp;
        IF NOT fim THEN
            UPDATE Emprestimo
            SET emp_data_PrevDev = DATE_ADD(emp_data_PrevDev, INTERVAL 7 DAY)
            WHERE emp_cod = v_emp;
        END IF;
    UNTIL fim END REPEAT;
    CLOSE c;
END $$

DELIMITER ;
CALL ProrrogarEmprestimosPessoa(1);
