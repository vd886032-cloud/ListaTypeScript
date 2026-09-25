// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser
// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.

export function q38poo(): void {
    abstract class Cliente {
        private nome: string
        private email: string
        private cashback: number

        constructor(nome: string, email: string) {
            this.nome = nome
            this.email = email
            this.cashback = 0
        }

        get Nome(): string {
            return this.nome
        }

        get Email(): string {
            return this.email
        }

        get Cashback(): number {
            return this.cashback
        }

        protected adicionarCashback(valor: number): void {
            this.cashback += valor
        }

        abstract processarCompra(valor: number): void
    }
    class ClientePadrao extends Cliente {
        processarCompra(valor: number): void {
            this.adicionarCashback(valor * 0.01)
        }
    }

    class ClienteVIP extends Cliente {
        processarCompra(valor: number): void {
            this.adicionarCashback(valor * 0.05)
        }
    }
    let listaClientes: Cliente[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Registrar compra de Cliente Padrão
        \n 2- Registrar compra de Cliente VIP
        \n -1- Encerrar`))

        switch (quest) {
            case 1:
                let nomeP = String(prompt("Digite o nome: "))
                let emailP = String(prompt("Digite o e-mail: "))
                let valorP = Number(prompt("Digite o valor da compra: "))
                let clienteP = new ClientePadrao(nomeP, emailP)
                clienteP.processarCompra(valorP)
                listaClientes.push(clienteP)
                break
            case 2:
                let nomeV = String(prompt("Digite o nome: "))
                let emailV = String(prompt("Digite o e-mail: "))
                let valorV = Number(prompt("Digite o valor da compra: "))
                let clienteV = new ClienteVIP(nomeV, emailV)
                clienteV.processarCompra(valorV)
                listaClientes.push(clienteV)
                break
            case -1:
                console.log("Sistema encerrado.")
                break

            default:
                console.log("Opção inválida.")
        }
    }

    let totalCashback = 0

    for (let cliente of listaClientes) {
        console.log(`Nome: ${cliente.Nome}
        \n E-mail: ${cliente.Email}`)
        if (cliente instanceof ClienteVIP) {
            console.log(`Tipo: Cliente VIP
            \n Frete grátis: Sim`)
        } else {
            console.log("Tipo: Cliente Padrão")
        }
        console.log(`Cashback: R$ ${cliente.Cashback}`)
        totalCashback += cliente.Cashback
    }
    console.log(`Total de cashback concedido: R$ ${totalCashback}`)
}