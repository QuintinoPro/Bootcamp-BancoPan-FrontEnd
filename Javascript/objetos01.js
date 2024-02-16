

const joao = {
    nome: "Joao Vitor",
    idade: 25,
    descreve: function (params) {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


console.log(joao.nome);
console.log(joao.idade);
console.log(joao.descreve());
console.log(joao);

const atributo = "idade";

console.log(joao[atributo]);



