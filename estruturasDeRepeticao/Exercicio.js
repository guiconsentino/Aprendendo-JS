var senha, repete, senhaCriada;

do{
    senha = prompt("crie sua senha de 6 digitos ")
}while (senha.length != 6);
    repete = prompt("redigite sua senha, a mesma criada ")
while(repete != senha){
    repete = prompt ("a senha esta errada, digite a senha correta ")
}
senhaCriada = prompt("entre no app com sua senha criada ")
for(var cont = 1; senha != senhaCriada && cont <3 ; cont ++){

    alert("a senha não confere, insira novamente. Voce tem mais " + (3-cont) + " tentativas")
    senhaCriada = prompt("para acessar sua conta entre com sua senha")
    
}
if (cont < 3){
        alert ("Sua senha está correta! Você pode acessar sua conta.");
      } else {
        senha = 99;
        alert ("Sua senha foi bloqueada. Procure seu gerente");
      }    
    
