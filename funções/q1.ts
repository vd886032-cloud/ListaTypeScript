// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).
export function func01(): void{
    let somarAte = (n:number):number =>{
        let valor:number = 0
        for(let i= n; i >=0; i--){
            valor+= i 
            
        }
        return valor
    }
    console.log(somarAte(10))
}
