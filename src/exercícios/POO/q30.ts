// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function q30poo(): void {
    abstract class Passagem {
        private nome: string
        private cpf: string
        private valor_base: number

        constructor(nome: string, cpf: string, valor_base: number) {
            this.nome = nome
            this.cpf = cpf
            this.valor_base = valor_base
        }
        get Nome(): string {
            return this.nome
        }
        get Cpf(): string {
            return this.cpf
        }
        get ValorBase(): number {
            return this.valor_base
        }

        abstract calcular_valor(): number
        abstract identificar(): string
    }
    class PassagemComum extends Passagem {
        calcular_valor(): number {
            return this.ValorBase
        }

        identificar(): string {
            return `Passagem Comum
            \n Passageiro: ${this.Nome}
            \n CPF: ${this.Cpf}
            \n Valor: R$ ${this.calcular_valor()}`
        }
    }

    class PassagemEstudantil extends Passagem {
        calcular_valor(): number {
            return this.ValorBase * 0.5
        }
        identificar(): string {
            return `Passagem Estudantil
            \n Passageiro: ${this.Nome}
            \n CPF: ${this.Cpf}
            \n Valor: R$ ${this.calcular_valor()}`
        }
    }
    let listaPassagens: Passagem[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Vender Passagem Comum
        \n 2- Vender Passagem Estudantil
        \n -1- Encerrar vendas`))
    
        switch (quest) {
            case 1:
                let nomeC = String(prompt("Digite o nome do passageiro: "))
                let cpfC = String(prompt("Digite o CPF: "))
                let valorC = Number(prompt("Digite o valor da corrida: "))

                listaPassagens.push(
                    new PassagemComum(nomeC, cpfC, valorC)
                )
                break
            case 2:
                let nomeE = String(prompt("Digite o nome do passageiro: "))
                let cpfE = String(prompt("Digite o CPF: "))
                let valorE = Number(prompt("Digite o valor da corrida: "))
                listaPassagens.push(
                    new PassagemEstudantil(nomeE, cpfE, valorE)
                )
                break
            case -1:
                console.log("Vendas encerradas.")
                break
            default:

                console.log("Opção inválida.")
        }
    }

    let faturamento = 0
    console.log("RELATÓRIO DE PASSAGENS")

    for (let passagem of listaPassagens) {
        console.log(passagem.identificar())
        faturamento += passagem.calcular_valor()
    }

    console.log(`Faturamento total do dia: R$ ${faturamento}`)
}