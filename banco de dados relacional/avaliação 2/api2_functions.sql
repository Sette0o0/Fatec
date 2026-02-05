use avaliacaobd_sette;


DELIMITER $$


CREATE FUNCTION fn_get_motorista_id(p_nome VARCHAR(256))
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE v_id INT;
  SELECT id INTO v_id
  FROM Motorista
  WHERE LOWER(nome) = LOWER(p_nome)
  LIMIT 1;
  RETURN v_id;
END$$


CREATE FUNCTION fn_calc_num_diarias(p_distancia INT)
RETURNS INT
DETERMINISTIC
BEGIN
  RETURN CEIL(p_distancia / 500);
END$$


CREATE FUNCTION fn_calc_frete(p_distancia INT, p_distancia_minima INT, p_frete_minimo DECIMAL(10,2), p_custo_distancia_excedente DECIMAL(10,2))
RETURNS DECIMAL(11,2)
DETERMINISTIC
BEGIN
  IF p_distancia > p_distancia_minima THEN
    RETURN p_frete_minimo + (p_distancia - p_distancia_minima) * p_custo_distancia_excedente;
  ELSE
    RETURN p_frete_minimo;
  END IF;
END$$


CREATE FUNCTION fn_calc_taxas(p_valor_carga DECIMAL(11,2), p_taxa_seguro DECIMAL(8,5), p_taxa_gris DECIMAL(8,5))
RETURNS DECIMAL(11,2)
DETERMINISTIC
BEGIN
  RETURN p_valor_carga * (p_taxa_seguro + p_taxa_gris);
END$$


CREATE FUNCTION fn_calc_custo(p_diaria DECIMAL(11,2), p_frete DECIMAL(11,2), p_taxas DECIMAL(11,2))
RETURNS DECIMAL(12,2)
DETERMINISTIC
BEGIN
  RETURN p_diaria + p_frete + p_taxas;
END$$


CREATE FUNCTION fn_calc_liquido(p_custo DECIMAL(12,2))
RETURNS DECIMAL(12,2)
DETERMINISTIC
BEGIN
  RETURN p_custo + (p_custo * 0.20) + 100;
END$$


CREATE FUNCTION fn_next_etapa(p_current INT, p_direction INT)
RETURNS INT
DETERMINISTIC
BEGIN
  DECLARE v_next INT;
  SET v_next = p_current;
  IF p_direction = 1 THEN
    IF p_current < 6 THEN SET v_next = p_current + 1; END IF;
  ELSEIF p_direction = -1 THEN
    IF p_current > 1 THEN SET v_next = p_current - 1; END IF;
  END IF;
  RETURN v_next;
END$$


DELIMITER ;



DELIMITER $$


CREATE PROCEDURE proc_create_motorista_if_not_exists(
  IN p_nome VARCHAR(256),
  OUT p_motorista_id INT
)
BEGIN
  DECLARE v_id INT;
  SET v_id = fn_get_motorista_id(p_nome);
  IF v_id IS NOT NULL THEN
    SET p_motorista_id = v_id;
  ELSE
    INSERT INTO Motorista (nome) VALUES (p_nome);
    SET p_motorista_id = LAST_INSERT_ID();
  END IF;
END$$


CREATE PROCEDURE proc_create_aviso(
  IN p_tabela VARCHAR(128),
  IN p_campo VARCHAR(128),
  IN p_valor VARCHAR(256),
  IN p_mensagem VARCHAR(256),
  IN p_registro_id INT
)
BEGIN
  INSERT INTO Aviso (tabela, campo, valor, data, registro_id)
  VALUES (p_tabela, p_campo, p_valor, CURRENT_TIMESTAMP, p_registro_id);
END$$


CREATE PROCEDURE proc_get_veiculo_para_peso(
  IN p_peso INT,
  OUT p_veiculo_id INT,
  OUT p_tipo_veiculo_id INT
)
BEGIN
  DECLARE v_tipo INT;
  DECLARE v_veiculo INT;

  SELECT id INTO v_tipo
  FROM Tipo_veiculo
  WHERE p_peso BETWEEN capacidade_minima AND capacidade_maxima
  ORDER BY capacidade_maxima ASC
  LIMIT 1;

  SET p_tipo_veiculo_id = v_tipo;

  IF v_tipo IS NOT NULL THEN

    SELECT id INTO v_veiculo
    FROM Veiculo
    WHERE Tipo_veiculo_id = v_tipo AND disponivel = 1
    LIMIT 1;

    IF v_veiculo IS NULL THEN
      SELECT id INTO v_veiculo
      FROM Veiculo
      WHERE Tipo_veiculo_id = v_tipo
      LIMIT 1;
    END IF;
  ELSE
    SET v_veiculo = NULL;
  END IF;

  SET p_veiculo_id = v_veiculo;
END$$

# mudei
CREATE PROCEDURE proc_calc_cotacao_logic(
    IN p_peso INT,
    IN p_distancia INT,
    IN p_valor_carga DECIMAL(11,2),
    OUT p_custo DECIMAL(12,2),
    OUT p_liquido DECIMAL(12,2),
    OUT p_total DECIMAL(12,2),
    OUT p_veiculo_id INT
)
proc_label:
BEGIN
  DECLARE v_tipo_id INT;
  DECLARE v_distancia_minima INT;
  DECLARE v_frete_minimo DECIMAL(10,2);
  DECLARE v_custo_dist_ex DECIMAL(10,2);
  DECLARE v_custo_diaria DECIMAL(10,2);
  DECLARE v_taxa_seguro DECIMAL(8,5);
  DECLARE v_taxa_gris DECIMAL(8,5);

  DECLARE v_num_diarias INT;
  DECLARE v_diaria_total DECIMAL(11,2);
  DECLARE v_frete DECIMAL(11,2);
  DECLARE v_taxas DECIMAL(11,2);

  CALL proc_get_veiculo_para_peso(p_peso, p_veiculo_id, v_tipo_id);

  IF v_tipo_id IS NULL THEN
    CALL proc_create_aviso('Cotacao', 'peso_carga', v_peso, 'Nenhum tipo de veículo comporta esse peso', p_cotacao_id); 
    SET p_veiculo_id = NULL;
    LEAVE proc_label;
  END IF;

  SELECT distancia_minima, frete_minimo, custo_distancia_excedente, custo_diaria, taxa_seguro, taxa_gris
  INTO v_distancia_minima, v_frete_minimo, v_custo_dist_ex, v_custo_diaria, v_taxa_seguro, v_taxa_gris
  FROM Tipo_veiculo
  WHERE id = v_tipo_id
  LIMIT 1;

  SET v_num_diarias = fn_calc_num_diarias(p_distancia);
  SET v_diaria_total = v_num_diarias * v_custo_diaria;
  SET v_frete = fn_calc_frete(p_distancia, v_distancia_minima, v_frete_minimo, v_custo_dist_ex);
  SET v_taxas = fn_calc_taxas(p_valor_carga, v_taxa_seguro, v_taxa_gris);

  SET p_custo = fn_calc_custo(v_diaria_total, v_frete, v_taxas);
  SET p_liquido = fn_calc_liquido(p_custo);
  SET p_total = p_custo + p_liquido;

  IF p_veiculo_id IS NOT NULL THEN
    UPDATE Veiculo SET disponivel = 0 WHERE id = p_veiculo_id;
  END IF;

END$$


CREATE PROCEDURE proc_on_checklist_insert(IN p_checklist_id INT)
BEGIN
  DECLARE v_abastecido TINYINT;
  DECLARE v_comprovante_enviado TINYINT;
  DECLARE v_oleo_motor TINYINT;
  DECLARE v_reservatorio_agua TINYINT;
  DECLARE v_sistema_eletrico TINYINT;
  DECLARE v_estado_pneus TINYINT;
  DECLARE v_limpeza TINYINT;
  DECLARE v_lubrificacao_suspensoes TINYINT;
  DECLARE v_macaco TINYINT;
  DECLARE v_chave_roda TINYINT;
  DECLARE v_documento_atualizado TINYINT;
  DECLARE v_nome_motorista VARCHAR(256);

  SELECT abastecido, comprovante_enviado, oleo_motor, reservatorio_agua,
         sistema_eletrico, estado_pneus, limpeza, lubrificacao_suspensoes,
         macaco, chave_roda, documento_atualizado, nome_motorista
  INTO v_abastecido, v_comprovante_enviado, v_oleo_motor, v_reservatorio_agua,
       v_sistema_eletrico, v_estado_pneus, v_limpeza, v_lubrificacao_suspensoes,
       v_macaco, v_chave_roda, v_documento_atualizado, v_nome_motorista
  FROM Checklist_veiculo_frota
  WHERE id = p_checklist_id
  LIMIT 1;

  IF v_abastecido = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','abastecido','0','Veículo não abastecido', p_checklist_id); END IF;
  IF v_comprovante_enviado = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','comprovante_enviado','0','Comprovante de abastecimento não enviado', p_checklist_id); END IF;
  IF v_oleo_motor = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','oleo_motor','0','Óleo do motor fora do padrão', p_checklist_id); END IF;
  IF v_reservatorio_agua = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','reservatorio_agua','0','Reservatório de água fora do padrão', p_checklist_id); END IF;
  IF v_sistema_eletrico = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','sistema_eletrico','0','Sistema elétrico com problema', p_checklist_id); END IF;
  IF v_estado_pneus = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','estado_pneus','0','Estado dos pneus ruim', p_checklist_id); END IF;
  IF v_limpeza = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','limpeza','0','Veículo sujo', p_checklist_id); END IF;
  IF v_lubrificacao_suspensoes = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','lubrificacao_suspensoes','0','Suspensões sem lubrificação', p_checklist_id); END IF;
  IF v_macaco = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','macaco','0','Macaco ausente', p_checklist_id); END IF;
  IF v_chave_roda = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','chave_roda','0','Chave de roda ausente', p_checklist_id); END IF;
  IF v_documento_atualizado = 0 THEN CALL proc_create_aviso('Checklist_veiculo_frota','documento_atualizado','0','Documentação desatualizada', p_checklist_id); END IF;

END$$


CREATE PROCEDURE proc_on_certificado_insert(IN p_evento INT, IN p_colaborador INT)
BEGIN
  UPDATE Participacao
  SET Status_participacao_id = 4
  WHERE Evento_id = p_evento AND Colaborador_id = p_colaborador;
END$$


CREATE PROCEDURE proc_on_interacao_insert(IN p_interacao_id INT)
BEGIN
  DECLARE v_cliente_id INT;
  DECLARE v_resultado INT;
  DECLARE v_etapa_atual INT;
  DECLARE v_nova_etapa INT;

  SELECT Cliente_id, Resultado_id INTO v_cliente_id, v_resultado
  FROM Interacao WHERE id = p_interacao_id LIMIT 1;

  SELECT Etapa_id INTO v_etapa_atual
  FROM Cliente WHERE id = v_cliente_id LIMIT 1;

  IF v_resultado IN (1,2) THEN
    SET v_nova_etapa = fn_next_etapa(v_etapa_atual, 1);
  ELSEIF v_resultado = 4 THEN
    SET v_nova_etapa = fn_next_etapa(v_etapa_atual, -1);
  ELSE
    SET v_nova_etapa = v_etapa_atual;
  END IF;

  IF v_nova_etapa <> v_etapa_atual THEN
    UPDATE Cliente SET Etapa_id = v_nova_etapa WHERE id = v_cliente_id;
  END IF;
END$$


DELIMITER ;



DELIMITER $$


CREATE TRIGGER trg_checklist_before_insert_motorista
BEFORE INSERT ON Checklist_veiculo_frota
FOR EACH ROW
BEGIN
  DECLARE v_motorista_id INT;

  SET v_motorista_id = fn_get_motorista_id(NEW.nome_motorista);
  IF v_motorista_id IS NULL THEN
    INSERT INTO Motorista (nome) VALUES (NEW.nome_motorista);
    SET NEW.Motorista_id = LAST_INSERT_ID();
  ELSE
    SET NEW.Motorista_id = v_motorista_id;
  END IF;
END$$


CREATE TRIGGER trg_checklist_after_insert_avisos
AFTER INSERT ON Checklist_veiculo_frota
FOR EACH ROW
BEGIN
  CALL proc_on_checklist_insert(NEW.id);
END$$


CREATE TRIGGER trg_cotacao_before_insert_calc
BEFORE INSERT ON Cotacao
FOR EACH ROW
BEGIN
  DECLARE v_custo DECIMAL(12,2);
  DECLARE v_liquido DECIMAL(12,2);
  DECLARE v_total DECIMAL(12,2);
  DECLARE v_veiculo_id INT;

  CALL proc_calc_cotacao_logic(
    NEW.peso_carga, 
    NEW.distancia, 
    NEW.valor_carga,
    v_custo, 
    v_liquido, 
    v_total, 
    v_veiculo_id
  );

  SET NEW.custo_frete = v_custo;
  SET NEW.valor_liquido_frete = v_liquido;
  SET NEW.valor_total_frete = v_total;
  SET NEW.Veiculo_id = v_veiculo_id;
END$$


CREATE TRIGGER trg_certificado_after_insert_participacao
AFTER INSERT ON Certificado_participacao
FOR EACH ROW
BEGIN
  CALL proc_on_certificado_insert(NEW.Evento_id, NEW.Colaborador_id);
END$$


CREATE TRIGGER trg_interacao_after_insert_etapa
AFTER INSERT ON Interacao
FOR EACH ROW
BEGIN
  CALL proc_on_interacao_insert(NEW.id);
END$$


CREATE TRIGGER trg_veiculo_after_update_disponivel
AFTER UPDATE ON Veiculo
FOR EACH ROW
BEGIN
  IF OLD.disponivel = 1 AND NEW.disponivel = 0 THEN
    CALL proc_create_aviso('Veiculo','disponivel','0', CONCAT('Veículo ', NEW.id, ' marcado como indisponível'), NEW.id);
  END IF;
END$$


DELIMITER ;