// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.
export function func09():void{
    let solicitar_renda_mensal = (): number =>{
        let renda_mensal: number = Number(prompt("Digite sua renda mensal: "))
        while(renda_mensal <=0){
            if (renda_mensal <= 0 ){
                renda_mensal = Number(prompt("Sua renda nõ pode ser menor ou igual a zero. Digite sua renda novamente"))
        }
    }
    return renda_mensal
    }
    let analisar_credito = (renda: number, valor_parcela:number) =>{
        let limite = renda * 0.3

        if (renda > 5000) {
            limite += 500
        }
         if (valor_parcela <= limite) {
            return true
    }   else {
            return false
    }
    }
    let renda = solicitar_renda_mensal()
    let valor_parcela:number = Number(prompt("Digite o valor da parcela: "))
    let aprovado = analisar_credito(renda, valor_parcela)
    if(aprovado){
        console.log("Crédito aprovado!!")
    }else{
        console.log("Crédito negado!!")
    }
}