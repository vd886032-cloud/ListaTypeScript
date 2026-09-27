// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra
// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.


export function q44poo(): void {
    class Chamado {

        private id: number
        private descricaoEquipamento: string
        private laboratorio: string
        private concluido: boolean
        constructor(id: number, descricaoEquipamento: string, laboratorio: string) {
            this.id = id
            this.descricaoEquipamento = descricaoEquipamento
            this.laboratorio = laboratorio
            this.concluido = false
        }

        get Id(): number {
            return this.id
        }

        get Concluido(): boolean {
            return this.concluido
        }

        finalizarChamado(): void {
            this.concluido = true
        }
    }
    let listaChamados: Chamado[] = []
    let quest = 0
    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar chamado
        \n -1- Finalizar cadastro`))

        switch (quest) {
            case 1:
                let id = Number(prompt("Digite o ID do chamado: "))
                let descricao = String(prompt("Digite a descrição do equipamento: "))
                let laboratorio = String(prompt("Digite o laboratório: "))

                listaChamados.push(
                    new Chamado(id, descricao, laboratorio)
                )
                break
            case -1:
                console.log("Cadastro encerrado.")
                break
            default:

                console.log("Opção inválida.")
        }
    }
    let idBusca = 0
    while (idBusca != -1) {
        idBusca = Number(prompt(`Digite o ID do chamado resolvido:
        \n -1- Encerrar atendimento`))

        if (idBusca == -1) {
            break
        }
        let encontrado = false
        for (let chamado of listaChamados) {

            if (chamado.Id == idBusca) {
                chamado.finalizarChamado()
                encontrado = true
                console.log("Chamado finalizado.")
                break
            }
        }
        if (!encontrado) {
            console.log("Chamado não encontrado.")
        }
    }
    let atendidos = 0
    let pendentes = 0
    for (let chamado of listaChamados) {
        if (chamado.Concluido) {
            atendidos++
        } else {
            pendentes++
        }
    }
    console.log(`Chamados atendidos: ${atendidos}`)
    console.log(`Chamados pendentes: ${pendentes}`)
}