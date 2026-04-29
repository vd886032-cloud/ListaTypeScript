// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):
// o Se valor < 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor > 5000: Retorna &quot;Ouro&quot;
//  O Programa:
// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria &quot;Ouro&quot;.


export function rep05():void{
    function classificarVenda(valor:number): string{
        if(valor < 1000){
            return "Bronze"
        }else if(valor >= 1000 && valor <= 5000){
            return "Prata"
        }else {
            return "Ouro"
        }
    }
    let soma = 0
    let id_MV: string = ""
    let valor_MV =0 
    let cont_ouro = 0
    for(let i=0 ; i <5; i++){
        let valor_venda = Number(prompt("Digite o valor da sua venda: "))
        let classificacao = classificarVenda(valor_venda)
        soma += valor_venda
        if(valor_venda > valor_MV){
            valor_MV = valor_venda
            id_MV = classificacao
        }
        if(classificacao.toLowerCase() === "ouro"){
            cont_ouro++
        }
        
    }
    console.log(`Total de vendas: ${soma}R$ \n Maior valor digitado: ${valor_MV}R$ \n Vendedores com categoria ouro: ${cont_ouro}`)
}