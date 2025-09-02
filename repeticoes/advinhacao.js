// Jogo de adivinhação:**
// Gere um número aleatório de 1 a 100.
// Peça ao usuário para adivinhar e use um `while` para continuar até ele acertar.
// Informe se o número inserido é maior ou menor que o correto.
let min = 1;
let max = 100;

let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
console.log(numeroAleatorio)

let tentativas = []

while ( tentativas > 0  ) {
    console.log("Tente advinha um numero aleatorio de 1 a 100? ")
  
}