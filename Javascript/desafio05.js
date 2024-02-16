

let valor_produto = 17;
let cond_pagamento = 1;
let valor_final = 0;

switch (cond_pagamento) {
    case 1:
        valor_final = valor_produto - (valor_produto * 0.1);
        console.log(`Valor a Ser Pago: ${valor_final}`);
        break;
    case 2:
        valor_final = valor_produto - (valor_produto * 0.15);
        console.log(`Valor a Ser Pago: ${valor_final}`);
        break;
    case 3:
        valor_final = valor_produto;
        console.log(`Valor a Ser Pago: ${valor_final}`);
        break;
    case 4:
        valor_final = valor_produto + (valor_produto * 0.1);
        console.log(`Valor a Ser Pago: ${valor_final}`);
    break;    
    default:
        console.log(`Valor Invalido`);
        break;
}