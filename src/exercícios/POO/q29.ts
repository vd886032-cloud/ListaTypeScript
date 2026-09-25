// 29. Catálogo de Biblioteca com Penalidades de Atraso
// Escreva um programa para gerenciar os empréstimos da biblioteca do campus. Cada obra possui título
// e autor. As obras dividem-se em Livros Físicos e Artigos Científicos Digitais. Os Livros Físicos
// possuem um método para calcular a multa por atraso (R$ 2,50 por dia de atraso), enquanto os Artigos
// Digitais não geram multa física, mas registram uma advertência virtual ao usuário. O programa deve
// solicitar continuamente que o bibliotecário informe o título da obra emprestada e a quantidade de dias
// de atraso na devolução. Todos os registros devem ser salvos em uma lista e, ao encerrar, o sistema
// exibe o valor total de multas que a biblioteca deve recolher.

export function q29poo(): void {
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

        abstract calcular_multa(dias: number): number
        abstract identificar(dias: number): string
    }

    class LivroFisico extends Obra {
        calcular_multa(dias: number): number {
            return dias * 2.5
        }

        identificar(dias: number): string {
            return `Livro Físico
            \n Título: ${this.Titulo}
            \n Autor: ${this.Autor}
            \n Dias de atraso: ${dias}
            \n Multa: R$ ${this.calcular_multa(dias)}`
        }
    }

    class ArtigoDigital extends Obra {

        calcular_multa(dias: number): number {
            return 0
        }

        identificar(dias: number): string {
            return `Artigo Científico Digital
            \n Título: ${this.Titulo}
            \n Autor: ${this.Autor}
            \n Dias de atraso: ${dias}
            \n Advertência virtual registrada.`
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
        \n 1- Empréstimo de Livro Físico
        \n 2- Empréstimo de Artigo Digital
        \n -1- Encerrar`))

        switch (quest) {
            case 1:
                let tituloL = String(prompt("Digite o título do livro: "))
                let autorL = String(prompt("Digite o autor: "))
                let atrasoL = Number(prompt("Digite os dias de atraso: "))
                let livro = new LivroFisico(tituloL, autorL)

                listaEmprestimos.push(
                    new Emprestimo(livro, atrasoL)
                )
                break
            case 2:
                let tituloA = String(prompt("Digite o título do livro: "))
                let autorA = String(prompt("Digite o autor: "))
                let atrasoA = Number(prompt("Digite os dias de atraso: "))
                let artigo = new ArtigoDigital(tituloA, autorA)

                listaEmprestimos.push(
                    new Emprestimo(artigo, atrasoA)
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

    console.log("RELATÓRIO DE DEVOLUÇÕES")
    for (let emprestimo of listaEmprestimos) {
        console.log(emprestimo.obra.identificar(emprestimo.dias))
        totalMultas += emprestimo.obra.calcular_multa(emprestimo.dias)
    }
    console.log(`Valor total de multas: R$ ${totalMultas}`)
}