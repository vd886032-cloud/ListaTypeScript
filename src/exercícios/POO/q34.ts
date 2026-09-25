// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function q34poo(): void {
    abstract class Veiculo {
        private placa: string
        private hora_entrada: number
        constructor(placa: string, hora_entrada: number) {
            this.placa = placa
            this.hora_entrada = hora_entrada
        }

        get Placa(): string {
            return this.placa
        }

        get HoraEntrada(): number {
            return this.hora_entrada
        }

        abstract calcularValor(horasPermanencia: number): number
    }

    class Carro extends Veiculo {
        calcularValor(horasPermanencia: number): number {
            return horasPermanencia * 5
        }
    }

    class Moto extends Veiculo {
        calcularValor(horasPermanencia: number): number {
            return horasPermanencia * 3
        }
    }
    class Saida {
        veiculo: Veiculo
        horas: number

        constructor(veiculo: Veiculo, horas: number) {
            this.veiculo = veiculo
            this.horas = horas
        }
    }
    let listaVeiculos: Saida[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Registrar saída de Carro
        \n 2- Registrar saída de Moto
        \n -1- Encerrar expediente`))

        switch (quest) {
            case 1:
                let placaC = String(prompt("Digite a placa do carro: "))
                let entradaC = Number(prompt("Digite a hora de entrada: "))
                let horasC = Number(prompt("Digite as horas de permanência: "))

                listaVeiculos.push(
                    new Saida(
                        new Carro(placaC, entradaC),
                        horasC
                    )
                )
                break

            case 2:
                let placaM = String(prompt("Digite a placa do carro: "))
                let entradaM = Number(prompt("Digite a hora de entrada: "))
                let horasM = Number(prompt("Digite as horas de permanência: "))

                listaVeiculos.push(
                    new Saida(
                        new Moto(placaM, entradaM),
                        horasM
                    )
                )
                break

            case -1:
                console.log("programa encerrado.")
                break

            default:
                console.log("Opção inválida.")
        }
    }
    let faturamento = 0
    console.log("Relatório do dia:  ")
    for (let saida of listaVeiculos) {
        let valor = saida.veiculo.calcularValor(saida.horas)

        console.log(`Placa: ${saida.veiculo.Placa}
            \n Horas: ${saida.horas}
            \n Valor: R$ ${valor}`)
        
        faturamento += valor
    }
    console.log(`Faturamento total: R$ ${faturamento}`)
}