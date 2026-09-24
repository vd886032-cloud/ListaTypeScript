// 25. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-
// mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A
// Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o

// atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os
// dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do
// usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço
// correto do plano escolhido por meio de polimorfismo.

export function q25poo(): void {
    abstract class Assinatura {

        private email: string
        private valor_plano: number

        constructor(email: string, valor_plano: number) {
            this.email = email
            this.valor_plano = valor_plano
        }

        get Email(): string {
            return this.email
        }

        get ValorPlano(): number {
            return this.valor_plano
        }
        abstract detalhes(): string
    }
    class PlanoPadrao extends Assinatura {
        private telas: number

        constructor(email: string, valor_plano: number) {
            super(email, valor_plano)
            this.telas = 2
        }

        detalhes(): string {
            return `Plano: Padrão
            \n E-mail: ${this.Email}
            \n Telas simultâneas: ${this.telas}
            \n Valor mensal: R$ ${this.ValorPlano}`
        }
    }
    class PlanoPremium extends Assinatura {
        private telas: number
        private resolucao: string

        constructor(email: string, valor_plano: number) {
            super(email, valor_plano)
            this.telas = 4
            this.resolucao = "4K"
        }
        detalhes(): string {
            return `Plano: Premium
            \n E-mail: ${this.Email}
            \n Telas simultâneas: ${this.telas}
            \n Resolução: ${this.resolucao}
            \n Valor mensal: R$ ${this.ValorPlano}`
        }
    }
    let listaContratos: Assinatura[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Plano Padrão
        \n 2- Cadastrar Plano Premium
        \n 3- Buscar contrato por e-mail
        \n -1- Encerrar`))

        switch (quest) {
            case 1:
                let emailP = String(prompt("Digite o e-mail: "))
                let valorP = Number(prompt("Digite o valor do plano: "))

                listaContratos.push(
                    new PlanoPadrao(emailP, valorP)
                )
                break

            case 2:
                let emailPr = String(prompt("Digite o e-mail: "))
                let valorPr = Number(prompt("Digite o valor do plano: "))
                listaContratos.push(
                    new PlanoPremium(emailPr, valorPr)
                )
                break

            case 3:
                let busca = String(prompt("Digite o e-mail do cliente: "))
                let encontrado = false
                for (let contrato of listaContratos) {
                    if (contrato.Email == busca) {
                        console.log(contrato.detalhes())
                        encontrado = true
                        break
                    }
                }
                if (!encontrado) {
                    console.log("Contrato não encontrado.")
                }
                break
            case -1:
                console.log("Sistema encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
}