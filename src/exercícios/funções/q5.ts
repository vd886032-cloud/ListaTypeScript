// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function func05():void{
    let mult3 = (n1: number, n2: number): number[] =>{
        let lista: number[] = []
        for(n1; n1<= n2; n1++ ){
            if(n1 % 3 === 0){
                lista.push(n1)
            }
        }
        return lista
    }
    let n1: number = Number(prompt("Digite um número: "))
    let n2: number = Number(prompt("Digite outro número: "))
    console.log(`Os números múltiplos de 3 entre o intervalo desses dois números são ${mult3(n1, n2).join(" -")}`)
}