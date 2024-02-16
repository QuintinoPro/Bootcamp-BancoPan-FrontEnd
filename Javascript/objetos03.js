

class Pessoa {
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

function comparaPessoas(p1, p2) {
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma Idade!`);
    }
}

const vitor = new Pessoa("Vitor", 23);
const renan = new Pessoa("Renan", 17);

comparaPessoas(vitor, renan);