// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.


export function q12poo():void{
    class Carro{
        private modelo: string
        private valor_diaria: number
        private quant_dias: number
        constructor(modelo: string, valor_diaria:number, quant_dias: number){
            this.modelo = modelo
            this.valor_diaria = valor_diaria
            this.quant_dias = quant_dias
        }
        resumo():void{
            console.log(`Modelo do carro: ${this.modelo} 
                \n Valor da diária: R$ ${this.valor_diaria}
                \n Quantidade de dias: ${this.quant_dias}
                \n Valor total: R$ ${this.quant_dias * this.valor_diaria} `)
        }

    }
   
    let quest = 0
    while(quest != -1){
        let modelo_carro = String(prompt("Digite o modelo do carro: "))
        let valor_diaria_carro = Number(prompt("Digite o valor da diária: "))
        let quant_dias_carro = Number(prompt("Digite a quantidade de dias solicitada: "))
        let NovoCarro: Carro = new Carro(modelo_carro, valor_diaria_carro, quant_dias_carro)
        NovoCarro.resumo()
        quest = Number(prompt("Deseja fazer uma nova locação? (-1 caso negativo)"))
    }
}