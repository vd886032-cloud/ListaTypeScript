// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function q19poo(): void {

    abstract class Sensor {
        private codigo: number
        private leitura: number

        constructor(codigo: number, leitura: number) {
            this.codigo = codigo
            this.leitura = leitura
        }

        get Codigo(): number {
            return this.codigo
        }

        get Leitura(): number {
            return this.leitura
        }

        abstract exibir(): string
        abstract alerta(): boolean
    }
    class SensorTemperatura extends Sensor {
        exibir(): string {
            return `Código: ${this.Codigo}
            \n Leitura: ${this.Leitura} °C`
        }

        alerta(): boolean {
            return this.Leitura > 40
        }
    }

    class SensorPressao extends Sensor {

        exibir(): string {
            return `Código: ${this.Codigo}
            \n Leitura: ${this.Leitura} atm`
        }

        alerta(): boolean {
            return this.Leitura > 5
        }
    }

    let listaSensores: Sensor[] = []
    let quest = 0

    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:
            \n 1- Cadastrar Sensor de Temperatura
            \n 2- Cadastrar Sensor de Pressão
            \n -1- Finalizar`))
        switch (quest) {

            case 1:

                let codTemp = Number(prompt("Digite o código do sensor: "))
                let leituraTemp = Number(prompt("Digite a temperatura: "))

                listaSensores.push(
                    new SensorTemperatura(codTemp, leituraTemp)
                )

                break

            case 2:

                let codPres = Number(prompt("Digite o código do sensor: "))
                let leituraPres = Number(prompt("Digite a pressão: "))

                listaSensores.push(
                    new SensorPressao(codPres, leituraPres)
                )

                break

            case -1:

                console.log("Encerrando cadastro...")
                break

            default:

                console.log("Opção inválida.")
        }
    }

    for (let sensor of listaSensores) {
        if (sensor.alerta()) {
            console.log(sensor.exibir())
            console.log("ALERTA DE PERIGO")
            console.log("----------------------")
        }
    }
}