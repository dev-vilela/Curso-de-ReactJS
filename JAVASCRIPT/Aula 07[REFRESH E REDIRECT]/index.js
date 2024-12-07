//PRIMEIRO EXEMPLO
function entrar(){

    var area = document.getElementById('area')
    var texto = prompt("Digite seu nome: ")

    if(texto == '' || texto == null){
        alert("Digite seu nome novamente! ")
    area.innerHTML = 'Bem vindo... ';

    }else{
    area.innerHTML = 'Bem vindo ' + texto;
    }

}

//SEGUNDO EXEMPLO
function entrar2(nome){
    var area = document.getElementById('area2')
    var texto = prompt("Digite seu sobrenome: ")

    area.innerHTML = nome + " " + texto;
}

//TERCEIRO EXEMPLO

function entrar3(idade){
    var area = document.getElementById('area3')
    var texto = prompt("Digite sua idade: ")

    area.innerHTML = nome +  idade + " anos" + texto;
}