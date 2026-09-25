// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function q28poo(): void {
    abstract class Acomodacao {

        private numero_quarto: number
        private preco_base: number

        constructor(numero_quarto: number, preco_base: number) {
            this.numero_quarto = numero_quarto
            this.preco_base = preco_base
        }

        get NumeroQuarto(): number {
            return this.numero_quarto
        }

        get PrecoBase(): number {
            return this.preco_base
        }

        abstract calcular_total(dias: number): number
    }
    class QuartoBasico extends Acomodacao {
        calcular_total(dias: number): number {
            return this.PrecoBase * dias
        }
    }

    class SuiteMaster extends Acomodacao {
        private adicional_hidro: number
        constructor(numero_quarto: number, preco_base: number, adicional_hidro: number) {
            super(numero_quarto, preco_base)
            this.adicional_hidro = adicional_hidro
        }

        calcular_total(dias: number): number {
            return (this.PrecoBase * dias) + this.adicional_hidro
        }
    }
    class CheckOut {
        quarto: Acomodacao
        dias: number
        constructor(quarto: Acomodacao, dias: number) {
            this.quarto = quarto
            this.dias = dias
        }

        total(): number {
            return this.quarto.calcular_total(this.dias)
        }
    }
    let listaCheckOut: CheckOut[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Quarto Básico
        \n 2- Cadastrar Suíte Master
        \n -1- Finalizar`))
        switch (quest) {
            case 1:
                let numB = Number(prompt("Digite o número do quarto: "))
                let precoB = Number(prompt("Digite o preço da diária: "))
                let diasB = Number(prompt("Digite a quantidade de dias: "))
                let basico = new QuartoBasico(numB, precoB)

                listaCheckOut.push(
                    new CheckOut(basico, diasB)
                )

                break
            case 2:
                let numS = Number(prompt("Digite o número do quarto: "))
                let precoS = Number(prompt("Digite o preço da diária: "))
                let hidro = Number(prompt("Digite o adicional da hidromassagem: "))
                let diasS = Number(prompt("Digite a quantidade de dias: "))
                let suite = new SuiteMaster(numS, precoS, hidro)

                listaCheckOut.push(
                    new CheckOut(suite, diasS)
                )
                break
            case -1:
                console.log("Cadastro encerrado.")
                break

            default:

                console.log("Opção inválida.")
        }
    }

    console.log(`Quartos com faturamento acima de 1000: `)
    for (let hospedagem of listaCheckOut) {
        if (hospedagem.total() > 1000) {
            console.log(`Quarto: ${hospedagem.quarto.NumeroQuarto}
            \n Dias: ${hospedagem.dias}
            \n Total: R$ ${hospedagem.total()}`)
        }
    }
}