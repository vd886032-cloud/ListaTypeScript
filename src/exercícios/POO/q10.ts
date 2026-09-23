// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico) com as
// seguintes regras:
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
// qualquer momento.
// Cálculo do Humor (Campo Calculado): O humor não deve ser um atributo salvo no construtor. Ele
// deve ser um método getter público (get humor()) que calcula a média ponderada ou simples da
// felicidade do bichinho.
//  Fórmula do Humor: (Saúde + (10 - Fome)) / 2
//  Regra de Negócio do Humor:
// o Média entre 8.0 e 10.0  &quot;Muito Feliz &quot;
// o Média entre 5.0 e 7.9  &quot;Neutro / Ok &quot;
// o Média abaixo de 5.0  &quot;Triste / Transtornado&quot;

export function q10poo():void{
    class Tamagushi{
        nome: string
        fome: number
        saude: number
        idade: number
        constructor(nome: string, fome: number, saude: number, idade: number){
            this.nome = nome
            this.fome = fome
            this.saude = saude
            this.idade = idade
        }
        alterar_Nome(novoNome: string):void{
            this.nome = novoNome
        }
        alterar_Fome(valor: number){
            this.fome = valor
        }
        alterar_Saude(valor:number){
            this.saude = valor
        }
        alterar_Idade(valor:number){
            this.idade = valor
        }
        get Humor():string {
            let humor = (this.saude + (10 - this.fome))/2
            if( humor >= 8 && humor <= 10 ){
                return "Muito feliz"
            }else if( humor >= 5 && humor <= 7.9){
                return "Neutro"
            }else if(humor < 5){
                return "triste"
            }else{
                return "valor incorreto"
            }
           
        }
        Apresentar():void{
            console.log(`Nome: ${this.nome} \n Saúde: ${this.saude} \n Fome: ${this.fome} \n Idade: ${this.idade} \n Humor: ${this.Humor}`)
        }
    }
    let quest = 0
    let nome = String(prompt("Digite o nome do seu Tamagushi: "))
    let fome = Number(prompt("Digite a fome do seu bixinho: "))
    let saude = Number(prompt("Digite a saúde do seu bixinho: "))
    let idade = Number(prompt("Digite a idade do seu bixinho: "))
    let Bichinho = new Tamagushi(nome, fome, saude, idade)
    while(quest != -1){
        quest = Number(prompt(`Digite a alternativa desejada: 
            \n 1- mudar nome
            \n 2- mudar fome
            \n 3- mudar saúde
            \n 4- mudar idade
            \n -1 - sair`))
        switch(quest){
            case 1:
                let newNome = String(prompt("Digite o novo nome do Tamagushi: "))
                Bichinho.alterar_Nome(newNome)
                break
            case 2:
                let newFome = Number(prompt("Digite a nova fome do seu bixinho: "))
                Bichinho.alterar_Fome(newFome)
                break
            case 3:
                let newSaude = Number(prompt("Digite a nova saúde do seu Tamagushi: "))
                Bichinho.alterar_Saude(newSaude)
                break
            case 4: 
                let newIdade = Number(prompt("Digite a nova idade do seu Tamagushi: "))
                Bichinho.alterar_Idade(newIdade)
                break
        }
    }
    Bichinho.Apresentar()

}