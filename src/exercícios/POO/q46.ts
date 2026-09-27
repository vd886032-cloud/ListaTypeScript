// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis. Crie a classe Imovel com os atributos
// privados codigo, valorAluguel e diasAtraso. Crie um método público
// calcularValorComMulta(): number que aplica uma multa de 2% sobre o valor do aluguel mais R$
// 5,00 por dia de atraso (caso haja atraso). O sistema deve permitir que o corretor digite os dados do
// imóvel e os dias de atraso do inquilino em um menu repetitivo. Após cada digitação, o programa
// exibe o valor atualizado da cobrança. O laço se encerra quando o usuário informar o código 0.


export function q46poo(): void {
    class Imovel {

        private codigo: number
        private valorAluguel: number
        private diasAtraso: number

        constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
            this.codigo = codigo
            this.valorAluguel = valorAluguel
            this.diasAtraso = diasAtraso
        }

        get Codigo(): number {
            return this.codigo
        }

        calcularValorComMulta(): number {

            if (this.diasAtraso > 0) {
                return this.valorAluguel + (this.valorAluguel * 0.02) + (this.diasAtraso * 5)
            }

            return this.valorAluguel
        }
    }
    let codigo = -1
    while (codigo === 0) {
        codigo = Number(prompt("Digite o código do imóvel (0 para sair): "))

        if (codigo == 0) {
            break
        }
        let valor = Number(prompt("Digite o valor do aluguel: "))
        let atraso = Number(prompt("Digite os dias de atraso: "))

        let imovel = new Imovel(codigo, valor, atraso)
        console.log(`Código: ${imovel.Codigo}
        \n Valor da cobrança: R$ ${imovel.calcularValorComMulta()}`)
      
    }
    console.log("Sistema encerrado")
}