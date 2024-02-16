

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcImc(){
        return this.peso / ( this.altura * this.altura);
    }

    classIMC(){
        const imc = this.calcImc();

        if (imc<18.5) {
            console.log(`Seu IMC: ${imc}`);
            return ("Abaixo do Peso!");
        } else if (imc>= 18.5 && imc <=25){
            console.log(`Seu IMC: ${imc}`);
            return ("Peso Normal!");
        } else if (imc> 25 && imc <=30){
            console.log(`Seu IMC: ${imc}`);
            return ("Acima do Peso!");
        } else if (imc> 30 && imc <=40){
            console.log(`Seu IMC: ${imc}`);
            return ("Obeso!");
        } else {
            console.log(`Seu IMC: ${imc}`);
            return ("Obesidade Grave!");
        }
    }

}

const cleiton = new Pessoa("Cleiton",87,1.77); 


console.log(cleiton);

console.log(cleiton.calcImc());


const renan = new Pessoa("Renan",63,1.75); 

console.log(renan);

console.log(renan.calcImc());


console.log(renan.classIMC());

