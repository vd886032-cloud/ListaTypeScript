// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.

export function q35poo(): void {
    abstract class Paciente {
        private nome: string
        private cartao_sus: number

        constructor(nome: string, cartao_sus: number) {
            this.nome = nome
            this.cartao_sus = cartao_sus
        }

        get Nome(): string {
            return this.nome
        }

        get CartaoSUS(): number {
            return this.cartao_sus
        }

        exibirFicha(): string {
            return `Nome: ${this.Nome}
            \n Cartão SUS: ${this.CartaoSUS}`
        }
    }

    class PacienteComum extends Paciente {
        constructor(nome: string, cartao_sus: number) {
            super(nome, cartao_sus)
        }
    }

    class PacientePrioritario extends Paciente {
        private prioridade: string

        constructor(nome: string, cartao_sus: number, prioridade: string) {
            super(nome, cartao_sus)
            this.prioridade = prioridade
        }

        exibirFicha(): string {
            return `PACIENTE PRIORITÁRIO
            \n Nome: ${this.Nome}
            \n Cartão SUS: ${this.CartaoSUS}
            \n Prioridade: ${this.prioridade}`
        }
    }
    let listaPacientes: Paciente[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Paciente Comum
        \n 2- Cadastrar Paciente Prioritário
        \n -1- Encerrar cadastro`))

        switch (quest) {
            case 1:
                let nomeC = String(prompt("Digite o nome: "))
                let susC = Number(prompt("Digite o Cartão SUS: "))

                listaPacientes.push(
                    new PacienteComum(nomeC, susC)
                )
                break

            case 2:
                let nomeP = String(prompt("Digite o nome do paciente: "))
                let susP = Number(prompt("Digite o Cartão SUS do paciente: "))
                let tipo = String(prompt("Digite a prioridade (Idoso, Gestante...): "))

                listaPacientes.push(
                    new PacientePrioritario(nomeP, susP, tipo)
                )
                break

            case -1:
                console.log("Cadastro encerrado.")
                break

            default:
                console.log("Opção inválida.")
        }
    }

    let totalPrioritarios = 0
    console.log(" Ficha de atendimentos:")
    for (let paciente of listaPacientes) {
        console.log(paciente.exibirFicha())
        if (paciente instanceof PacientePrioritario) {
            totalPrioritarios++
        }
    }
    console.log(`Total de pacientes prioritários: ${totalPrioritarios}`)
}