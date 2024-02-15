
function aplicarDesc(valor,desc) {
    return (valor - (valor * (desc/100)));
}

function aplicarJuros(valor,desc) {
    return (valor + (valor * (desc/100)));
}


let valor_produto = 100;
let cond_pagamento = 4;

switch (cond_pagamento) {
    case 1:
        console.log(`Valor a Ser Pago: ${aplicarDesc(valor_produto,10)}`);
        break;
    case 2:
        console.log(`Valor a Ser Pago: ${aplicarDesc(valor_produto,15)}`);
        break;
    case 3:
        console.log(`Valor a Ser Pago: ${valor_produto}`);
        break;
    case 4:
        console.log(`Valor a Ser Pago: ${aplicarJuros(valor_produto,10)}`);
    break;    
    default:
        console.log(`Valor Invalido`);
        break;
}