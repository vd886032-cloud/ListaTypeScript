// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function q4poo(): void {

    class Retangulo {
        ladoA: number
        ladoB: number

        constructor(ladoA: number, ladoB: number) {
            this.ladoA = ladoA
            this.ladoB = ladoB
        }

        mudarValores(novo1: number, novo2: number) {
            this.ladoA = novo1
            this.ladoB = novo2
        }

        apresentarValores(): void {
            console.log(`Base: ${this.ladoA},  Altura: ${this.ladoB}`)
        }

        calcularArea(): number {
            return this.ladoA * this.ladoB
        }

        calcularPerimetro(): number {
            return 2 * (this.ladoA + this.ladoB)
        }
    }

    let comprimento = Number(prompt("Digite o comprimento do local (m): "))
    let largura = Number(prompt("Digite a largura do local (m): "))

    let local = new Retangulo(comprimento, largura)

    let pisos = local.calcularArea()
    let rodapes = local.calcularPerimetro()

    alert(`Área do local: ${pisos} m²
Quantidade de pisos necessária: ${pisos}
Quantidade de rodapés necessária: ${rodapes} metros`)

    console.log(`Área: ${pisos} m²`)
    console.log(`Rodapés: ${rodapes} m`)
}