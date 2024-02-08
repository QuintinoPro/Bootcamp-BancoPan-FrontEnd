

let peso = 90;
let altura = 1.87;

let imc = peso /(altura * altura);

if (imc<18.5) {
    console.log(`Seu IMC: ${imc}`);
    console.log("Abaixo do Peso!");
} else if (imc>= 18.5 && imc <=25){
    console.log(`Seu IMC: ${imc}`);
    console.log("Peso Normal!");
} else if (imc> 25 && imc <=30){
    console.log(`Seu IMC: ${imc}`);
    console.log("Acima do Peso!");
} else if (imc> 30 && imc <=40){
    console.log(`Seu IMC: ${imc}`);
    console.log("Obeso!");
} else {
    console.log(`Seu IMC: ${imc}`);
    console.log("Obesidade Grave!");
}

