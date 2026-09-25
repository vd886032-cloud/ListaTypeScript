// 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus
// do IFS Tobias Barreto. Crie a superclasse Projeto com os atributos privados título, coordenador e
// nota. O setter setNota(valor) deve validar estritamente o intervalo de 0 a 10, lançando exceção ou
// mensagem de erro para valores inválidos. As subclasses ProjetoVerde (plantio urbano) e
// ProjetoCultural (conscientização) sobrescrevem o método descricaoCategoria() com textos distintos.
// O usuário preenche os projetos pelo terminal. O programa calcula a média das notas e, ao final, exibe
// os projetos com nota acima da média, mostrando a categoria de cada uma via polimorfismo.

export function q31poo(): void {
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
        abstract descricaoCategoria(): string
    }

    class ProjetoVerde extends Projeto {
        descricaoCategoria(): string {
            return "Projeto Verde - Plantio Urbano"
        }
    }

    class ProjetoCultural extends Projeto {
        descricaoCategoria(): string {
            return "Projeto Cultural - Conscientização"
        }
    }
    let listaProjetos: Projeto[] = []
    let quest = 0
    while (quest != -1) {

    quest = Number(prompt(`Digite a alternativa desejada:
    \n 1- Cadastrar Projeto Verde
    \n 2- Cadastrar Projeto Cultural
    \n -1- Finalizar`))

    switch (quest) {

        case 1:
            let tituloV = String(prompt("Digite o título do projeto: "))
            let coordV = String(prompt("Digite o coordenador: "))
            let notaV = Number(prompt("Digite a nota: "))
            if (notaV >= 0 && notaV <= 10) {
                listaProjetos.push(
                    new ProjetoVerde(tituloV, coordV, notaV)
                )
            } else {
                console.log("Nota inválida.")

            }
            break

        case 2:
            let tituloC = String(prompt("Digite o título do projeto: "))
            let coordC = String(prompt("Digite o coordenador: "))
            let notaC = Number(prompt("Digite a nota: "))

            if (notaC >= 0 && notaC <= 10) {
                listaProjetos.push(
                    new ProjetoCultural(tituloC, coordC, notaC)
                )
            }
            else {

                console.log("Nota inválida.")

            }

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
console.log(`Média das notas: ${media}`)
console.log("PROJETOS ACIMA DA MÉDIA: ")
for (let projeto of listaProjetos) {

    if (projeto.Nota > media) {
       console.log(`Título: ${projeto.Titulo}
       \n Coordenador: ${projeto.Coordenador}
       \n Categoria: ${projeto.descricaoCategoria()}
       \n Nota: ${projeto.Nota}`)
    }
}
}