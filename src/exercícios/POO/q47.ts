// 47. Repetição Encapsulamento
// Sistema de Controle de Gastos Pessoais
// Para ajudar no planejamento financeiro, crie uma classe Despesa com os atributos privados
// descricao, categoria e valor. Crie métodos de leitura e escrita com validação para impedir valores
// menores ou iguais a zero no atributo valor. O programa deve solicitar repetidamente que o usuário
// insira suas despesas do mês. O sistema mantém uma variável acumuladora para somar o valor total
// das despesas inseridas e exibe o saldo devedor atualizado a cada nova entrada até que o usuário decida
// parar o preenchimento.


export function q47poo(): void {
    class Despesa {
        private descricao: string
        private categoria: string
        private valor: number

        constructor(descricao: string, categoria: string, valor: number) {
            this.descricao = descricao
            this.categoria = categoria
            this.valor = 0
            this.Valor = valor
        }

        get Descricao(): string {
            return this.descricao
        }

        get Categoria(): string {
            return this.categoria
        }

        get Valor(): number {
            return this.valor
        }

        set Valor(novoValor: number) {

            if (novoValor > 0) {
                this.valor = novoValor
            }

            else {
                console.log("Valor inválido")
            }
        }
    }

    let totalDespesas = 0
    let quest = 1

    while (quest != 0) {
        let descricao = String(prompt("Digite a descrição da despesa: "))
        let categoria = String(prompt("Digite a categoria: "))
        let valor = Number(prompt("Digite o valor: "))

        let novaDespesa = new Despesa(descricao, categoria, valor)

        if (novaDespesa.Valor > 0) {
            totalDespesas += novaDespesa.Valor

            console.log(`Despesa: ${novaDespesa.Descricao}`)
            console.log(`Saldo devedor: R$ ${totalDespesas}`)
        }
        quest = Number(prompt(`Deseja adicionar outra despesa?
        \n 1- Sim
        \n 0- Não`))
    }
    console.log(`Total de despesas do mês: R$ ${totalDespesas}`)
}