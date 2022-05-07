var vArroz_1 = 2; 
var vArroz_2 = 2.5; 
var fPreto = 4; 
var lentilha = 5;
var fBranco = 3;
var linguica = 7;

var resposta1 = prompt("tem arroz do tipo 1? [sim/nao]" );
if (resposta1 == "sim"){
    vArroz_1 = parseFloat (vArroz_1)
    fPreto = parseFloat (fPreto) 
    var soma = vArroz_1 + (fPreto * 2)
    alert("1kg de arroz 1 + 2kg de feijao preto R$" + soma )
} else {
    var resposta2 = prompt("tem arroz do tipo 2? [sim/nao]")

} if (resposta2 == "sim"){
    vArroz_2 = parseFloat(vArroz_2)
    fBranco = parseFloat(fBranco)
    soma = (vArroz_2 * 3) + fBranco 
    alert("3kg de arroz tipo 2 + 1kg feijao branco R$" + soma)

} else if (resposta2 == "nao") {
    lentilha = parseFloat(lentilha)
    linguica = parseFloat(linguica)
    soma = linguica + (lentilha * 2)
    alert("1kg linguiça + 2kg de lentilha R$" + soma)
}
