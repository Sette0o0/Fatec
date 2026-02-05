-- Created by Redgate Data Modeler (https://datamodeler.redgate-platform.com)
-- Last modification date: 2025-11-27 16:58:19.554

create database avaliacaobd_sette;
use avaliacaobd_sette;

-- tables
-- Table: Aviso
CREATE TABLE Aviso (
    id int auto_increment  NOT NULL COMMENT 'Chave de identificação de aviso',
    tabela varchar(128)  NOT NULL COMMENT 'Tabela que gerou o aviso',
    registro_id  INT NULL COMMENT 'id do registro que gerou o aviso',
    campo varchar(128)  NOT NULL COMMENT 'Campo que gerou o aviso',
    valor varchar(256)  NOT NULL COMMENT 'Valor que gerou o aviso',
    mensagem varchar(256)  NULL COMMENT 'Mensagem do aviso',
    data timestamp  NOT NULL COMMENT 'Data que o aviso foi gerado',
    CONSTRAINT Aviso_pk PRIMARY KEY (id)
) COMMENT 'Avisos caso alguma tabela tenha um valor que precise de atenção';

-- Table: Certificado_participacao
CREATE TABLE Certificado_participacao (
    Evento_id int  NOT NULL COMMENT 'Chave de identificação do evento',
    Colaborador_id int  NOT NULL COMMENT 'Chave de identificação do colaborador',
    objetivo Text  NOT NULL COMMENT 'Por que participou do evento e qual era a expectativa',
    principais_infos Text  NOT NULL COMMENT 'Temas abordados, dados relevantes, tendências, insights ou aprendizados obtidos',
    aplicacoes Text  NOT NULL COMMENT 'Como essas informações podem ser aplicadas na empresa',
    referencias Text  NOT NULL COMMENT 'Links disponibilizados para referencia, nomes de palestrantes ou empresas citadas',
    avaliacao int  NOT NULL COMMENT 'Avaliação do evento' CHECK (0 <= avaliacao <= 10),
    comentarios Text  NOT NULL COMMENT 'Comentários adicionais sobre o evento',
    url_pdf varchar(256)  NOT NULL COMMENT 'Caminho para o pdf do certificado de participação',
    CONSTRAINT Certificado_participacao_pk PRIMARY KEY (Colaborador_id,Evento_id)
) COMMENT 'Respostas do formulário de aproveitamento do evento';

-- Table: Checklist_veiculo_frota
CREATE TABLE Checklist_veiculo_frota (
    id int  NOT NULL COMMENT 'Chave de identificação de checklist de veiculo da frota',
    nome_motorista varchar(256)  NOT NULL COMMENT 'Nome do motorista',
    destino Text  NOT NULL COMMENT 'Destino da viagem',
    km_inicial int  NOT NULL COMMENT 'Quilômetragem do veículo no momento da checagem',
    km_final int  NULL COMMENT 'Quilômetragem do veículo no momento em que ele retornou',
    abastecido boolean  NOT NULL COMMENT 'Se o veículo foi abastecido',
    comprovante_enviado boolean  NOT NULL COMMENT 'Se o comprovante do abastecimento foi enviado',
    oleo_motor boolean  NOT NULL COMMENT 'Se o óleo do motor está ok',
    reservatorio_agua boolean  NOT NULL COMMENT 'Se o reservatório de água está ok',
    sistema_eletrico boolean  NOT NULL COMMENT 'Se o sistema elétrico está ok',
    estado_pneus boolean  NOT NULL COMMENT 'Se o estado dos pneus está ok',
    limpeza boolean  NOT NULL COMMENT 'Se o veículo está limpo',
    lubrificacao_suspensoes boolean  NOT NULL COMMENT 'Se as suspensões estão lubrificadas',
    macaco boolean  NOT NULL COMMENT 'Se o macaco está presente',
    chave_roda boolean  NOT NULL COMMENT 'Se a chave de roda está presente',
    documento_atualizado boolean  NOT NULL COMMENT 'Se o documento está atualizado',
    comentario Text  NULL COMMENT 'Comentários adicionais',
    Motorista_id int  NOT NULL COMMENT 'Chave de identificação de motorista',
    Colaborador_id int  NOT NULL COMMENT 'Chave de identificação do colaborador',
    Veiculo_id int  NOT NULL COMMENT 'Chave identificadora de veículo',
    CONSTRAINT Checklist_veiculo_frota_pk PRIMARY KEY (id)
) COMMENT 'Checklist de verificação de veiculos da frota da empresa';

-- Table: Cliente
CREATE TABLE Cliente (
    id int  NOT NULL COMMENT 'Chave de identificação do cliente',
    nome varchar(256)  NOT NULL COMMENT 'Nome completo do cliente',
    telefone varchar(11)  NOT NULL COMMENT 'Telefone para contato do cliente',
    email varchar(256)  NOT NULL COMMENT 'Email para contato do cliente',
    segmento varchar(256)  NOT NULL COMMENT 'Segmento de atuação do cliente',
    uf char(2)  NOT NULL COMMENT 'Estado do cliente',
    cidade varchar(256)  NOT NULL COMMENT 'Cidade do cliente',
    Etapa_id int  NOT NULL COMMENT 'Chave de identificação da etapa',
    CONSTRAINT Cliente_pk PRIMARY KEY (id)
) COMMENT 'Clientes da empresa';

-- Table: Colaborador
CREATE TABLE Colaborador (
    id int  NOT NULL COMMENT 'Chave de identificação do colaborador',
    nome varchar(128)  NOT NULL COMMENT 'Nome completo do colaborador',
    cpf varchar(11)  NOT NULL COMMENT 'Único. cpf do colaborador',
    telefone varchar(11)  NOT NULL COMMENT 'Telefone de contato do colaborador',
    email varchar(256)  NOT NULL COMMENT 'Único. email de contato do colaborador',
    senha varchar(256)  NOT NULL COMMENT 'senha do colaborador para login no sistema',
    Setor_id int  NOT NULL COMMENT 'Chave de identificação do setor',
    Nivel_acesso_id int  NOT NULL COMMENT 'Chave de identificação do nível de acesso',
    CONSTRAINT Colaborador_pk PRIMARY KEY (id)
) COMMENT 'Funcionários da empresa';

-- Table: Cotacao
CREATE TABLE Cotacao (
    id int  NOT NULL COMMENT 'Chave de identificação de cotação',
    uf_origem char(2)  NOT NULL COMMENT 'Estado de saída do transporte',
    cidade_origem varchar(256)  NOT NULL COMMENT 'Cidade de saída do transporte',
    peso_carga int  NOT NULL COMMENT 'Peso da carga transportada',
    valor_carga decimal(11,2)  NOT NULL COMMENT 'Valor da carga transportada',
    valor_pedagio decimal(5,2)  NOT NULL COMMENT 'Valor dos pedágios no caminho',
    distancia int  NOT NULL COMMENT 'Distância que será percorrida',
    custo_frete decimal(11,2)  NULL COMMENT 'Custo do transporte',
    valor_total_frete decimal(11,2)  NULL COMMENT 'Valor cobrado do cliente',
    valor_liquido_frete decimal(11,2)  NULL COMMENT 'Lucro da empresa',
    Veiculo_id int  NULL COMMENT 'Chave identificadora de veículo',
    Cliente_id int  NOT NULL COMMENT 'Chave de identificação do cliente',
    CONSTRAINT Cotacao_pk PRIMARY KEY (id)
) COMMENT 'Cotação do transporte para o cliente';

-- Table: Etapa
CREATE TABLE Etapa (
    id int  NOT NULL COMMENT 'Chave de identificação da etapa',
    nome varchar(256)  NOT NULL COMMENT 'Nome da etapa',
    CONSTRAINT Etapa_pk PRIMARY KEY (id)
) COMMENT 'Etapas do funil de vendas';

-- Table: Evento
CREATE TABLE Evento (
    id int  NOT NULL COMMENT 'Chave de identificação do evento',
    nome varchar(128)  NOT NULL COMMENT 'Nome ou Título do evento',
    data datetime  NOT NULL COMMENT 'Data e hora que o evento irá acontecer',
    duracao varchar(64)  NOT NULL COMMENT 'duração estimada do evento, formato "Xh Xm"',
    local varchar(256)  NOT NULL COMMENT 'Local que irá acontecer o evento, pode ser um lugar ou um link',
    descricao Text  NOT NULL COMMENT 'Informações adicionais fornecidas sobre o evento',
    Tipo_evento_id int  NOT NULL COMMENT 'Chave de identificação do tipo de evento',
    CONSTRAINT Evento_pk PRIMARY KEY (id)
) COMMENT 'Atividades realizadas pela empresa, como treinamentos, workshops etc.';

-- Table: Forma_contato
CREATE TABLE Forma_contato (
    id int  NOT NULL COMMENT 'Chave de identificação de forma de contato',
    nome varchar(128)  NOT NULL COMMENT 'Nome da forma de contato',
    CONSTRAINT Forma_contato_pk PRIMARY KEY (id)
) COMMENT 'Formas de contato com o cliente';

-- Table: Interacao
CREATE TABLE Interacao (
    id int  NOT NULL COMMENT 'Chave de identificação da interação',
    data date  NOT NULL COMMENT 'Data da interação com o cliente',
    resumo varchar(256)  NOT NULL COMMENT 'Resumo breve da interação',
    descricao Text  NOT NULL COMMENT 'Descrição do que foi discutido na interação',
    Cliente_id int  NOT NULL COMMENT 'Chave de identificação do cliente',
    Colaborador_id int  NOT NULL COMMENT 'Chave de identificação do colaborador',
    Forma_contato_id int  NOT NULL COMMENT 'Chave de identificação de forma de contato',
    Resultado_id int  NOT NULL COMMENT 'Chave de identificação de resultado',
    CONSTRAINT Interacao_pk PRIMARY KEY (id)
) COMMENT 'Interações feitas com o cliente';

-- Table: Motorista
CREATE TABLE Motorista (
    id int auto_increment  NOT NULL COMMENT 'Chave de identificação de motorista',
    nome varchar(256)  NOT NULL COMMENT 'Nome completo do motorista',
    CONSTRAINT Motorista_pk PRIMARY KEY (id)
) COMMENT 'Motoristas da empresa';

-- Table: Nivel_acesso
CREATE TABLE Nivel_acesso (
    id int  NOT NULL COMMENT 'Chave de identificação do nível de acesso',
    nivel varchar(256)  NOT NULL COMMENT 'Nome do nível de acesso',
    CONSTRAINT Nivel_acesso_pk PRIMARY KEY (id)
) COMMENT 'Nível de acesso dos colaboradores no sistema';

-- Table: Participacao
CREATE TABLE Participacao (
    Colaborador_id int  NOT NULL COMMENT 'Chave de identificação do colaborador',
    Evento_id int  NOT NULL COMMENT 'Chave de identificação do evento',
    Status_participacao_id int  NOT NULL COMMENT 'Chave de identificação de status de participação',
    justificativa Text  NULL,
    CONSTRAINT Participacao_pk PRIMARY KEY (Colaborador_id,Evento_id)
) COMMENT 'Colaboradores que foram convidados para o evento';

-- Table: Resultado
CREATE TABLE Resultado (
    id int  NOT NULL COMMENT 'Chave de identificação de resultado',
    nome varchar(128)  NOT NULL COMMENT 'Nome do resultado',
    CONSTRAINT Resultado_pk PRIMARY KEY (id)
) COMMENT 'Possíveis resultados da interação com o cliente';

-- Table: Setor
CREATE TABLE Setor (
    id int  NOT NULL COMMENT 'Chave de identificação do setor',
    nome varchar(64)  NOT NULL COMMENT 'Nome do setor',
    CONSTRAINT Setor_pk PRIMARY KEY (id)
) COMMENT 'Setores existentes na empresa';

-- Table: Status_participacao
CREATE TABLE Status_participacao (
    id int  NOT NULL COMMENT 'Chave de identificação de status de participação',
    nome varchar(64)  NOT NULL COMMENT 'Nome do status de participação',
    CONSTRAINT Status_participacao_pk PRIMARY KEY (id)
) COMMENT 'Status das participações do evento';

-- Table: Tipo_evento
CREATE TABLE Tipo_evento (
    id int  NOT NULL COMMENT 'Chave de identificação do tipo de evento',
    nome varchar(256)  NOT NULL COMMENT 'Nome do tipo de evento',
    CONSTRAINT Tipo_evento_pk PRIMARY KEY (id)
) COMMENT 'Tipos de eventos realizados na empresa';

-- Table: Tipo_veiculo
CREATE TABLE Tipo_veiculo (
    id int  NOT NULL COMMENT 'Chave identificadora de tipo de veículo',
    marca varchar(128)  NOT NULL COMMENT 'Marca do veículo',
    modelo varchar(128)  NOT NULL COMMENT 'Modelo do veículo',
    capacidade_minima int  NOT NULL COMMENT 'Capacidade mínima do veículo',
    capacidade_maxima int  NOT NULL COMMENT 'Capacidade máxima do veículo',
    frete_minimo decimal(8,2)  NOT NULL COMMENT 'Valor mínimo cobrado pelo frete',
    distancia_minima int  NOT NULL COMMENT 'Distância mínima que o veículo aceita para sair',
    custo_distancia_excedente decimal(5,2)  NOT NULL COMMENT 'Valor cobrado por km que passa do mínimo',
    custo_diaria decimal(8,2)  NOT NULL COMMENT 'Custo por dia do veículo',
    taxa_seguro decimal(7,5)  NOT NULL,
    taxa_gris decimal(7,5)  NOT NULL,
    CONSTRAINT Tipo_veiculo_pk PRIMARY KEY (id)
) COMMENT 'Tipo de veículos da empresa';

-- Table: Veiculo
CREATE TABLE Veiculo (
    id int  NOT NULL COMMENT 'Chave identificadora de veículo',
    placa char(7) UNIQUE  NOT NULL COMMENT 'Único. Placa do veículo',
    ano int  NOT NULL COMMENT 'Ano do veículo',
    disponivel boolean  NOT NULL COMMENT 'Se o veículo está disponível',
    Tipo_veiculo_id int  NOT NULL COMMENT 'Chave identificadora de tipo de veículo',
    CONSTRAINT Veiculo_pk PRIMARY KEY (id)
) COMMENT 'Veículos da empresa';

-- foreign keys
-- Reference: Checklist_veiculo_frota_Colaborador (table: Checklist_veiculo_frota)
ALTER TABLE Checklist_veiculo_frota ADD CONSTRAINT Checklist_veiculo_frota_Colaborador FOREIGN KEY Checklist_veiculo_frota_Colaborador (Colaborador_id)
    REFERENCES Colaborador (id);

-- Reference: Checklist_veiculo_frota_Motorista (table: Checklist_veiculo_frota)
ALTER TABLE Checklist_veiculo_frota ADD CONSTRAINT Checklist_veiculo_frota_Motorista FOREIGN KEY Checklist_veiculo_frota_Motorista (Motorista_id)
    REFERENCES Motorista (id);

-- Reference: Checklist_veiculo_frota_Veiculo (table: Checklist_veiculo_frota)
ALTER TABLE Checklist_veiculo_frota ADD CONSTRAINT Checklist_veiculo_frota_Veiculo FOREIGN KEY Checklist_veiculo_frota_Veiculo (Veiculo_id)
    REFERENCES Veiculo (id);

-- Reference: Cliente_Etapa (table: Cliente)
ALTER TABLE Cliente ADD CONSTRAINT Cliente_Etapa FOREIGN KEY Cliente_Etapa (Etapa_id)
    REFERENCES Etapa (id);

-- Reference: Colaborador_Nivel_acesso (table: Colaborador)
ALTER TABLE Colaborador ADD CONSTRAINT Colaborador_Nivel_acesso FOREIGN KEY Colaborador_Nivel_acesso (Nivel_acesso_id)
    REFERENCES Nivel_acesso (id);

-- Reference: Colaborador_Participacao (table: Participacao)
ALTER TABLE Participacao ADD CONSTRAINT Colaborador_Participacao FOREIGN KEY Colaborador_Participacao (Colaborador_id)
    REFERENCES Colaborador (id);

-- Reference: Colaborador_Setor (table: Colaborador)
ALTER TABLE Colaborador ADD CONSTRAINT Colaborador_Setor FOREIGN KEY Colaborador_Setor (Setor_id)
    REFERENCES Setor (id);

-- Reference: Colaborador_association_1 (table: Certificado_participacao)
ALTER TABLE Certificado_participacao ADD CONSTRAINT Colaborador_association_1 FOREIGN KEY Colaborador_association_1 (Colaborador_id)
    REFERENCES Colaborador (id);

-- Reference: Cotacao_Cliente (table: Cotacao)
ALTER TABLE Cotacao ADD CONSTRAINT Cotacao_Cliente FOREIGN KEY Cotacao_Cliente (Cliente_id)
    REFERENCES Cliente (id);

-- Reference: Cotacao_Veiculo (table: Cotacao)
ALTER TABLE Cotacao ADD CONSTRAINT Cotacao_Veiculo FOREIGN KEY Cotacao_Veiculo (Veiculo_id)
    REFERENCES Veiculo (id);

-- Reference: Evento_Participacao (table: Participacao)
ALTER TABLE Participacao ADD CONSTRAINT Evento_Participacao FOREIGN KEY Evento_Participacao (Evento_id)
    REFERENCES Evento (id);

-- Reference: Evento_Tipo_evento (table: Evento)
ALTER TABLE Evento ADD CONSTRAINT Evento_Tipo_evento FOREIGN KEY Evento_Tipo_evento (Tipo_evento_id)
    REFERENCES Tipo_evento (id);

-- Reference: Evento_association_1 (table: Certificado_participacao)
ALTER TABLE Certificado_participacao ADD CONSTRAINT Evento_association_1 FOREIGN KEY Evento_association_1 (Evento_id)
    REFERENCES Evento (id);

-- Reference: Interacao_Cliente (table: Interacao)
ALTER TABLE Interacao ADD CONSTRAINT Interacao_Cliente FOREIGN KEY Interacao_Cliente (Cliente_id)
    REFERENCES Cliente (id);

-- Reference: Interacao_Colaborador (table: Interacao)
ALTER TABLE Interacao ADD CONSTRAINT Interacao_Colaborador FOREIGN KEY Interacao_Colaborador (Colaborador_id)
    REFERENCES Colaborador (id);

-- Reference: Interacao_Forma_contato (table: Interacao)
ALTER TABLE Interacao ADD CONSTRAINT Interacao_Forma_contato FOREIGN KEY Interacao_Forma_contato (Forma_contato_id)
    REFERENCES Forma_contato (id);

-- Reference: Interacao_Resultado (table: Interacao)
ALTER TABLE Interacao ADD CONSTRAINT Interacao_Resultado FOREIGN KEY Interacao_Resultado (Resultado_id)
    REFERENCES Resultado (id);

-- Reference: Status_participacao_Participacao (table: Participacao)
ALTER TABLE Participacao ADD CONSTRAINT Status_participacao_Participacao FOREIGN KEY Status_participacao_Participacao (Status_participacao_id)
    REFERENCES Status_participacao (id);

-- Reference: Veiculo_Tipo_veiculo (table: Veiculo)
ALTER TABLE Veiculo ADD CONSTRAINT Veiculo_Tipo_veiculo FOREIGN KEY Veiculo_Tipo_veiculo (Tipo_veiculo_id)
    REFERENCES Tipo_veiculo (id);

-- End of file.

