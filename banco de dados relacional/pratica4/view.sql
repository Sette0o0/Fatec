use db_empresa;

# 2
CREATE VIEW Funcionario_View AS
SELECT 
    f.fun_cod, f.fun_nome, f.fun_logradouro, ci.cid_nome,  e.est_nome AS est_estado, ca.car_descricao AS carg_descricao, d.dep_descricao
FROM Funcionario f
INNER JOIN Cargo ca ON ca.car_cod = f.car_cod
INNER JOIN Cidade ci ON ci.cid_cod = f.cid_cod
INNER JOIN Departamento d ON d.dep_cod = f.dep_cod
INNER JOIN Estado e ON e.est_cod = f.est_cod;

# 3
select * from Funcionario_View;

# 4
SELECT 
    f.fun_cod, f.fun_nome, f.fun_logradouro, f.fun_salario, f.fun_cep, f.fun_nro,
    ci.cid_nome,  e.est_nome AS est_estado, ca.car_descricao AS carg_descricao, d.dep_descricao
FROM Funcionario f
INNER JOIN Cargo ca ON ca.car_cod = f.car_cod
INNER JOIN Cidade ci ON ci.cid_cod = f.cid_cod
INNER JOIN Departamento d ON d.dep_cod = f.dep_cod
INNER JOIN Estado e ON e.est_cod = f.est_cod;

# 5
INSERT INTO Funcionario (fun_cod, fun_logradouro, fun_nome, fun_salario, fun_cep, fun_nro, car_cod, cid_cod, est_cod, dep_cod) VALUES
(6, 'Av. Paulista', 'Rafael Sette', 7500.00, '01311000', 606, 3, 1, 1, 3);
select * from Funcionario_View;

# 6
ALTER TABLE Funcionario 
ADD COLUMN fun_obs VARCHAR(100);

UPDATE Funcionario 
SET fun_obs = 'Funcionário dedicado, trabalha com React e MySQL'
WHERE fun_nome = 'Rafael Sette';

DROP VIEW IF EXISTS Funcionario_View;

CREATE VIEW Funcionario_View AS
SELECT 
    f.fun_cod, f.fun_nome, f.fun_logradouro, ci.cid_nome,  e.est_nome AS est_estado, ca.car_descricao AS carg_descricao, d.dep_descricao, f.fun_obs
FROM Funcionario f
INNER JOIN Cargo ca ON ca.car_cod = f.car_cod
INNER JOIN Cidade ci ON ci.cid_cod = f.cid_cod
INNER JOIN Departamento d ON d.dep_cod = f.dep_cod
INNER JOIN Estado e ON e.est_cod = f.est_cod;

SELECT * FROM Funcionario_View;

# 7
SHOW CREATE VIEW Funcionario_View;

SELECT TABLE_SCHEMA, TABLE_NAME, VIEW_DEFINITION
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_NAME = 'Funcionario_View';