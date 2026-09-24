// 24. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica
// possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da
// disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir
// um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array
// unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar
// apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos
// contidos na lista.
export function q24poo(): void {

    abstract class Tarefa {
        private descricao: string
        private concluida: boolean
        constructor(descricao: string) {
            this.descricao = descricao
            this.concluida = false
        }

        get Descricao(): string {
            return this.descricao
        }

        get Concluida(): boolean {
            return this.concluida
        }

        concluir(): void {
            this.concluida = true
        }
        abstract identificar(): string
    }

    class TarefaAcademica extends Tarefa {
        disciplina: string

        constructor(descricao: string, disciplina: string) {
            super(descricao)
            this.disciplina = disciplina
        }
        identificar(): string {
            return `Disciplina: ${this.disciplina}
            \n Tarefa: ${this.Descricao}
            \n Status: ${this.Concluida ? "Concluída" : "Pendente"}`
        }
    }
    class TarefaPessoal extends Tarefa {
        prioridade: string

        constructor(descricao: string, prioridade: string) {
            super(descricao)
            this.prioridade = prioridade
        }
        identificar(): string {
            return `Prioridade: ${this.prioridade}
            \n Tarefa: ${this.Descricao}
            \n Status: ${this.Concluida ? "Concluída" : "Pendente"}`
        }
    }
    let listaTarefas: Tarefa[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar tarefa acadêmica
        \n 2- Cadastrar tarefa pessoal
        \n 3- Marcar tarefa como concluída
        \n 4- Listar tarefas acadêmicas pendentes
        \n -1- Sair`))

        switch (quest) {
            case 1:
                let descA = String(prompt("Digite a descrição: "))
                let disc = String(prompt("Digite a disciplina: "))
                listaTarefas.push(
                    new TarefaAcademica(descA, disc)
                )
                break
            case 2:
                let descP = String(prompt("Digite a descrição: "))
                let prior = String(prompt("Digite a prioridade: "))
                listaTarefas.push(
                    new TarefaPessoal(descP, prior)
                )
                break
            case 3:
                let busca = String(prompt("Digite a descrição da tarefa: "))
                let encontrada = false
                for (let tarefa of listaTarefas) {

                    if (tarefa.Descricao == busca) {
                        tarefa.concluir()
                        encontrada = true
                        console.log("Tarefa concluída!")
                        break
                    }
                }
                if (!encontrada) {
                    console.log("Tarefa não encontrada.")
                }
                break
            case 4:
                for (let tarefa of listaTarefas) {
                    console.log(`Tarefas pendentes: `)
                    if (tarefa instanceof TarefaAcademica && !tarefa.Concluida) {
                        console.log(tarefa.identificar())
                        console.log("----------------------")
                    }
                }
                break
            case -1:
                console.log("Programa encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
}