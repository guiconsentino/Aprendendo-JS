var num; var acerteONum

acerteONum = prompt("digite um numero de 0 a 10");
num = Math.floor(Math.random() * 10);
    alert(num);

while(acerteONum != num){
    num = Math.floor(Math.random() * 10);
    acerteONum = prompt("voce errou, digite denovo!: ");
    alert(num)
}

    if(acerteONum == num){
        prompt("parabens voce acertou o numero! " + num); 
    
}