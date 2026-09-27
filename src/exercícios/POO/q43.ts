// 43. Repetição Encapsulamento Arrays
// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).

export function q43poo(): void {
    class Atleta {
        private nome: string
        private idade: number
        private tempoMinutos: number

        constructor(nome: string, idade: number, tempoMinutos: number) {
            this.nome = nome
            this.idade = idade
            this.tempoMinutos = tempoMinutos
        }

        get Nome(): string {
            return this.nome
        }

        get Idade(): number {
            return this.idade
        }

        get TempoMinutos(): number {
            return this.tempoMinutos
        }
    }
    let listaAtletas: Atleta[] = []

    while (true) {
        let nome = String(prompt("Digite o nome do atleta (ou 'SAIR' para fechar o programa): "))

        if (nome.toUpperCase() == "SAIR") {
            break
        }
        let idade = Number(prompt("Digite a idade: "))
        let tempo = Number(prompt("Digite o tempo em minutos: "))
        listaAtletas.push(
            new Atleta(nome, idade, tempo)
        )
    }
    let campeao = listaAtletas[0]
    for (let atleta of listaAtletas) {
        if (atleta.TempoMinutos < campeao.TempoMinutos) {
            campeao = atleta
        }
    }
    console.log(`Campeão da prova: Nome: ${campeao.Nome}
    \n Idade: ${campeao.Idade}
    \n Tempo: ${campeao.TempoMinutos} minutos`)
}