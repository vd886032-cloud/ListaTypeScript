// 50. Repetição Encapsulamento Arrays
// Controle de Ponto e Escala de Funcionários da Reitoria
// O setor de gestão de pessoas precisa de um software para registrar as batidas de ponto dos servidores.
// Crie a classe RegistroPonto com os atributos privados matricula, nomeServidor, horaEntrada e
// horaSaida (armazenados como números inteiros de 0 a 23). Crie métodos setters com validação para
// garantir que as horas informadas estejam entre 0 e 23, e que a horaSaida seja obrigatoriamente maior
// que a horaEntrada. Crie também o método calcularHorasTrabalhadas(): number. O programa
// deve rodar dentro de uma estrutura de repetição solicitando que o operador cadastre o ponto de vários
// servidores em um array. Ao encerrar as entradas, o programa varre a lista, invoca o método de cálculo
// de horas trabalhadas de cada objeto e exibe o relatório final com o nome de cada servidor, o total de
// horas cumpridas no dia e o somatório geral de horas trabalhadas por toda a equipe da reitoria.

export function q50poo(): void {
    class RegistroPonto {
        private matricula: number
        private nomeServidor: string
        private horaEntrada: number
        private horaSaida: number

        constructor(matricula: number,  nomeServidor: string, horaEntrada: number, horaSaida: number
        ) {
            this.matricula = matricula
            this.nomeServidor = nomeServidor
            this.horaEntrada = 0
            this.horaSaida = 0
            this.HoraEntrada = horaEntrada
            this.HoraSaida = horaSaida
        }

        get Matricula(): number {
            return this.matricula
        }

        get NomeServidor(): string {
            return this.nomeServidor
        }

        get HoraEntrada(): number {
            return this.horaEntrada
        }

        get HoraSaida(): number {
            return this.horaSaida
        }
        set HoraEntrada(valor: number) {

            if (valor >= 0 && valor <= 23) {
                this.horaEntrada = valor
            }
            else {
                console.log("Hora de entrada inválida")
            }
        }
        set HoraSaida(valor: number) {

            if (valor >= 0 && valor <= 23 && valor > this.horaEntrada) {
                this.horaSaida = valor
            }
            else {
                console.log("Hora de saída inválida.")
            }
        }

        calcularHorasTrabalhadas(): number {
            return this.horaSaida - this.horaEntrada
        }
    }
    let listaServidores: RegistroPonto[] = []
    let quest = 1
    while (quest != 0) {
        let matricula = Number(prompt("Digite a matrícula: "))
        let nome = String(prompt("Digite o nome do servidor: "))
        let entrada = Number(prompt("Digite a hora de entrada: "))
        let saida = Number(prompt("Digite a hora de saída: "))

        listaServidores.push(
            new RegistroPonto(matricula, nome, entrada, saida)
        )

        quest = Number(prompt(`Deseja cadastrar outro servidor?
        \n 1- Sim
        \n 0- Não`))
    }
    let totalHoras = 0
    for (let servidor of listaServidores) {
        let horas = servidor.calcularHorasTrabalhadas()

        console.log(`Servidor: ${servidor.NomeServidor}
        \n Horas trabalhadas: ${horas}`)
        totalHoras += horas
    }
    console.log(`Total geral de horas: ${totalHoras}`)
}