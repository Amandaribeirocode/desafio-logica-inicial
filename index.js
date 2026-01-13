let nome = "Amanda"
let nivelExperiencia = 5500
let nivel = ""

if (nivelExperiencia < 1000) {
    nivel = "Ferro"
}
else if (nivelExperiencia <= 2000) {
    nivel = "Bronze"
}
else if(nivelExperiencia <=5000) {
    nivel = "Prata"
}
else if(nivelExperiencia <= 7000) {
    nivel = "Ouro"
}
else if(nivelExperiencia <=8000) {
    nivel = "Platina"
}
else if(nivelExperiencia <= 9000) {
    nivel = "Ascendente"
}
else if(nivelExperiencia <= 10000) {
    nivel = "Imortal"
}
else {
    nivel = "Radiante"
}

console.log("O Heroi de nome: " + nome + " está no nível de " + nivel)
