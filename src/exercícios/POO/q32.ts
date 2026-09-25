// 32. Desenvolva o motor de pontuação de um jogo arcade. A superclasse Jogador possui os atributos
// privados nickname e pontuacao (iniciada em zero), sendo pontuação acessível somente pelo método
// realizarMissao() — nunca diretamente. JogadorComum ganha 100 pontos por missão.
// JogadorPremium sobrescreve realizarMissao() e acumula 150 pontos (100 + 50% de bônus). O
// programa solicita ao usuário o tipo e o apelido de cada jogador. A cada rodada, o usuário informa qual
// jogador realizou uma missão. Ao final do torneio, o programa exibe a classificação completa e destaca
// quem ultrapassou 1.000 pontos.
// Requisitos mínimos:
// • pontuacao privada: modificada apenas por realizarMissao(), nunca diretamente.
// • JogadorPremium sobrescreve realizarMissao() com bônus de 50%.
// • Getter getPontuacao() para leitura controlada.
// • Loop de rodadas com condição de parada por comando do usuário.
// • Exibição final com classificação e destaque para campeões.

export function q32poo(): void {
    abstract class Jogador {
        private nickname: string
        private pontuacao: number

        constructor(nickname: string) {
            this.nickname = nickname
            this.pontuacao = 0
        }

        get Nickname(): string {
            return this.nickname
        }

        getPontuacao(): number {
            return this.pontuacao
        }

        protected adicionarPontos(valor: number): void {
            this.pontuacao += valor
        }

        abstract realizarMissao(): void
    }

    class JogadorComum extends Jogador {
        realizarMissao(): void {
            this.adicionarPontos(100)
        }
    }

    class JogadorPremium extends Jogador {
        realizarMissao(): void {
            this.adicionarPontos(150)
        }
    }
    let listaJogadores: Jogador[] = []
    let quest = 0

    while (quest != -1) {
        quest = Number(prompt(`Digite a alternativa desejada:
        \n 1- Cadastrar Jogador Comum
        \n 2- Cadastrar Jogador Premium
        \n 3- Realizar missão
        \n -1- Encerrar torneio`))

        switch (quest) {

            case 1:
                let nickC = String(prompt("Digite seu nick: "))
                listaJogadores.push(
                    new JogadorComum(nickC)
                )
                break

            case 2:
                let nickP = String(prompt("Digite seu nick: "))
                listaJogadores.push(
                    new JogadorPremium(nickP)
                )
                break

            case 3:

                let busca = String(prompt("Digite o nickname do jogador: "))
                let encontrado = false

                for (let jogador of listaJogadores) {
                    if (jogador.Nickname == busca) {
                        jogador.realizarMissao()
                        console.log(`${jogador.Nickname} realizou uma missão!
                                \n Pontuação: ${jogador.getPontuacao()}`)

                        encontrado = true
                        break
                    }
                }
                if (!encontrado) {
                    console.log("Jogador não encontrado.")
                }
                break

            case -1:
                console.log("Torneio encerrado.")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    listaJogadores.sort((a, b) => b.getPontuacao() - a.getPontuacao())
    console.log("Ranking: ")
    for (let jogador of listaJogadores) {
        console.log(`Jogador: ${jogador.Nickname}
                    \n Pontuação: ${jogador.getPontuacao()}`)
        if (jogador.getPontuacao() > 1000) {
            console.log("CAMPEÃO")
        }
    }
}