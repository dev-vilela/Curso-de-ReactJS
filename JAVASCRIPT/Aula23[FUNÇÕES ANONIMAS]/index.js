/*---------------FUNÇÕES ANONIMAS----------------------

EXEMPLO 01

function adicionar(...numeros){
    let total = numeros.reduce(function(total, proximo){
        return total + proximo
    });

    console.log(total)
}

adicionar(1,2,3,4,5)

*/
function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => // Função anonima "=>"
     total + proximo);

    console.log(total)
}

adicionar(1,2,3,4,5)






