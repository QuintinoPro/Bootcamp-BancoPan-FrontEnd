

function teste() {
    console.log("Teste!");
}

teste();

function sayMyName(name) {
    console.log("Seu nome é: " + name);
}

sayMyName("Rasta");
sayMyName("Cleiton");


function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10));

function juros(valor, juros) {
    const valoraumento = (juros/100) * valor;
    return valor + valoraumento;
}

console.log(juros(100,10));