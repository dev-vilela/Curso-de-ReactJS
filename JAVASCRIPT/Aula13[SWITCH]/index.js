//SWITCH

document.write("<br> Escolha seu pedido: <br>");
document.write("<br> 0 - Soverte | 1 - Açaí <br>");
document.write("<br> 2 - Coca Cola | 3 - Água com Gás <br><br");

function pedir(){
    x = prompt("O que deseja pedir?");

    switch(x){
    
        case "0":
            alert("Seu pedido foi um Soverte");
            break;
        case "1":
            alert("Seu pedido foi um Açaí");
            break;
        case "2":
            alert("Seu pedido foi uma Coca-Cola");
            break
        case "3":
            alert("Seu pedido foi uma Água com Gás");
            break

        default:
            alert("Não temos essa opção no nosso cardapio!")
    
    }
}