// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.
export function rep04():void{
    let op = 0
    let lista_par: number[] = []
    let lista_impar: number[] = []
    while(op != -1){
        op = Number(prompt("Digite um número: (-1 para sair)"))
    
        if(op === -1){
        continue
        }
        if(op % 2 === 0){
            lista_par.push(op)
        }else{
            lista_impar.push(op)
        }
    }
    console.log(`Números impares: ${lista_impar}`)
    console.log(`Números pares: ${lista_par}`)
}