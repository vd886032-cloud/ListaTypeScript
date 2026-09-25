export function q17poo(): void {

    abstract class Usuario {

        private id: number
        private nome: string

        constructor(id: number, nome: string) {
            this.id = id
            this.nome = nome
        }

        get Id(): number {
            return this.id
        }

        get Nome(): string {
            return this.nome
        }

        abstract identificar(): string
    }

    class Aluno extends Usuario {

        curso: string

        constructor(id: number, nome: string, curso: string) {
            super(id, nome)
            this.curso = curso
        }

        identificar(): string {
            return `Aluno: ${this.Nome}
            \n Curso: ${this.curso}`
        }
    }

    class Servidor extends Usuario {

        departamento: string

        constructor(id: number, nome: string, departamento: string) {
            super(id, nome)
            this.departamento = departamento
        }

        identificar(): string {
            return `Servidor: ${this.Nome}
            \n Departamento: ${this.departamento}`
        }
    }

    let fila: Usuario[] = []
    let historico: Usuario[] = []

    let quest = 0

    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:
    \n 1- Cadastrar aluno
    \n 2- Cadastrar servidor
    \n 3- Registrar passagem na catraca
    \n -1- Encerrar`))

        switch (quest) {
            case 1:
                let idAluno = Number(prompt("Digite o ID do aluno: "))
                let nomeAluno = String(prompt("Digite o nome do aluno: "))
                let cursoAluno = String(prompt("Digite seu curso: "))
                fila.push(new Aluno(idAluno, nomeAluno, cursoAluno))
                break
            case 2:
                let idServidor = Number(prompt("Digite o ID do servidor: "))
                let nomeServidor = String(prompt("Digite o nome do servidor: "))
                let depServidor = String(prompt("Digite o departamento: "))

                fila.push(new Servidor(idServidor, nomeServidor, depServidor))
                break

            case 3:
                let idBusca = Number(prompt("Digite o ID do usuário: "))
                let encontrado = false

                for (let usuario of fila) {
                    if (usuario.Id == idBusca) {
                        historico.push(usuario)
                        fila.splice(fila.indexOf(usuario), 1)

                        console.log(`${usuario.Nome} entrou no refeitório.`)
                        encontrado = true
                        break
                    }
                }

                if (!encontrado) {
                    console.log("Usuário não encontrado.")
                }
                break

            case -1:
                console.log("Sistema encerrado.")
                break

            default:

                console.log("Opção inválida.")
        }
    }

    let totalAlunos = 0
    let totalServidores = 0

    for (let usuario of historico) {
        console.log(usuario.identificar())
        if (usuario instanceof Aluno) {
            totalAlunos++
        }
        if (usuario instanceof Servidor) {
            totalServidores++
        }
        
    }
    console.log(`Total de alunos: ${totalAlunos}`)
    console.log(`Total de servidores: ${totalServidores}`)
}