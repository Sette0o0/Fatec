const personagem1 = {
    nome: 'Steve Rogers',
    codinome: 'Capitão América',
    armaPrincipal: 'Escudo',
    armaSecundaria: '',
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem2 = {
    nome: 'Tony Stark',
    codinome: 'Homem de Ferro',
    armaPrincipal: 'Armadura',
    armaSecundaria: '',
    velocidade: 5,
    forca: 5,
    resistencia: 0,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem3 = {
    nome: 'Bruce Banner',
    codinome: 'Hulk',
    armaPrincipal: 'Força Bruta',
    armaSecundaria: '',
    velocidade: 85,
    forca: 95,
    resistencia: 90,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem4 = {
    nome: 'Thanos',
    codinome: 'Thanos',
    armaPrincipal: 'Manopla do Infinito',
    armaSecundaria: '',
    velocidade: 55,
    forca: 80,
    resistencia: 75,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem5 = {
    nome: 'Natasha Romanoff',
    codinome: 'Viúva Negra',
    armaPrincipal: 'Armas de Fogo',
    armaSecundaria: '',
    velocidade: 65,
    forca: 60,
    resistencia: 70,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem6 = {
    nome: 'Thor',
    codinome: 'Deus do Trovão',
    armaPrincipal: 'Martelo Mjolnir',
    armaSecundaria: '',
    velocidade: 90,
    forca: 85,
    resistencia: 85,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem7 = {
    nome: "T'Challa",
    codinome: 'Pantera Negra',
    armaPrincipal: 'Armadura de Vibranium',
    armaSecundaria: '',
    velocidade: 85,
    forca: 78,
    resistencia: 80,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

const personagem8 = {
    nome: 'Stephen Strange',
    codinome: 'Doutor Estranho',
    armaPrincipal: 'Magia',
    armaSecundaria: '',
    velocidade: 70,
    forca: 70,
    resistencia: 70,
    descricao: function() {
        return `Nome: ${this.nome}\nCodinome: ${this.codinome}\nArma Principal: ${this.armaPrincipal}\nArma Secundária ${this.armaSecundaria}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
    }
};

let personagens = [
    personagem1,
    personagem2,
    personagem3,
    personagem4,
    personagem5,
    personagem6,
    personagem7,
    personagem8
];

for (let i = 0; i < personagens.length; i++) {
    let personagem = personagens[i];
    let total = personagem.forca + personagem.resistencia + personagem.velocidade;
    for (let j = i + 1; j < personagens.length; j++) {
        let p = personagens[j];
        let comparacao = p.forca + p.resistencia + p.velocidade;
        if (total > comparacao) {
            console.log(`${personagem.nome} vence ${p.nome}`);
        } else if (total < comparacao) {
            console.log(`${personagem.nome} perde ${p.nome}`);
        } else {
            console.log(`${personagem.nome} e ${p.nome} são igualmente fortes`);
        }
    }
}