// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.

export function q23poo(): void {
    abstract class Produto {
        private codigo: number
        private nome: string
        private preco_custo: number
        constructor(codigo: number, nome: string, preco_custo: number) {
            this.codigo = codigo
            this.nome = nome
            this.preco_custo = preco_custo
        }

        get Codigo(): number {
            return this.codigo
        }

        get Nome(): string {
            return this.nome
        }

        get Preco(): number {
            return this.preco_custo
        }
        abstract valor_final(diaAtual: number): number
    }

    class Perecivel extends Produto {
        private validade: number
        constructor(
            codigo: number, nome: string, preco_custo: number, validade: number
        ) {
            super(codigo, nome, preco_custo)
            this.validade = validade
        }
        valor_final(diaAtual: number): number {
            if (diaAtual == this.validade) {
                return this.Preco - (this.Preco * 30 / 100)
            }
            return this.Preco
        }
    }
    class NaoPerecivel extends Produto {
        valor_final(diaAtual: number): number {
            return this.Preco
        }
    }
    let estoque: Produto[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Produto Perecível
        \n 2- Cadastrar Produto Não Perecível
        \n -1- Finalizar estoque`))
        switch (quest) {
            case 1:
                let codP = Number(prompt("Digite o código do produto: "))
                let nomeP = String(prompt("Digite o nome do produto: "))
                let precoP = Number(prompt("Digite o preço de custo: "))
                let validade = Number(prompt("Digite o dia do vencimento: "))

                estoque.push(
                    new Perecivel(codP, nomeP, precoP, validade)
                )
                break
            case 2:
                let codN = Number(prompt("Digite o código do produto: "))
                let nomeN = String(prompt("Digite o nome: "))
                let precoN = Number(prompt("Digite o preço de custo: "))

                estoque.push(
                    new NaoPerecivel(codN, nomeN, precoN)
                )
                break
            case -1:
                console.log("Estoque finalizado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let diaAtual = Number(prompt("Digite o dia atual: "))
    for (let produto of estoque) {
        console.log(`Relatório do dia: Código: ${produto.Codigo}
        \n Produto: ${produto.Nome}
        \n Valor final: R$ ${produto.valor_final(diaAtual)}`)
    }
}