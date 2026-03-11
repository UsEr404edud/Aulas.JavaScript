//Condições 
//Se ... senão 
//If ...else 
const idade = 19
if (idade < 18 ) {
    console.log("Você não pode tirar a CNH")

} else {
    console.log("Você pode tirar CNH, pague a taxa!")
}

const possuiCNH = false
if(idade >= 18 ) {
    console.log("Tudo certo, você pode dirigir!")
}
// Operadores lógicos:
//&& -> E 
// || -> OU 
/*TABELA VERDADE:
Para operador E:   |  Operador  OU
V V = V            |  V V = V 
V F = F            |  V F = V 
F V = F            |  F V = V
F F = F            |  F F = F
*/