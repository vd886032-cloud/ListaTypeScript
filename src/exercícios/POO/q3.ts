// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function q3poo():void{
    class Retangulo{
        ladoA: number
        ladoB: number
        constructor(ladoA:number, ladoB: number){
            this.ladoA = ladoA
            this.ladoB = ladoB
        }
        mudarValores(novo1: number, novo2: number){
            this.ladoA = novo1
            this.ladoB = novo2
        }
        apresentarValores():void{
            console.log(`Base: ${this.ladoA}, Altura: ${this.ladoB}`)
        }
        calcularArea(){
            let area = this.ladoA *this.ladoB
            console.log(area)
        }
        calcularPerimetro():void{
            let perimetro = 2 *(this.ladoA + this.ladoB)
            console.log(perimetro)
        }
    }
    let base = Number(prompt("Digite a base do retângulo: "))
    let altura = Number(prompt("Digite a altura do retângulo: "))
    let retangulo = new Retangulo(base, altura)
    let p1 = 0
    while(p1 != -1){
        p1 = Number(prompt(`Digite a opção desejada: 
            \n 1- mudar valores
            \n 2- apresentar valores
            \n 3- calcular área
            \n 4- calcular perímetro
            \n -1 - Sair`))
            if(p1 === 1){
                let novo1 = Number(prompt("Digite a nova base: "))
                let novo2 = Number(prompt("Digite a nova altura: "))
                retangulo.mudarValores(novo1,novo2)
            }
            else if(p1 === 2){
                retangulo.apresentarValores()
            }
            else if(p1 === 3){
                retangulo.calcularArea()
            }
            else if(p1 === 4){
                retangulo.calcularPerimetro()
            }
    }
}