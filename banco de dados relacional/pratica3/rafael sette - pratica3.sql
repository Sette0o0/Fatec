# 1
SELECT p.pes_nome
FROM Emprestimo e
JOIN Pessoa p ON p.pes_cod = e.pes_cod
WHERE e.emp_cod = 1;

# 2
SELECT edi_descricao
FROM Editora
ORDER BY edi_descricao;

# 3
SELECT liv_titulo
FROM Livro
WHERE liv_titulo LIKE 'A%'; # n tem livro q comece com 'A'

# 4
SELECT liv_titulo
FROM Livro
WHERE liv_titulo LIKE 'A%'
	AND anopublicacao > 2013;

# 5
SELECT COUNT(*) AS qtd_telefones
FROM Telefone
WHERE tel_ddd = 12;

# 6
SELECT a.pes_nro_matricula, COUNT(e.emp_cod) AS qtd_emprestimos
FROM Aluno a
LEFT JOIN Emprestimo e ON e.pes_cod = a.pes_cod
GROUP BY a.pes_nro_matricula;

# 7
SELECT ed.edi_cod, ed.edi_descricao, li.liv_cod
FROM Editora ed
LEFT JOIN Livro li ON li.edi_cod = ed.edi_cod
ORDER BY ed.edi_cod, li.liv_cod;

# 8
SELECT ex.exe_cod, ex.exe_descricao, e.emp_data_emprestimo
FROM Emprestimo e
JOIN Item_Emprestimo ie ON ie.emp_cod = e.emp_cod
JOIN Exemplar ex ON ex.exe_cod = ie.exe_cod
WHERE e.emp_data_emprestimo = '2015-11-03';

# 9
SELECT l.liv_titulo, COUNT(e.exe_cod) AS qtd_exemplares
FROM Livro l
JOIN Exemplar e ON e.liv_cod = l.liv_cod
GROUP BY l.liv_cod, l.liv_titulo
HAVING COUNT(e.exe_cod) > 3;

# 10
SELECT p.pes_nome, pr.titulacao, t.tel_numero
FROM Professor pr
JOIN Pessoa p ON p.pes_cod = pr.pes_cod
LEFT JOIN Telefone t ON t.pes_cod = pr.pes_cod
ORDER BY p.pes_nome;

# 11
SELECT liv_titulo, anopublicacao
FROM Livro
where anopublicacao = (
	select anopublicacao 
    from Livro
    order by anopublicacao ASC limit 1
);

# 12
SELECT p.pes_nome, COUNT(e.emp_cod) AS total_emprestimos
FROM Pessoa p
JOIN Emprestimo e ON e.pes_cod = p.pes_cod
GROUP BY p.pes_cod, p.pes_nome
HAVING COUNT(e.emp_cod) = (
	SELECT MAX(qtd)
    FROM (
        SELECT COUNT(*) AS qtd
        FROM Emprestimo
        GROUP BY pes_cod
    ) AS subEmp
);

# 13
SELECT l.liv_titulo, COUNT(ex.exe_cod) AS qtd_exemplares
FROM Livro l
LEFT JOIN Exemplar ex ON ex.liv_cod = l.liv_cod
GROUP BY l.liv_cod, l.liv_titulo;

# 14
SELECT liv_titulo
FROM Livro
WHERE liv_titulo LIKE 'A%'
	AND anopublicacao > 2011;

# 15
SELECT l.liv_titulo # assim ta listando livros repetidos se for pra mostrar sem repetir colocaria um DISTINCT entre o select e o l.liv_titulo
FROM Emprestimo e
JOIN Item_Emprestimo ie ON ie.emp_cod = e.emp_cod
JOIN Exemplar ex ON ex.exe_cod = ie.exe_cod
JOIN Livro l ON l.liv_cod = ex.liv_cod
WHERE e.pes_cod = 1;

# 16
# 16.1 Quantidade de livros por editora (inclusive as que não têm livros)
SELECT e.edi_cod, e.edi_descricao, COUNT(l.liv_cod) AS qtd_livros
FROM Editora e
LEFT JOIN Livro l ON l.edi_cod = e.edi_cod
GROUP BY e.edi_cod, e.edi_descricao;

# 16.2 Todas as editoras, com seus livros (mesmo editoras sem livro).
SELECT e.edi_descricao, l.liv_titulo
FROM Livro l
RIGHT JOIN Editora e ON e.edi_cod = l.edi_cod;

# 16.3 Professores que também são pessoas
SELECT p.pes_cod, p.pes_nome, pr.titulacao
FROM Pessoa p
INNER JOIN Professor pr ON pr.pes_cod = p.pes_cod;

# 16.4 Pessoas que não são professores
SELECT p.pes_nome
FROM Pessoa p
LEFT JOIN Professor pr ON pr.pes_cod = p.pes_cod
WHERE pr.pes_cod IS NULL;

# 16.5 Professores que não têm telefone.
SELECT pr.pes_cod, p.pes_nome
FROM Telefone t
RIGHT JOIN Professor pr ON pr.pes_cod = t.pes_cod
JOIN Pessoa p ON p.pes_cod = pr.pes_cod
WHERE t.tel_cod IS NULL;

# 16.6 Todas as pessoas e seus telefones, mesmo quem não tem telefone ou telefone que não tem pessoa vinculada.
SELECT p.pes_nome, t.tel_numero
FROM Pessoa p
LEFT JOIN Telefone t ON t.pes_cod = p.pes_cod
UNION
SELECT p.pes_nome, t.tel_numero
FROM Telefone t
RIGHT JOIN Pessoa p ON t.pes_cod = p.pes_cod;

# 16.7 Pessoas que não têm telefone OU telefones sem pessoa.
SELECT p.pes_nome, t.tel_numero
FROM Pessoa p
LEFT JOIN Telefone t ON t.pes_cod = p.pes_cod
WHERE t.tel_cod IS NULL
UNION
SELECT p.pes_nome, t.tel_numero
FROM Telefone t
RIGHT JOIN Pessoa p ON t.pes_cod = p.pes_cod
WHERE p.pes_cod IS NULL;