// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

export function q2poo():void{
    class Quadrado{
        tamanhoLado: number
        area: number
        constructor(tamanhoLado: number){
            this.tamanhoLado  = tamanhoLado
            this.area = this.tamanhoLado*2
        }
        mudarValorLado(novoValor: number){
            this.tamanhoLado = novoValor
        }
        mostrarValorLado(): string{
            return (`Valor do lado: ${this.tamanhoLado}cm`)
        }
        MostrarArea(): string{
            return(`Valor da área: ${this.area}cm²`)
        }
    }
    let tamanhoLadoQuadrado = Number(prompt("Digite a área do lado do seu quadrado: "))
    let quadrado = new Quadrado(tamanhoLadoQuadrado)
    let p1 = 0
    while(p1 != -1){
        let p1 = Number(prompt(`Digite a alternativa desejada: 
            \n 1-mudar valor do lado 
            \n 2- mostrar valor do lado 
            \n 3- mostrar área do quadrado
            \n -1 - Sair`))
            if(p1 === 1){
                let novoValor = Number(prompt("Digite o valor do lado: "))
                quadrado.mudarValorLado(novoValor)
            }
            else if(p1 === 2){
                console.log(quadrado.mostrarValorLado())
            }
            else if(p1 === 3){
                console.log(quadrado.MostrarArea())
            }
    }
}