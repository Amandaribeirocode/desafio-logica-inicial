rankeadas(200,5)

function rankeadas(vitorias, derrotas) {
    let saldovitorias = vitorias - derrotas;
    let nivel = "";

if(saldovitorias <= 10) {
    nivel = "Ferro";
}
else if(saldovitorias <= 20) {
     nivel = "Bronze";
}
else if(saldovitorias <= 50) {
     nivel = "Prata";
}
else if(saldovitorias <= 80) {
    nivel = "Ouro";
}
else if(saldovitorias <= 90) {
     nivel = "Diamante";
}
else if(saldovitorias <= 100) {
     nivel = "Lendário";
}
else {
      nivel = "Imortal";
}
    console.log("O Herói tem de saldo: " +  saldovitorias + " vitórias " + "e está no nível: " + nivel)
}