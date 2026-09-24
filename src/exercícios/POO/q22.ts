// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.


export function q22poo(): void {
    abstract class Veiculo {

        private placa: string
        private quilometragem: number

        constructor(placa: string, quilometragem: number) {
            this.placa = placa
            this.quilometragem = quilometragem
        }

        get Placa(): string {
            return this.placa
        }

        get Quilometragem(): number {
            return this.quilometragem
        }

        set Quilometragem(novaKm: number) {
            this.quilometragem = novaKm
        }
        abstract precisa_revisao(): boolean
    }
    class Onibus extends Veiculo {
        precisa_revisao(): boolean {
            return this.Quilometragem >= 10000
        }
    }
    class Ambulancia extends Veiculo {
        precisa_revisao(): boolean {
            return this.Quilometragem >= 5000
        }
    }
    let listaVeiculos: Veiculo[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Ônibus
        \n 2- Cadastrar Ambulância
        \n -1- Finalizar cadastro`))
        switch (quest) {
            case 1:
                let placaO = String(prompt("Digite a placa: "))
                let kmO = Number(prompt("Digite a quilometragem: "))
                listaVeiculos.push(
                    new Onibus(placaO, kmO)
                )
                break
            case 2:
                let placaA = String(prompt("Digite a placa: "))
                let kmA = Number(prompt("Digite a quilometragem: "))
                listaVeiculos.push(
                    new Ambulancia(placaA, kmA)
                )
                break
            case -1:
                console.log("Cadastro encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let placaBusca = String(prompt("Digite a placa do veículo: "))
    let novaKm = Number(prompt("Digite a quilometragem atual: "))
    let encontrado = false

    for (let veiculo of listaVeiculos) {
        if (veiculo.Placa == placaBusca) {
            encontrado = true
            veiculo.Quilometragem = novaKm
            if (veiculo.precisa_revisao()) {
                console.log(`O Veículo ${veiculo.Placa} deve ser retido para manutenção imediata.`)
            } else {
                console.log(`O Veículo ${veiculo.Placa} não precisa de manutenção.`)
            }
            break
        }
    }
    if (!encontrado) {
        console.log("Veículo não encontrado.")
    }
}