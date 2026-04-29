// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

export function arr02():void{
    let lista: number[] = []
let op = 0 

while (op != -1) {
    op = Number(prompt("Digite sua nota: (-1 para sair) "))
    
    if (op !== -1) {
        lista.push(op)
    }
}

let soma = lista.reduce((acumulador, valor) => acumulador + valor, 0)
let media = lista.length > 0 ? soma / lista.length : 0
let acima_media = lista.filter((n) => n > media)

console.log(`Quantidade de notas lidas: ${lista.length}
Notas: ${lista} 
Lista inversa: ${lista.sort((a, b) => b - a)} 
Soma das notas: ${soma}
Média das notas: ${media}
Quantidade de notas acima da média: ${acima_media.length}
`)
}