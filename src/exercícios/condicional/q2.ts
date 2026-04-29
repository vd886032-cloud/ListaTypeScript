// 2. Desenvolva a tabuada de um número usando for.
export function rep02():void{
    let numero:number = Number(prompt("Digite um número: "))
    for(let i=1; i<= 10; i++){
        console.log(`${numero}*${i} =${numero * i}`)
    }
}