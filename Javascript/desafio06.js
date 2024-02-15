
function calcIMC(peso,altura) {
    return peso / ( altura * altura);
}

function classificaIMC(imc) {
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

function main() {
    let peso = 87;
    let altura = 1.87;
    let imc = calcIMC(peso, altura);
    console.log(classificaIMC(imc));
}

main();
console.log(main); 


(function () {
    let peso = 87;
    let altura = 1.87;
    let imc = calcIMC(peso, altura);
    console.log(classificaIMC(imc));
})();




