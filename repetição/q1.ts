// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total
export function rep01():void{
    let num: number = -1
    let lista: number[] = []
    while(num != 0){
        num = Number(prompt("Digite um número: "))
        lista.push(num)
    }
console.log(`Quantidade de números digitados: ${lista.length -1} \n Soma total: ${lista.reduce((acumulador, num)=> acumulador + num )}`)
}
