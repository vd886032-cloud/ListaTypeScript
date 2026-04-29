
// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function cond03():void{
    let n1: number = Number(prompt("Digite um número: "))
    let n2: number = Number(prompt("Digite outro número: "))
    let op: number = Number(prompt(`Digite a operação desejada: \n 1-Soma \n 2-Subtração \n 3-Multiplicação \n 4-Divisão  `))
    switch (op){
        case 1:
            console.log(`Resultado da Soma: ${n1+ n2}`)
            break
        case 2: 
            console.log(`Resultado da Subtração: ${n1- n2}`)
            break
        case 3:
            console.log(`Resultado da Multiplicação: ${n1* n2}`)
            break
        case 4:
            if(n2 === 0 ){
                console.log("Não é possivel divisão por zero.")
            }else{
                console.log(`Resultado da Divisão: ${n1/ n2}`)
            }
            break
}      
}