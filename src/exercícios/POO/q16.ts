export function q16poo(): void {

    abstract class Animal {

        private nome: string
        private especie: string
        private idade: number
        private sexo: string

        constructor(nome: string, especie: string, idade: number, sexo: string) {
            this.nome = nome
            this.especie = especie
            this.idade = idade
            this.sexo = sexo
        }

        get Nome(): string {
            return this.nome
        }

        get Especie(): string {
            return this.especie
        }

        get Idade(): number {
            return this.idade
        }

        get Sexo(): string {
            return this.sexo
        }

        abstract emitir_som(): string
        abstract mover(): string
    }

    class Mamifero extends Animal {

        tipo_alimentacao: string

        constructor(nome: string, especie: string, idade: number, sexo: string, tipoAlimentacao: string) {
            super(nome, especie, idade, sexo)
            this.tipo_alimentacao = tipoAlimentacao
        }

        emitir_som(): string {
            return "O mamífero emitiu um som."
        }

        mover(): string {
            return "O mamífero anda/corre."
        }
    }

    class Aves extends Animal {
        migratorias: boolean
        constructor(nome: string, especie: string, idade: number, sexo: string, migratorias: boolean) {
            super(nome, especie, idade, sexo)
            this.migratorias = migratorias
        }

        emitir_som(): string {
            return "A ave canta."
        }

        mover(): string {
            return "A ave voa."
        }
    }
    function simularHoraAlimentacao(listaAnimais: Animal[]): void {
        for (let animal of listaAnimais) {
            console.log(`O tratador está alimentando ${animal.Nome}
            \n ${console.log(animal.emitir_som())}`)
            
        }
    }
    let quest = 0
    let listaAnimais: Animal[] = []
    while (quest != -1) {
        quest = Number(prompt(
            `Digite a alternativa desejada: 
            \n 1 - Cadastrar mamífero
            \n 2 - Cadastrar ave
            \n 3 - Listar mamíferos
            \n 4 - Listar aves
            \n 5 - Hora da alimentação
            \n -1 - Sair`
        ))

        switch (quest) {
            case 1:
                let nomeM = String(prompt("Nome: "))
                let especieM = String(prompt("Espécie: "))
                let idadeM = Number(prompt("Idade: "))
                let sexoM = String(prompt("Sexo: "))
                let alim = String(prompt("Tipo de alimentação: "))

                listaAnimais.push(
                    new Mamifero(nomeM, especieM, idadeM, sexoM, alim)
                )
                break
            case 2:
                let nomeA = String(prompt("Nome: "))
                let especieA = String(prompt("Espécie: "))
                let idadeA = Number(prompt("Idade: "))
                let sexoA = String(prompt("Sexo: "))
                let mig = String(prompt("É migratória? (S/N)"))
                listaAnimais.push(
                    new Aves(nomeA, especieA,  idadeA, sexoA, mig.toUpperCase() == "S"
                    )
                )
                break
            case 3:
                for (let animal of listaAnimais) {
                    if (animal instanceof Mamifero) {
                        console.log(`Nome: ${animal.Nome}
                        \n Espécie: ${animal.Especie}
                        \n Alimentação: ${animal.tipo_alimentacao}
                        ${console.log(animal.mover())}`)
                    }
                }
                break
            case 4:
                for (let animal of listaAnimais) {
                    if (animal instanceof Aves) {
                        console.log(`Nome: ${animal.Nome}
                        \n Espécie: ${animal.Especie}
                        \n Migratória: ${animal.migratorias ? "Sim" : "Não"}
                        ${console.log(animal.mover())}`)
                    }
                }
                break
            case 5:
                simularHoraAlimentacao(listaAnimais)
                break
            case -1:
                console.log("Programa encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
}