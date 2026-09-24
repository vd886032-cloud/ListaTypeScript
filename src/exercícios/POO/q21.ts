// 21. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest

// O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para novas propostas de reflorestamento no
// campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma
// estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10).
// Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em
// conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O
// programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida,
// listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.

export function q21poo(): void {

    abstract class Projeto {
        private titulo: string
        private coordenador: string
        private nota: number

        constructor(titulo: string, coordenador: string, nota: number) {
            this.titulo = titulo
            this.coordenador = coordenador
            this.nota = 0
            this.Nota = nota
        }

        get Titulo(): string {
            return this.titulo
        }

        get Coordenador(): string {
            return this.coordenador
        }

        get Nota(): number {
            return this.nota
        }

        set Nota(valor: number) {
            if (valor >= 0 && valor <= 10) {
                this.nota = valor
            }
        }
        abstract identificar(): string
    }
    class ProjetoVerde extends Projeto {
        identificar(): string {
            return `Projeto Verde
            \n Título: ${this.Titulo}
            \n Coordenador: ${this.Coordenador}
            \n Nota: ${this.Nota}`
        }
    }
    class ProjetoCultural extends Projeto {
        identificar(): string {
            return `Projeto Cultural
            \n Título: ${this.Titulo}
            \n Coordenador: ${this.Coordenador}
            \n Nota: ${this.Nota}`
        }
    }

    let listaProjetos: Projeto[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Projeto Verde
        \n 2- Cadastrar Projeto Cultural
        \n -1- Finalizar inscrições`))
        switch (quest) {
            case 1:
                let tituloV = String(prompt("Digite o título: "))
                let coordV = String(prompt("Digite o coordenador: "))
                let notaV = Number(prompt("Digite a nota (0 a 10): "))
                listaProjetos.push(
                    new ProjetoVerde(tituloV, coordV, notaV)
                )
                break
            case 2:
                let tituloC = String(prompt("Digite o título: "))
                let coordC = String(prompt("Digite o coordenador: "))
                let notaC = Number(prompt("Digite a nota (0 a 10): "))

                listaProjetos.push(
                    new ProjetoCultural(tituloC, coordC, notaC)
                )
                break
            case -1:
                console.log("Inscrições encerradas.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let soma = 0
    for (let projeto of listaProjetos) {
        soma += projeto.Nota
    }
    let media = soma / listaProjetos.length
    console.log(`Média da competição: ${media}`)
    for (let i = listaProjetos.length - 1; i >= 0; i--) {
        if (listaProjetos[i].Nota > media) {
            console.log("Projetos acima da média:")
            console.log(listaProjetos[i].identificar())
        }
    }
}