// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function q5poo():void{
    class Pessoa{
        nome: string
        idade: number 
        peso: number
        altura: number
        constructor(nome: string, idade: number, peso: number, altura: number){
            this.nome = nome
            this.idade  = idade
            this.peso = peso
            this.altura = altura
        }
        envelhecer():void{
            this.idade++
            if(this.idade < 21){
                this.altura += 0.5
            }
        }
        engordar(somaPeso: number): void{
            this.peso+= somaPeso
        }
        emagrecer(reduzPeso: number): void{
            this.peso -= reduzPeso
        }
        crescer(maisAltura:number):void{
            this.altura+= maisAltura
        }
    }
    let nomePessoa = String(prompt("Digite seu nome: "))
    let idadePessoa = Number(prompt("Digite sua idade: "))
    let pesoPessoa = Number(prompt("Digite seu peso em kg: "))
    let alturaPessoa = Number(prompt("Digite sua altura em cm: "))
    let pessoa0 = new Pessoa(nomePessoa, idadePessoa, pesoPessoa, alturaPessoa)
    let p1 = 0
    while(p1 != -1){
        p1 = Number(prompt(`Digite a alternativa desejada: 
            \n 1- Envelhecer
            \n 2- engordar
            \n 3- emagrecer
            \n 4- crescer
            \n 5- exibir
            \n -1 - sair`))

            if(p1 === 1){
                pessoa0.envelhecer()
            }else if(p1 === 2){
                let maisPeso = Number(prompt("Digite quantos Kg você engordou: "))
                pessoa0.engordar(maisPeso)
            }else if(p1 === 3){
                let menosPeso = Number(prompt("Digite quantos kg você emagreceu: "))
                pessoa0.emagrecer(menosPeso)
            }else if(p1 === 4){
                let somaAltura = Number(prompt("Digite quantos metros você cresceu:"))
                pessoa0.crescer(somaAltura)
            }
            else if(p1 === 5){
                console.log(`Idade: ${pessoa0.idade}
                    \n Peso: ${pessoa0.peso}
                    \n Altura: ${pessoa0.altura} M`)
            }
    }
}