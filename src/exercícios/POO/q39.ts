// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal(): number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.


export function q39poo():void{
    abstract class Pedido{
        private numP: number
        private valorBase: number
        constructor(numP:number, valorBase:number){
            this.numP = numP
            this.valorBase = valorBase
        }
        get Num_pedido(){
            return this.numP
        }

        get valor_baseP(){
            return this.valorBase
        }

        abstract calcularTotal():number
    }
    class PedidoLocal extends Pedido{
        constructor(numP:number, valorBase:number){
            super(numP, valorBase)
        }
        aplicarTaxa(): number{
            return this.Num_pedido+ (this.Num_pedido*0.1)
        }

    }

    class DriveThru extends Pedido{
         constructor(numP:number, valorBase:number){
            super(numP, valorBase)
        }
        aplicarTaxa(): number{
            return this.Num_pedido+ 3
        }
    }

    let quest = 0
    let resumo: Pedido[] = []
    while(quest != -1){
        quest = Number(prompt(`Digite a alternativa desejada: 1- Cadastrar pedido local
        \n 2- Adicionar pedido drivethru
        \n -1 sair`))
        
        switch (quest){
            case 1:
            let numero = Number(prompt("Digite o Número do pedido: "))
            let valor = Number(prompt("Digite o valor do pedido: "))
            let novoPedido = new PedidoLocal(numero, valor)
            
        }
           
    }
}