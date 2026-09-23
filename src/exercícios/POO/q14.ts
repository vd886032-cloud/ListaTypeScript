// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

// 14. Arrays Repetição Encapsulamento

export function q14poo(): void {

    class Livro {

        private titulo: string
        private autor: string
        private ano_publi: number
        private disponibilidade: boolean

        constructor(titulo: string, autor: string, ano_publi: number) {
            this.titulo = titulo
            this.autor = autor
            this.ano_publi = ano_publi
            this.disponibilidade = true
        }

        get Titulo(): string {
            return this.titulo
        }

        get Disponivel(): boolean {
            return this.disponibilidade
        }

        emprestar(): void {
            this.disponibilidade = false
        }

        resumo(): string {
            return `Título: ${this.titulo}
            Autor: ${this.autor}
            Ano: ${this.ano_publi}
            Disponível: ${this.disponibilidade ? "Sim" : "Não"}`
        }
    }
    let lista: Livro[] = []
    for (let i = 0; i < 15; i++) {
        let titulo_livro = String(prompt("Digite o título do livro: "))
        let autor_livro = String(prompt("Digite o autor do livro: "))
        let ano_publi = Number(prompt("Digite o ano de publicação: "))

        let novoLivro = new Livro(titulo_livro, autor_livro, ano_publi)
        lista.push(novoLivro)

        let continuar = Number(prompt("Cadastrar outro livro? (1 = Sim / 0 = Não)"))

        if (continuar == 0) {
            break
        }
    }

    let quest = 0

    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:

        1 - Listar livros disponíveis
        2 - Emprestar livro
        -1 - Sair`))
        switch (quest) {
            case 1:
                for (let livro of lista) {
                    if (livro.Disponivel) {
                        console.log(livro.resumo())
                    }
                }
                break
            case 2:
                let livro_desejado = String(prompt("Digite o título do livro: "))
                let encontrado = false
                for (let livro of lista) {
                    if (livro.Titulo === livro_desejado) {
                        encontrado = true

                        if (livro.Disponivel) {
                            livro.emprestar()
                            console.log("Empréstimo realizado!")
                        } else {
                            console.log("Livro indisponível.")
                        }

                        break
                    }
                }

                if (!encontrado) {
                    console.log("Livro não encontrado.")
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