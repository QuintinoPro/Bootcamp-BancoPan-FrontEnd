

class Carro {
    marca;
    cor;
    gastoComb;

    constructor(marca,cor,gastoComb){
        this.marca = marca;
        this.cor = cor;
        this.gastoComb = gastoComb;
    }

    gastoFinal(distancia,precoComb){
        return (distancia * this.gastoComb) *precoComb;
    }
}

const celta = new Carro("Chevrolt","Preto",1/12);

console.log(celta);

console.log(celta.gastoFinal(70,5));
