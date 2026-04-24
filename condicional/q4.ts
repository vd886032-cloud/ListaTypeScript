// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.
export function cond04():void{
    let n1:number, n2:number
    n1 = Number(prompt("Digite o primeiro número: "))
    n2 = Number(prompt("Digite o segundo número: "))
    if(n1 === n2){
        console.log("Números iguais")
    }
    else if(n1 > n2){
        console.log("Primeiro maior")
    }else{
        console.log("Segundo maior")
    }
}