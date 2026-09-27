// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.


export function q42poo(): void {
    class Medicamento {
        private nome: string
        private lote: string
        private preco: number
        private quantidadeEstoque: number

        constructor(nome: string, lote: string, preco: number, quantidadeEstoque: number) {
            this.nome = nome
            this.lote = lote
            this.preco = preco
            this.quantidadeEstoque = 0
            this.QuantidadeEstoque = quantidadeEstoque
        }

        get Nome(): string {
            return this.nome
        }

        get Lote(): string {
            return this.lote
        }

        get Preco(): number {
            return this.preco
        }

        get QuantidadeEstoque(): number {
            return this.quantidadeEstoque
        }
        set QuantidadeEstoque(valor: number) {
            if (valor >= 0) {
                this.quantidadeEstoque = valor
            } else {
                console.log("Quantidade inválida")
            }
        }
    }
    let listaMedicamentos: Medicamento[] = []
    for (let i = 0; i < 10; i++) {
        let nome = String(prompt("Digite o nome do medicamento: "))
        let lote = String(prompt("Digite o lote: "))
        let preco = Number(prompt("Digite o preço: "))
        let quantidade = Number(prompt("Digite a quantidade em estoque: "))

        listaMedicamentos.push(
            new Medicamento(nome, lote, preco, quantidade)
        )

        let quest = Number(prompt(`Deseja cadastrar outro medicamento?
        \n 1- Sim
        \n 0- Não`))
        if (quest == 0) {
            break
        }
    }

    for (let medicamento of listaMedicamentos) {
        if (medicamento.QuantidadeEstoque < 5) {

            console.log(`Nome: ${medicamento.Nome}
            \n Quantidade: ${medicamento.QuantidadeEstoque}`) 
        }
    }
}