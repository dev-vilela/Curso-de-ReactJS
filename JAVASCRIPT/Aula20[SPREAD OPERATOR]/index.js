/*----------------------SPREAD OPERATOR---------------- 
EXEMPLO 01

let primeiros = [1,2,3]

console.log(primeiros);

let numeros = [...primeiros,4,5,6];

console.log(numeros);
---------------------------------
EXEMPLO 02
let pessoa = {
    nome: "Paulo",
    idade: 30,
    cargo: "Desenvolvedor"
}

console.log(pessoa);

let novaPessoa = {
    ...pessoa,
    ano: 2024,
    cidade: "Brasilia"
}

console.log(novaPessoa);
*/

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        idade: 23,
        status: 2,
        telefone: '13448395'
    }
    return novosDados;
}

console.log(cadastroPessoa({nome: "Paulo", sobreNome: "Vilela", cargo:"Desenvolvedor"}))






