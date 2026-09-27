// 49. Repetição Encapsulamento Arrays
// Ficha de Triagem e Vacinação de Clínica Veterinária
// Uma clínica veterinária precisa de um programa para controlar a fila de vacinação do dia. Crie a
// classe Pet com os atributos privados nome, especie, peso e vacinado (boolean com valor inicial
// false). Crie métodos de leitura e escrita para todos os atributos e o método aplicarVacina(), que
// altera o status de vacinado para true e exibe uma mensagem confirmando a imunização. O programa
// deve interagir com o recepcionista solicitando em um laço os dados de até 10 animais que chegaram
// para atendimento, armazenando-os em um array. Após o cadastro completo da fila, o sistema executa
// um novo laço simulando o atendimento do veterinário: para cada pet da lista, se o animal ainda não
// estiver vacinado, o programa chama o método aplicarVacina(). Ao término, exibe-se a quantidade
// total de pets imunizados na sessão.

export function q49poo(): void {

    class Pet {
        private nome: string
        private especie: string
        private peso: number
        private vacinado: boolean

        constructor(nome: string, especie: string, peso: number) {
            this.nome = nome
            this.especie = especie
            this.peso = peso
            this.vacinado = false
        }

        get Nome(): string {
            return this.nome
        }

        get Especie(): string {
            return this.especie
        }

        get Peso(): number {
            return this.peso
        }

        get Vacinado(): boolean {
            return this.vacinado
        }

        set Nome(valor: string) {
            this.nome = valor
        }

        set Especie(valor: string) {
            this.especie = valor
        }

        set Peso(valor: number) {
            this.peso = valor
        }
        aplicarVacina(): void {
            this.vacinado = true
            console.log(`o pet ${this.Nome} foi vacinado`)
        }
    }
    let listaPets: Pet[] = []
    for (let i = 0; i < 10; i++) {
        let nome = String(prompt("Digite o nome do pet: "))
        let especie = String(prompt("Digite a espécie: "))
        let peso = Number(prompt("Digite o peso: "))
        listaPets.push(
            new Pet(nome, especie, peso)
        )
        let continuar = Number(prompt(`Deseja cadastrar outro pet?
        \n 1- Sim
        \n 0- Não`))

        if (continuar == 0) {
            break
        }
    }
    let totalImunizados = 0

    for (let pet of listaPets) {

        if (!pet.Vacinado) {

            pet.aplicarVacina()
            totalImunizados++
        }
    }
    console.log(`Total de pets imunizados: ${totalImunizados}`)
}