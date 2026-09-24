// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.


export function q26poo(): void {
    abstract class Conta {
        private titular: string
        private saldo: number
        constructor(titular: string, saldo: number) {
            this.titular = titular
            this.saldo = saldo
        }

        get Titular(): string {
            return this.titular
        }

        get Saldo(): number {
            return this.saldo
        }

        protected alterarSaldo(valor: number): void {
            this.saldo = valor
        }

        depositar(valor: number): void {
            this.alterarSaldo(this.Saldo + valor)
        }

        abstract sacar(valor: number): void
    }

    class ContaCorrente extends Conta {
        sacar(valor: number): void {
            let total = valor + 2
            if (this.Saldo >= total) {
                this.alterarSaldo(this.Saldo - total)
            } else {
                console.log("Saldo insuficiente.")
            }
        }
    }

    class ContaPoupanca extends Conta {
        sacar(valor: number): void {
            if (this.Saldo >= valor) {
                this.alterarSaldo(this.Saldo - valor)
            } else {
                console.log("Saldo insuficiente.")
            }
        }

        rendimento(): void {
            this.alterarSaldo(this.Saldo + (this.Saldo * 1 / 100))
        }
    }
    let tipo = Number(prompt(`Escolha o tipo de conta:
    \n 1- Conta Corrente
    \n 2- Conta Poupança`))
    let nome = String(prompt("Digite o nome do titular: "))
    let saldo = Number(prompt("Digite o saldo inicial: "))
    let conta: Conta

    if (tipo == 1) {
        conta = new ContaCorrente(nome, saldo)
    } else {
        conta = new ContaPoupanca(nome, saldo)
    }
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Depositar
        \n 2- Sacar
        \n 3- Aplicar rendimento
        \n 4- Mostrar saldo
        \n -1- Sair`))

        switch (quest) {

            case 1:
                let deposito = Number(prompt("Digite o valor do depósito: "))
                conta.depositar(deposito)
                console.log(`Saldo atual: R$ ${conta.Saldo}`)
                break
            case 2:
                let saque = Number(prompt("Digite o valor do saque: "))
                conta.sacar(saque)
                console.log(`Saldo atual: R$ ${conta.Saldo}`)
                break

            case 3:
                if (conta instanceof ContaPoupanca) {
                    conta.rendimento()
                    console.log(`Rendimento aplicado!`)
                } else {
                    console.log("Apenas conta poupança possui rendimento.")
                }

                console.log(`Saldo atual: R$ ${conta.Saldo}`)
                break

            case 4:
                console.log(`Titular: ${conta.Titular}`)
                console.log(`Saldo: R$ ${conta.Saldo}`)
                break
            case -1:
                console.log("Sistema encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
}