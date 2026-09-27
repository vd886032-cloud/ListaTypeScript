// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.

export function q41poo(): void {
    abstract class Encomenda {
        private peso: number
        private cidade: string

        constructor(peso: number, cidade: string) {
            this.peso = peso
            this.cidade = cidade
        }

        get Peso(): number {
            return this.peso
        }

        get Cidade(): string {
            return this.cidade
        }

        abstract calcularFrete(): number
    }

    class EncomendaPadrao extends Encomenda {
        calcularFrete(): number {
            return this.Peso * 10
        }
    }

    class EncomendaExpressa extends Encomenda {
        calcularFrete(): number {
            return this.Peso * 20
        }
    }
    let listaEncomendas: Encomenda[] = []
    let quest = 0
    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Encomenda Padrão
        \n 2- Cadastrar Encomenda Expressa
        \n -1- Encerrar`))
        switch (quest) {
            case 1:

                let pesoP = Number(prompt("Digite o peso (kg): "))
                let cidadeP = String(prompt("Digite a cidade de destino: "))
                listaEncomendas.push(
                new EncomendaPadrao(pesoP, cidadeP)
                )
                break

            case 2:

                let pesoE = Number(prompt("Digite o peso (kg): "))
                let cidadeE = String(prompt("Digite a cidade de destino: "))
                listaEncomendas.push(
                    new EncomendaExpressa(pesoE, cidadeE)
                )
                break

            case -1:
                console.log("Sistema encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let totalExpresso = 0

    for (let encomenda of listaEncomendas) {
        let frete = encomenda.calcularFrete()

        console.log(`Destino: ${encomenda.Cidade}`)
        console.log(`Peso: ${encomenda.Peso} kg`)
        console.log(`Frete: R$ ${frete}`)
        if (encomenda instanceof EncomendaExpressa) {
            totalExpresso += frete
            console.log("Entrega em até 24 horas")
        }
    }
    console.log(`Total arrecadado com fretes expressos: R$ ${totalExpresso}`)
}