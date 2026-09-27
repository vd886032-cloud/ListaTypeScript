// 48. Repetição Encapsulamento Arrays
// Sistema de Monitoramento e Ajuste de Ar-Condicionado de Laboratórios
// Para garantir o clima ideal nos laboratórios de informática do campus, crie um sistema de controle
// centralizado. Crie a classe ArCondicionado com os atributos privados sala, potenciaBTUs e
// temperaturaAtual. O setter de temperaturaAtual deve validar estritamente o intervalo permitido
// de operação (somente aceitar valores entre 16°C e 30°C, emitindo um aviso de erro para tentativas
// fora desta faixa). Crie o método exibirStatus() para mostrar os dados do aparelho. O programa
// deve interagir com o usuário em um laço de repetição solicitando o cadastro de vários aparelhos até
// que o operador decida parar. Em seguida, o sistema abre um menu permitindo que o técnico informe o
// nome da sala para buscar o aparelho no array e ajustar a temperatura do ambiente. Ao final, o
// programa percorre a lista e exibe o relatório final da temperatura de todos os laboratórios.

export function q48poo(): void {

    class ArCondicionado {
        private sala: string
        private potenciaBTUs: number
        private temperaturaAtual: number

        constructor(sala: string, potenciaBTUs: number, temperaturaAtual: number) {
            this.sala = sala
            this.potenciaBTUs = potenciaBTUs
            this.temperaturaAtual = 24
            this.TemperaturaAtual = temperaturaAtual
        }

        get Sala(): string {
            return this.sala
        }

        get PotenciaBTUs(): number {
            return this.potenciaBTUs
        }

        get TemperaturaAtual(): number {
            return this.temperaturaAtual
        }

        set TemperaturaAtual(valor: number) {
            if (valor >= 16 && valor <= 30) {
                this.temperaturaAtual = valor
            }

            else {
                console.log("não é permitido colocar essa temperatura")
            }
        }
        exibirStatus(): void {

            console.log(`Sala: ${this.Sala}
            \n Potência: ${this.PotenciaBTUs} BTUs
            \n Temperatura: ${this.TemperaturaAtual}°C`)
           
        }
    }
    let listaAr: ArCondicionado[] = []
    let quest = 1
    while (quest != 0) {
        let sala = String(prompt("Digite o nome da sala: "))
        let btus = Number(prompt("Digite a potência em BTUs: "))
        let temp = Number(prompt("Digite a temperatura atual: "))

        listaAr.push(
            new ArCondicionado(sala, btus, temp)
        )
        quest = Number(prompt(`Deseja cadastrar outro aparelho?
        \n 1- Sim
        \n 0- Não`))
    }
    let menu = 0
    while (menu != -1) {
        menu = Number(prompt(`Digite a alternativa desejada:
        \n 1- Ajustar temperatura
        \n -1- Finalizar`))

        switch (menu) {
            case 1:
                let salaBusca = String(prompt("Digite o nome da sala: "))
                let encontrado = false

                for (let ar of listaAr) {
                    if (ar.Sala == salaBusca) {
                        let novaTemp = Number(prompt("Digite a nova temperatura: "))
                        ar.TemperaturaAtual = novaTemp

                        encontrado = true
                        break
                    }
                }
                if (!encontrado) {
                    console.log("Sala não encontrada")
                }
                break
            case -1:
                console.log("Encerrando ajustes")
                break
            default:
                console.log("Opção inválida")
        }
    }
    for (let ar of listaAr) {
        ar.exibirStatus()
    }
}