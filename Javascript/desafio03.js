
let nota1 = 2;
let nota2 = 5;
let nota3 = 7;

let media = (nota1 + nota2 + nota3)/3;

console.log(`Sua Media: ${media}`);

if (media < 5) {
    console.log("Reprovado!");
} else if (media >= 5 && media <= 7){
    console.log("Recuperação");
} else {
    console.log("Passou!");
}

