var contador = 1; // CONTADOR = VARIAVEL CRIADA PARA LIMITAR QUANTIDADE DE ERROS
var idade = prompt("digite sua idade");

while(idade < 0 || idade > 110 && contador < 3){
    
    idade = prompt("digite  uma idade valida: ")
    contador ++;
}
if(idade = parseInt(idade) && contador < 3){
    alert("sua idade é " + idade)
}else{
    alert("ERRO")
}