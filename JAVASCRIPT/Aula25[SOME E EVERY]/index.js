/*---------------[SOME E EVERY]----------------------

some() executa a função callback uma vez para cada elemento presente no array até achar um onde o callback retorne um valor true. Se em qualquer dos elementos o valor for encontrado, some() imediatamente retorna true
EXEMPLO 01
SOME:
let nomes = ["Paulo", "Jader", "Saulo"]

console.log(nomes.some(nomes => nomes === "Joao"));
 */
//----------------------------------

//

let nomes = [
    {nome: 'Paulo', idade: 23},
    {nome: 'Saulo', idade: 26},
    {nome: 'Jader', idade: 28}
];

console.log(nomes.every(nomes => nomes.idade >= 18))

if(nomes.every(nomes => nomes.idade >= 18)){
    console.log("Todos podem realizar o exame para CNH")
}else{
    console.log("Alguem é de menor")
}






