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
        mostrarValorLado():void{
            console.log(`Valor do lado: ${this.tamanhoLado}cm`)
        }
        MostrarArea():void{
            console.log(`Valor da área: ${this.area}cm²`)
        }
    }
    let tamanhoLadoQuadrado = Number(prompt("Digite a área do lado do seu quadrado: "))
    let quadrado = new Quadrado(tamanhoLadoQuadrado)
    let p1 = 0
    while(p1 != -1){
        let p1 = Number(prompt(`Digite a alternativa desejada: 
            \n 1-mudar valor do lado 
            \n 2- mostrar valor do lado 
            \n 3- mostrar área do quadrado`))
            if(p1 === 1){
                let novoValor = Number(prompt("Digite o valor do lado: "))
                quadrado.mudarValorLado(novoValor)
            }
            else if(p1 === 2){
                quadrado.mudarValorLado
            }
            else if(p1 === 3){
                quadrado.MostrarArea
            }
    }
}