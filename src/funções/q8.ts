// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.
export function func08():void{
   function calcularTotal(preco: number, quantidade: number): number {
    let total = preco * quantidade
    if (quantidade > 10) {
        total = total - (total * 0.05)
    }
    return total
}
let totalGeral = 0
let somaPrecos = 0
let quant_Produtos = 0
let preco =-1
while (preco != 0 ) {
    let preco = Number(prompt("Digite o preço do produto (0 para encerrar): "))
    let quantidade = Number(prompt("Digite a quantidade: "))
    let totalItem = calcularTotal(preco, quantidade)
    totalGeral += totalItem
    somaPrecos += preco
    quant_Produtos++
}
let media = quant_Produtos> 0 ? somaPrecos / quant_Produtos: 0

console.log("Total investido:", totalGeral)
console.log("Média de preço:", media)
}