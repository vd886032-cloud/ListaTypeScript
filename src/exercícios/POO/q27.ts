// 27. Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de
// tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória
// RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O
// usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no
// laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao
// término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada
// objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.

export function q27poo(): void {
    abstract class Equipamento {
        private tombamento: number
        private descricao: string

        constructor(tombamento: number, descricao: string) {
            this.tombamento = tombamento
            this.descricao = descricao
        }

        get Tombamento(): number {
            return this.tombamento
        }

        get Descricao(): string {
            return this.descricao
        }

        abstract auto_inspecao(): string
    }
    class Computador extends Equipamento {
        private memoria_ram: number

        constructor(tombamento: number, descricao: string, memoria_ram: number) {
            super(tombamento, descricao)
            this.memoria_ram = memoria_ram
        }

        auto_inspecao(): string {
            return `COMPUTADOR
            \n Tombamento: ${this.Tombamento}
            \n Descrição: ${this.Descricao}
            \n Memória RAM: ${this.memoria_ram} GB`
        }
    }
    class Roteador extends Equipamento {
        private portas: number
        constructor(tombamento: number, descricao: string, portas: number) {
            super(tombamento, descricao)
            this.portas = portas
        }
        auto_inspecao(): string {
            return `ROTEADOR
            \n Tombamento: ${this.Tombamento}
            \n Descrição: ${this.Descricao}
            \n Portas: ${this.portas}`
        }
    }
    let listaEquip: Equipamento[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Computador
        \n 2- Cadastrar Roteador
        \n -1- Finalizar cadastro`))
        switch (quest) {
            case 1:
                let tombComp = Number(prompt("Digite o número de tombamento: "))
                let descComp = String(prompt("Digite a descrição: "))
                let ram = Number(prompt("Digite a memória RAM (GB): "))

                if (tombComp > 0 && descComp != "" && ram > 0) {
                    listaEquip.push(
                        new Computador(tombComp, descComp, ram)
                    )
                } else {
                    console.log("Dados inválidos.")
                }

                break
            case 2:
                let tombRot = Number(prompt("Digite o número de tombamento: "))
                let descRot = String(prompt("Digite a descrição: "))
                let portas = Number(prompt("Digite a quantidade de portas: "))

                if (tombRot > 0 && descRot != "" && portas > 0) {
                    listaEquip.push(
                        new Roteador(tombRot, descRot, portas)
                    )
                } else {
                    console.log("Dados inválidos.")
                }

                break

            case -1:

                console.log("Cadastro encerrado.")
                break

            default:

                console.log("Opção inválida.")
        }
    }
    console.log(`Ficha Técnica: `)

    for (let equip of listaEquip) {
        console.log(equip.auto_inspecao())
    }
}