
class pessoa {
    nome;
    idade;
    anodeNasc;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anodeNasc = 2024 - idade;
    }

    descreve () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const vitor = new pessoa();

console.log(vitor);

vitor.nome = "Vitor mama Muito";
vitor.idade = 17;

console.log(vitor);

const Mateus = new pessoa();
Mateus.nome = "Mateus Charles";
Mateus.idade = 17;

console.log(Mateus);

const Carlos = new pessoa("Carlos",27);

console.log(Carlos);