// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online

// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function q36poo(): void {
    abstract class Curso {
        private titulo: string
        private carga_horaria: number

        constructor(titulo: string, carga_horaria: number) {
            this.titulo = titulo
            this.carga_horaria = carga_horaria
        }

        get Titulo(): string {
            return this.titulo
        }

        get CargaHoraria(): number {
            return this.carga_horaria
        }

        abstract emitirCertificado(): string
    }

    class CursoLivre extends Curso {

        emitirCertificado(): string {
            return `Certificado liberado!
            \n Curso: ${this.Titulo}
            \n Carga horária: ${this.CargaHoraria} horas`
        }
    }

    class CursoTecnico extends Curso {
        private projeto_final: number
        private nota_projeto: number

        constructor(titulo: string, carga_horaria: number, projeto_final: number, nota_projeto: number) {
            super(titulo, carga_horaria)
            this.projeto_final = projeto_final
            this.nota_projeto = nota_projeto
        }

        emitirCertificado(): string {

            if (this.nota_projeto >= 7) {
                return `Certificado liberado!
                \n Curso: ${this.Titulo}
                \n Projeto Final: ${this.projeto_final}
                \n Nota: ${this.nota_projeto}`
            }

            return `Certificado pendente.
            \n Curso: ${this.Titulo}
            \n Projeto Final: ${this.projeto_final}
            \n Nota: ${this.nota_projeto}`
        }
    }

    let listaCursos: Curso[] = []
    let quest = 0

    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Curso Livre
        \n 2- Cadastrar Curso Técnico
        \n -1- Finalizar`))

        switch (quest) {
            case 1:
                let tituloL = String(prompt("Digite o título do curso: "))
                let cargaL = Number(prompt("Digite a carga horária: "))
                listaCursos.push(
                    new CursoLivre(tituloL, cargaL)
                )
                break

            case 2:
                let tituloT = String(prompt("Digite o título do curso: "))
                let cargaT = Number(prompt("Digite a carga horária: "))
                let projeto = Number(prompt("Digite o número do projeto final: "))
                let nota = Number(prompt("Digite a nota do projeto: "))

                listaCursos.push(
                    new CursoTecnico(tituloT, cargaT, projeto, nota)
                )
                break
            case -1:
                console.log("Cadastro encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }

    console.log("Certificados lançados: ")
    for (let curso of listaCursos) {
        console.log(curso.emitirCertificado())
    }
}