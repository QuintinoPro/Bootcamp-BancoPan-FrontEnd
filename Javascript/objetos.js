

const joao = {
    nome: "Joao Vitor",
    idade: 25,
    descreve: function (params) {
        this 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


console.log(joao.nome);
console.log(joao.idade);
console.log(joao);


joao.altura = 1.7;

console.log(joao);

console.log(joao.descreve());


