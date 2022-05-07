 cont  = 0;
 var idade= prompt("insira sua idade") 

do {
  var acerteIdade = prompt  ("acerte sua idade");
   cont ++;

} while (idade != acerteIdade && cont <3);

if (cont < 3) {
   alert ("Sua idade é" + idade);

}else{
alert ("Você excedeu o número de tentativas");
} 

