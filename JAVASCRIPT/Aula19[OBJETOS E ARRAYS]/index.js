/*----------------------DESCONSTRUÇÃO EM OBJETOS E ARRAYS---------------- */

// const pessoa = {
//     nome: "Paulo",
//     sobrenome: "Vilela",
//     idade: 23,
//     cargo: "Desenvolvedor"
// }

// let {nome} = pessoa;

// console.log(nome)

// let {cargo: programador} = pessoa

// console.log(programador)

// let {idade, cargo} = pessoa

// console.log(idade, cargo)

//-------------EXEMPLO 02-------------------

// let nomes = ['Paulo', 'Vilela', 20]

// console.log(nomes)

// let {1: sobrenome } = nomes

// console.log(sobrenome)

// let {0: primeiroNome, 2: idade} = nomes
// console.log(idade)

//-------------EXEMPLO 03-------------------
let nome = ['Paulo', 'Vilela', 20]

let [primeiroNome, sobrenome]= nome;

console.log(primeiroNome)
console.log(sobrenome)
