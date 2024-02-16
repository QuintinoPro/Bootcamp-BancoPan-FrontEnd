<<<<<<< HEAD


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

=======


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

>>>>>>> 86f1ef2b7c8395088baf8dfcf2455ca0a2037091
console.log(juros(100,10));