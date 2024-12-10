/*----------------------REST OPERATOR---------------- 
EXEMPLO 01

function minhaLista(...nomes){
    console.log(nomes)
}

minhaLista("Paulo", "Wende", "Namorados")
------------------------------------
EXEMPLO 02
function minhaLista(...numeros){
    console.log(numeros)
}

minhaLista(1,2,3,4,5)
*/

function cadastrar(usuarios, ...novosUsuarios){
    let totalUsuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsuarios)
}

let usuarios = ["Paulo", "Wende"];

let novosUsuarios = cadastrar(usuarios, prompt("Digite o nome do seu filho: "));







