// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function q9poo():void{
    class Produto{
        nomeProduto: string
        preco: number
        quant: number
        constructor(nome_produto: string, preco: number, quant: number){
            this.nomeProduto = nome_produto
            this.preco = preco
            this.quant = quant
        }
        valor_total():number{
            return this.preco * this.quant
        }
    }
    let lista_produto: Produto[] = []
    let quest = 0
    while(quest != -1){
        let nomeProd = String(prompt("Digite o nome do produto: "))
        let precoProd = Number(prompt("Digite o preço do produto: "))
        let quantProd = Number(prompt("Digite a quantidade disponível em estoque: "))
        let produto = new Produto(nomeProd, precoProd, quantProd)
        lista_produto.push(produto)
        quest = Number(prompt("Deseja continuar? (-1 para sair)"))
    } 
    for (let p of  lista_produto) {
        console.log(`Produto: ${p.nomeProduto}`)
        console.log(`Preço: R$ ${p.preco}`)
        console.log(`Quantidade: ${p.quant}`)
        console.log(`Valor em estoque: R$ ${p.valor_total()}`)
}
}