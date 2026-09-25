// 33. Crie um sistema de gestão de empréstimos para a biblioteca do campus. A superclasse abstrata Obra
// possui os atributos privados título e autor, e declara o método abstrato registrarAtraso(diasDeAtraso)
// que deve ser sobrescrito pelas subclasses. LivroFisico calcula uma multa de R$ 2,50 por dia, enquanto
// ArtigoDigital não gera multa, mas registra uma string de advertência ao usuário. O bibliotecário
// informa continuamente o título e os dias de atraso de cada devolução. O sistema chama
// registrarAtraso() polimorficamente para cada objeto e, ao encerrar, exibe o valor total de multas a ser
// recolhido pela biblioteca.
// Requisitos mínimos:
// • Superclasse abstrata Obra com método abstrato registrarAtraso(dias).
// • LivroFisico retorna valor de multa; ArtigoDigital retorna mensagem de advertência.
// • Atributos titulo e autor privados, acessíveis apenas por getters.
// • Polimorfismo: percorrer lista com tipo Obra e chamar registrarAtraso().
// • Acumular e exibir total de multas ao final.


export function q33poo(): void {

    abstract class Obra {
        private titulo: string
        private autor: string

        constructor(titulo: string, autor: string) {
            this.titulo = titulo
            this.autor = autor
        }

        get Titulo(): string {
            return this.titulo
        }

        get Autor(): string {
            return this.autor
        }

        abstract registrarAtraso(diasDeAtraso: number): number | string
    }

    class LivroFisico extends Obra {
        registrarAtraso(diasDeAtraso: number): number {
            return diasDeAtraso * 2.5
        }
    }

    class ArtigoDigital extends Obra {
        registrarAtraso(diasDeAtraso: number): string {
            return `Advertência virtual de ${diasDeAtraso} de atraso registrada.`
        }
    }

    class Emprestimo {
        obra: Obra
        dias: number

        constructor(obra: Obra, dias: number) {
            this.obra = obra
            this.dias = dias
        }
    }
    let listaEmprestimos: Emprestimo[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Devolução de Livro Físico
        \n 2- Devolução de Artigo Digital
        -1- Encerrar`))

        switch (quest) {
            case 1:
                let tituloL = String(prompt("Digite o título: "))
                let autorL = String(prompt("Digite o autor: "))
                let atrasoL = Number(prompt("Digite os dias de atraso: "))

                listaEmprestimos.push(
                    new Emprestimo(
                        new LivroFisico(tituloL, autorL),
                        atrasoL
                    )
                )
                break

            case 2:
                let tituloA = String(prompt("Digite o título do livro: "))
                let autorA = String(prompt("Digite o autor: "))
                let atrasoA = Number(prompt("Digite os dias de atraso: "))

                listaEmprestimos.push(
                    new Emprestimo(
                        new ArtigoDigital(tituloA, autorA),
                        atrasoA
                    )
                )
                break

            case -1:
                console.log("Sistema encerrado.")
                break

            default:
                console.log("Opção inválida.")
        }
    }

    let totalMultas = 0

    console.log(`Lista de devoluções: `)
    for (let emprestimo of listaEmprestimos) {

        console.log(`Título: ${emprestimo.obra.Titulo}`)
        console.log(`Autor: ${emprestimo.obra.Autor}`)

        let resultado = emprestimo.obra.registrarAtraso(emprestimo.dias)
        if (typeof resultado == "number") {
            console.log(`Multa: R$ ${resultado}`)
            totalMultas += resultado
        } else {
            console.log(resultado)
        }
    }
    console.log(`Total de multas: R$ ${totalMultas}`)
}