// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros
// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento():number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.


export function q40poo(): void {
    abstract class Investimento {
        private valorAplicado: number
        private meses: number

        constructor(valorAplicado: number, meses: number) {
            this.valorAplicado = valorAplicado
            this.meses = meses
        }

        get ValorAplicado(): number {
            return this.valorAplicado
        }

        get Meses(): number {
            return this.meses
        }

        abstract calcularRendimento(): number
    }
    class RendaFixa extends Investimento {
        calcularRendimento(): number {
            return this.ValorAplicado + (this.ValorAplicado * 0.008 * this.Meses)
        }
    }
    class Acoes extends Investimento {
        private taxa: number

        constructor(valorAplicado: number, meses: number, taxa: number) {
            super(valorAplicado, meses)
            this.taxa = taxa
        }

        calcularRendimento(): number {
            return this.ValorAplicado + (this.ValorAplicado * (this.taxa / 100) * this.Meses)
        }
    }
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Simular Renda Fixa
        \n 2- Simular Ações
        \n -1- Sair`))

        switch (quest) {
            case 1:
                let valorRF = Number(prompt("Digite o valor aplicado: "))
                let mesesRF = Number(prompt("Digite o tempo em meses: "))
                let renda = new RendaFixa(valorRF, mesesRF)
                console.log(`Saldo final: R$ ${renda.calcularRendimento()}`)
                break
            case 2:
                let valorA = Number(prompt("Digite o valor aplicado: "))
                let mesesA = Number(prompt("Digite o tempo em meses: "))
                let taxa = Number(prompt("Digite a taxa mensal: "))
                let acao = new Acoes(valorA, mesesA, taxa)
                console.log(`Saldo final: R$ ${acao.calcularRendimento()}`)

                break
            case -1:
                console.log("Simulador encerrado.")

                break
            default:
                console.log("Opção inválida.")
        }
    }
}