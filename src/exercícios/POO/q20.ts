// 20. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.


export function q20poo(): void {
    abstract class Pedido {
        private mesa: number
        private valor_ingredientes: number

        constructor(mesa: number, valor_ingredientes: number) {
            this.mesa = mesa
            this.valor_ingredientes = valor_ingredientes
        }

        get Mesa(): number {
            return this.mesa
        }

        get ValorIngredientes(): number {
            return this.valor_ingredientes
        }

        abstract calcular_total(): number
        abstract resumo(): string
    }
    class PedidoMesa extends Pedido {
        calcular_total(): number {
            return this.ValorIngredientes
        }
        resumo(): string {
            return `Mesa: ${this.Mesa}
            \n Valor: R$ ${this.calcular_total()}`
        }
    }
    class Delivery extends Pedido {

        protected taxa_entrega: number
        private endereco: string

        constructor(
            mesa: number, valor_ingredientes: number, taxa_entrega: number, endereco: string
        ) {
            super(mesa, valor_ingredientes)
            this.taxa_entrega = taxa_entrega
            this.endereco = endereco
        }

        calcular_total(): number {
            return this.ValorIngredientes + this.taxa_entrega
        }

        resumo(): string {
            return `Delivery
            \n Endereço: ${this.endereco}
            \n Valor: R$ ${this.calcular_total()}`
        }
    }

    let listaPedidos: Pedido[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Pedido da mesa
        \n 2- Pedido delivery
        \n-1- Fechar caixa`))
        switch (quest) {
            case 1:
                let mesa = Number(prompt("Digite o número da mesa: "))
                let valorMesa = Number(prompt("Digite o valor dos ingredientes: "))

                listaPedidos.push(
                    new PedidoMesa(mesa, valorMesa)
                )
                break

            case 2:
                let mesaDelivery = Number(prompt("Digite o número da mesa (0 para delivery): "))
                let valorDelivery = Number(prompt("Digite o valor dos ingredientes: "))
                let taxa = Number(prompt("Digite a taxa de entrega: "))
                let endereco = String(prompt("Digite o endereço: "))

                listaPedidos.push(
                    new Delivery(mesaDelivery, valorDelivery, taxa, endereco)
                )
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let faturamento = 0
    for (let pedido of listaPedidos) {
        console.log(pedido.resumo())
        faturamento += pedido.calcular_total()
    }
    console.log(`Faturamento total: R$ ${faturamento}`)
}