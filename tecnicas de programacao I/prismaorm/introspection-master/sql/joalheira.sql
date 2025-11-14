-- Tabela de categorias de joias
CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela de fornecedores
CREATE TABLE fornecedor (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(100),
    endereco TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela de materiais (ouro, prata, platina, etc.)
CREATE TABLE material (
    id_material INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- Tabela de joias
CREATE TABLE joia (
    id_joia INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    peso DECIMAL(10, 3), -- peso em gramas
    id_categoria INT,
    id_material INT,
    id_fornecedor INT,
    data_cadastro DATE,  -- Sem valor padrão
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria) ON DELETE SET NULL,
    FOREIGN KEY (id_material) REFERENCES material(id_material) ON DELETE SET NULL,
    FOREIGN KEY (id_fornecedor) REFERENCES fornecedor(id_fornecedor) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela de imagens das joias (opcional)
CREATE TABLE imagem_joia (
    id_imagem INT AUTO_INCREMENT PRIMARY KEY,
    id_joia INT,
    url_imagem TEXT NOT NULL,
    descricao TEXT,
    FOREIGN KEY (id_joia) REFERENCES joia(id_joia) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Tabela de clientes (opcional, caso tenha vendas)
CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) UNIQUE,
    telefone VARCHAR(20),
    email VARCHAR(100),
    endereco TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Índice para otimizar buscas por categoria, material e fornecedor nas joias
CREATE INDEX idx_categoria ON joia(id_categoria);
CREATE INDEX idx_material ON joia(id_material);
CREATE INDEX idx_fornecedor ON joia(id_fornecedor);
