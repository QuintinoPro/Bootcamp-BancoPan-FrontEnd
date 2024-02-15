
function escreveNome(nome) {
    return ("Meu Nome: " + nome);
}

function MaiorIdade(idade) {
    if (idade >= 18) {
        console.log(escreveNome("Joao.") + " Sou Maior de Idade!");
    } else {
        console.log(escreveNome("Joao.") + " Sou Menor de Idade!");
    }
}

MaiorIdade(17);
