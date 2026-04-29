// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.


export function arr04():void{
    let calcular_media = (notas: number[]) =>{
        let soma_notas  = notas.reduce((acumulador, somador)=> acumulador+ somador, 0)
        let media = soma_notas/ notas.length
        return media.toFixed(2)
    }
    console.log(calcular_media([10,12,13]))
}