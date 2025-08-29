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

// let numberOne = Number(prompt("Enter the first number"));
// let numberTwo = Number(prompt("Enter the second number"));
// let operator = prompt("Enter an operator (+, -, *, /)");

// if (operator === "+") {
//     alert(numberOne + numberTwo);
// } else if (operator === "-") {
//     alert(numberOne - numberTwo);
// } else if (operator === "*") {
//     alert(numberOne * numberTwo);
// } else if (operator === "/") {
//     if (numberTwo !== 0) {
//         alert(numberOne / numberTwo);
//     } else {
//         alert("Cannot divide by zero.");
//     }
// } else {
//     alert("Invalid operator.");

// }

// Exercício 8

// - O usuário insere três números.
// - Use `if-else` para determinar e exibir o maior.

// let numberOne = Number(prompt("Enter the first number"))
// let numberTwo = Number(prompt("Enter the second number"))
// let numberThree = Number(prompt("Enter the third number"))

// if (numberOne >= numberTwo && numberOne >= numberThree) {
//     alert(numberOne)
// }else if (numberTwo >= numberThree && numberTwo >= numberOne) {
//     alert(numberTwo)
// }else {
//     alert(numberThree)
// }

// Exercício 9
    // Desconto em compras:**
    // - Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
    // - Caso contrário, exiba o valor normal.


    // let discountPurchases = Number(prompt("Enter the purchase amount?"))
    // let percentage = 10

    // if ( discountPurchases > 100) {
    //     let valorPercentual = discountPurchases - ((discountPurchases * percentage) / 100);
    //     alert(valorPercentual)

    // }else{
    //     alert(discountPurchases)
    // }
// Exercício 10
// Sistema de login simples:
//     - O usuário insere um nome de usuário e senha.
//     - Se `usuario == "admin"` e `senha == "1234"`, exibir "Login bem-sucedido", caso contrário "Acesso negado".

// let name = prompt("Enter your name ?")

// let password = Number(prompt("Enter your passord?"))

// if ( name == "admin" && password == "1234") {
     
//     alert("Successful login")

//  } else {

//     alert("Access denied")
// }

// Classificação de triângulos:
//     - O usuário insere três lados.
//     - Verifique se forma um triângulo e classifique como equilátero, isósceles ou escaleno.

// let sideA = prompt("Enter the first side:")
// let sideB = prompt("Enter the second side:")
// let sideC = prompt("Enter the third side:")

// if ( sideA === sideB && sideB === sideC) {
//     alert("Equilateral triangle")
// } else if ( sideA === sideB || sideA === sideC || sideB === sideC) {
//     alert("Isosceles triangle")
// } else {
//     alert("Scalene triangle")
// }



// Conversão de notas para conceitos:
//     - O usuário insere uma nota (0-100).
//     - Converta para conceitos:
//     - `A` (90-100), `B` (80-89), `C` (70-79), `D` (60-69), `F` (<60).

// let notice = Number(prompt("enters a grade (0-100)"))

// if ( notice >= 90 && notice <= 100) {
//     alert("A")
// } else if ( notice >= 80 && notice <= 89) {
//     alert("B")
// } else if ( notice >= 70 &&  notice <= 79) {
//     alert("C")
// } else if (notice >= 60 && notice <= 69) {
//     alert("D")
// }  else if (notice >= 0 && notice < 60) {
//     alert("F");
// } else {
//     alert("Nota inválida");
// }



// Cálculo de IMC:
//     - Peça peso e altura.
//     - Calcule o IMC e classifique como abaixo do peso, normal, sobrepeso ou obesidade.

// let weight = Number(prompt("Put your weight (kg):"))
// let height = Number(prompt("Enter your height (m):"))
// let imc = weight / (height * height);

// let classification = "";

// if (imc < 20) {
//     alert("Underweight ")
// } else if ( imc < 25) {
//  alert("Normal weight")
// } else if (imc < 30) {
//     alert("Overweight")
// } else {
//     alert("Obesity")
// }




// Validação de ano bissexto:
//     - Peça um ano e verifique se é bissexto.
//     - Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.

// let leapYear = Number(prompt("Enter year?"))

// let 

// if (leapYear )