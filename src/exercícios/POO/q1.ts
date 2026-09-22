// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function q1poo(): void{
    class Bola{
        cor: string
        circunferencia: number
        material: string
        constructor(cor: string, circunferencia: number, material: string){
            this.cor = cor
            this.circunferencia = circunferencia
            this.material = material
    }

    trocacor(novaCor: string){
        this.cor = novaCor
    }

    mostraCor(): void{
        console.log(`Cor da bola: ${this.cor}`)
    }
}
let corBola:string = String(prompt("Digite a cor da sua bola: "))
let circunferenciaBola:number = Number(prompt("Digite a circunferência da sua bola: "))
let materialBola: string = String(prompt("Digite o material da sua bola: "))
let bola = new Bola(corBola, circunferenciaBola, materialBola)
let pergunta = String(prompt("Deseja trocar a cor da bola? S/N"))
if(pergunta.toUpperCase() === "S"){
    let corNova = String(prompt("Digite a nova cor da bola: "))
    bola.trocacor(corNova)
}
let mostrar = String(prompt("Deseja mostrar a cor da bola? S/N"))
if(mostrar.toUpperCase() === "S"){
    bola.mostraCor()
}
}