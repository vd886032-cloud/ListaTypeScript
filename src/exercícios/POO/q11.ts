// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function q11poo():void{
    class Cliente{
        private nome:string
        private pedido:string
        private valor: number
        constructor(nome:string, pedido:string, valor:number){
            this.nome = nome
            this.pedido = pedido
            this.valor = valor
        }
        Resumo(): string{
            return `Nome do cliente: ${this.nome}
            \n Pedido: ${this.pedido}
            \n Valor do pedido: R$ ${this.valor}`
        }
    }
    
    let quest = 0
    while(quest != -1){
        let nomeCliente = String(prompt("Digite seu nome: "))
        let nomePedido = String(prompt("Digite o nome do pedido: "))
        let valorPedido = Number(prompt("Digite o valor do pedido: "))
        let NovoCliente: Cliente = new Cliente(nomeCliente, nomePedido, valorPedido)
        console.log(NovoCliente.Resumo())

        quest = Number(prompt("Deseja realizar mais pedidos? (-1 para finalizar) "))
    }
}