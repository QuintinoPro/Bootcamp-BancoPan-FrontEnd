const precoEtanol = 5;
const precoGasolina = 7;

const tipoCombstCarro = 'Etanol';

const kmPorLitro = 10;
const distanciaKm = 100;
const litrosfinal = distanciaKm / kmPorLitro;
const valorfinal = 0;


if (tipoCombstCarro === 'Etanol'){

    valorfinal = litrosfinal * precoEtanol;
    console.log("Valor que sera gasto: ", valorfinal);

} else{
    valorfinal = litrosfinal * precoGasolina;
    console.log("Valor que sera gasto: ", valorfinal);
}