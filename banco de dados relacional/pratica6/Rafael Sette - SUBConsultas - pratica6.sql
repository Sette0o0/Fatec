# Rafael Sette de Araujo
# 1
SELECT g.grav_nome
FROM gravadora g
WHERE g.grav_codigo NOT IN (
    SELECT grav_codigo
    FROM cd
    WHERE cd_preco_venda < 80
);

# 2
SELECT c.cd_nome, c.cd_preco_venda, g.grav_nome
FROM cd c
JOIN gravadora g ON c.grav_codigo = g.grav_codigo
WHERE c.cd_preco_venda = (
    SELECT MAX(cd_preco_venda)
    FROM cd
    WHERE grav_codigo = g.grav_codigo
);

# 3
SELECT *
FROM cd
WHERE cd_preco_venda < ALL (
    SELECT cd_preco_venda
    FROM cd
    WHERE grav_codigo = 10
);

# 4
SELECT *
FROM cd
WHERE cd_preco_venda < (
    SELECT AVG(cd_preco_venda) FROM cd
);

# 5
SELECT CONCAT(UCASE(LEFT(cd_nome,1)), LCASE(SUBSTRING(cd_nome,2))) AS cd_nome_formatado
FROM cd
WHERE cd_preco_venda > 10.00 OR grav_codigo = 3
ORDER BY cd_nome_formatado DESC;

# 6
SELECT c.cd_nome, c.cd_data_lancamento, g.grav_nome
FROM cd c
LEFT JOIN gravadora g ON c.grav_codigo = g.grav_codigo
WHERE c.cd_data_lancamento BETWEEN '2025-010-01' AND NOW();

# 7
SELECT c.cd_nome, g.grav_nome
FROM cd c
LEFT JOIN gravadora g ON c.grav_codigo = g.grav_codigo;

# 8
SELECT f.cd_codigo, COUNT(f.mus_codigo) AS qtd_musicas
FROM faixa f
GROUP BY f.cd_codigo;

# 9
SELECT c.cd_nome, cat.cat_codigo
FROM cd c
JOIN cd_categoria cat ON c.cd_preco_venda BETWEEN cat.menor_preco AND cat.maior_preco;

# 10
SELECT c.cd_nome AS cd_principal, ci.cd_nome AS cd_indicado
FROM cd c
INNER JOIN cd ci ON c.cd_indicado = ci.cd_codigo;

# 11
# CAT_CODIGO	MENOR_PRECO		MAIOR_PRECO
# 1 			10.00 			15.00
# 2 			16.00 			20.00
# 3 			21.00 			30.00
# 7 			52.00 			60.00

# 12
SELECT c.cd_codigo, c.cd_nome, c.cd_preco_venda, SUM(m.mus_duracao) AS duracao_total, g.grav_nome
FROM cd c
JOIN faixa f ON c.cd_codigo = f.cd_codigo
JOIN musica m ON f.mus_codigo = m.mus_codigo
JOIN gravadora g ON c.grav_codigo = g.grav_codigo
WHERE c.cd_codigo = 1
GROUP BY c.cd_codigo, c.cd_nome, c.cd_preco_venda, g.grav_nome;

# 13
SELECT g.grav_nome, COUNT(c.cd_codigo) AS total_cds
FROM gravadora g
JOIN cd c ON g.grav_codigo = c.grav_codigo
GROUP BY g.grav_nome
HAVING COUNT(c.cd_codigo) > 2;

# 14
SELECT mus_nome, mus_duracao
FROM musica
WHERE mus_duracao = (SELECT MAX(mus_duracao) FROM musica);

# 15
SELECT m.mus_nome, f.faixa_numero, c.cd_nome
FROM faixa f
JOIN musica m ON f.mus_codigo = m.mus_codigo
JOIN cd c ON f.cd_codigo = c.cd_codigo
WHERE f.cd_codigo IN (2, 3);

# 16
SELECT aut_codigo AS codigo, aut_nome AS nome
FROM autor
WHERE aut_codigo < 10
UNION
SELECT mus_codigo AS codigo, mus_nome AS nome
FROM musica
WHERE mus_codigo < 15;


