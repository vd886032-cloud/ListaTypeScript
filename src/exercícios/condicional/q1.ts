
// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function cond01():void{
let numero: number = Number(prompt("Digite um número: "))
if(numero >0){
    console.log(`O número ${numero} é positivo`)
} else{
    console.log(`Ò número ${numero}`)
}
}
