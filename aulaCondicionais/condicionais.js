//condicional simples

var idade = prompt("digite sua idade: ");

/*if(idade >= 18){
    prompt("pode entrar na festa")
}else{
    prompt("voce é menor de idade e não pode entrar")
}

var nome = prompt("digite seu nome: ")
if(nome == "guilherme"){
 prompt("voce vai conseguir")
}*/

//condicional composta  

var sexo = prompt("qual é o seu sexo?[M/F] ")
var casado = prompt("casado?[s/n]")
        //sintaxe diferente de java!
if (idade >= 18 && sexo =="f"){
    prompt("venha para nossa campanha de saude");
    }else if(sexo == "m"){
    }if(casado == "s"){
        prompt("venha para nossa campanha de casais");
    }else{
        prompt("venha participar da nossa campanha doação de sangue");        
    }
