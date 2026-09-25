// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function q37poo(): void {
    abstract class Consumidor {
        private numero_conta: number
        private kwh: number

        constructor(numero_conta: number, kwh: number) {
            this.numero_conta = numero_conta
            this.kwh = kwh
        }

        get NumeroConta(): number {
            return this.numero_conta
        }

        get Kwh(): number {
            return this.kwh
        }

        abstract calcular_valor(): number
    }

    class ConsumidorResidencial extends Consumidor {
        calcular_valor(): number {
            return this.Kwh * 0.75

        }
    }
    class ConsumidorComercial extends Consumidor {
        calcular_valor(): number {
            if (this.Kwh <= 1000) {
                return this.Kwh * 0.60
            }
            return (1000 * 0.60) + ((this.Kwh - 1000) * 0.50)
        }
    }
    let listaConsumidores: Consumidor[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Consumidor Residencial
        \n 2- Cadastrar Consumidor Comercial
        \n -1- Finalizar`))

        switch (quest) {
            case 1:
                let contaR = Number(prompt("Digite o número da conta: "))
                let kwhR = Number(prompt("Digite o consumo em kWh: "))

                listaConsumidores.push(
                    new ConsumidorResidencial(contaR, kwhR)
                )
                break

            case 2:
                let contaC = Number(prompt("Digite o número da conta: "))
                let kwhC = Number(prompt("Digite o consumo em kWh: "))

                listaConsumidores.push(
                    new ConsumidorComercial(contaC, kwhC)
                )
                break

            case -1:
                console.log("Cadastro encerrado.")
                break

            default:
                console.log("Opção inválida.")
        }
    }

    let somaKwh = 0

    for (let consumidor of listaConsumidores) {
        console.log(`Conta: ${consumidor.NumeroConta}
        \n Consumo: ${consumidor.Kwh} kWh
        \n Valor: R$ ${consumidor.calcular_valor()}`)

        somaKwh += consumidor.Kwh
    }
    
    let media = somaKwh / listaConsumidores.length
    console.log(`Média de consumo: ${media} kWh`)
}