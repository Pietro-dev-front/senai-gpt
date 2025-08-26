// BASICO

//Exercicio - 1
// Peça ao usuário uma idade.
// Use um `if-else` para verificar se ele é maior ou menor de idade.

// let idadeTest = prompt("Qual é a sua idade?");

// if (idadeTest >= 18) {

//     alert("Você é maior de idade.");

//  } else {

//     alert("Você é menor de idade.");
    
// }

//Exercicio - 2

// - Peça ao usuário para inserir um número.
// - Use um `if-else` para verificar se o número é positivo, negativo.

// let number = prompt("Insert a number?")

// if (number > 0) {

//     alert("Number positive")
// } else {

//     alert("Number negative ")
// }

// Exercício - 3

// - O usuário insere a nota de um aluno (0 a 100).
// - Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

// let number = prompt("enter a score from 0 to 100?")

// if (number >= 60) {
//     alert("approved")
// } else {
//     alert("failed")
// }


// Exercício - 4

// - Peça ao usuário para inserir um número.
// - Use um `if-else` para verificar se o número é positivo, negativo ou zero.

// let number = prompt("enter a number?")

// if (number > 0){

//     alert("positive number")
    
//  }else {
//     if (number < 0){
//         alert("negative number")

//     } else {
//         alert("number zero")
//     }
// }

// Exercício - 5

// - Peça ao usuário para inserir sua idade.
// - Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).

// let number = prompt(" Enter your age ? ")

// if (number >0 && number < 12 ) {
//     alert("you are a child")
// } else {
//     if ( number > 13 && number < 17 ) {
//         alert("you are a teenager")
//     } else {
//         alert("you are an adult")
//     }
// }

// Exercício 6

// - Peça ao usuário para inserir um número.
// - Use o operador `%` para verificar se o número é divisível por 2.

// let number = prompt("enter a number")

// if ( number % 2 == 0) {
//     alert("number and pair")
// } else {
//     alert("number is odd")
// }

// INTERMEDIARIO

// Exercício 7

// - Peça dois números e uma operação (`+`, `-`, `*`, `/`).
// - Use um `if-else` para calcular o resultado e exibi-lo.

let numberOne = Number(prompt("Enter the first number"))
let numberTwo = Number(prompt("Enter the second number"))
let operator = Number(prompt("Enter an operator"))

if (operator === "+") {
    alert(numberOne + numberTwo)
} else {
    if (operator === "*") {
        alert(numberOne * numberTwo)
        if (operator === "/") {
        alert(numberOne / numberTwo)
         if ( operator === " - "){
                alert(numberOne - numberTwo)
            }
        } 
    } 
}


// Exercício 8

// - O usuário insere três números.
// - Use `if-else` para determinar e exibir o maior.