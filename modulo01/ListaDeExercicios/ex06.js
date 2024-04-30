/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

const lado1 = Number(prompt("Digite o primeiro lado do triangulo: "))
const lado2 = Number(prompt("Digite o segundo lado do triangulo: "))
const lado3 = Number(prompt("Digite o terceiro lado do triangulo: "))

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 == lado2 && lado2 == lado3){
        console.log("O tringulo formado é EQUILATERO")
    } else if (lado1 != lado2 && lado3 != lado2 && lado1 != lado3) {
        console.log("O tringulo formado é ESCALENO")
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log("O tringulo formado é ISOSCELES")
    }
} else {
    console.log("Impossivel formar um triangulo com essas medidas")
}