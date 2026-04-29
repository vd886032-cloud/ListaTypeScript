// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.
export function func04():void{
let bancoEletronico = (valor:number): string=>{
    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    while(valor>= 10){
        if(valor>= 50){
            valor-=50
            nota50++
        }else if(valor>=20){
            valor-=20
            nota20++
        }else if(valor>=10){
            valor-=10
            nota10++
        }
    }
    return (`Notas de 50: ${nota50}\n Notas de 20: ${nota20}\n Notas de 10: ${nota10}\n Saldo restante: ${valor}`)
}
bancoEletronico(80.5)
}