// 6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
// Exemplo: Salário Bruto: (15 * 220)       : R$ 3300,00
//   (-) IR (15%)                      : R$  495,00  
//   (-) INSS (10%)                  : R$  330,00
// (-) SINDICATO (3%)                  : R$   99,00
// (-) V. ALIMENTAÇÃO (8%)              : R$  264,00
// (-) V. TRANSPORTE (6%)               : R$  198,00
//   FGTS (11%)                       : R$  121,00
//   Total de descontos               : R$  1386,00
//   Salário Líquido                 : R$  1914,00
export function func06():void{
    let horas_trabalhadas:number  = Number(prompt("Digite suas horas trabalhadas: "))
    let sala_hora: number = Number(prompt("Digite seu salário-hora: "))
    let sala_bruto = sala_hora * horas_trabalhadas
    let desc_sindicato = (sala_bruto * 3)/100
    let desc_inss = (sala_bruto * 10)/100
    let desc_vale_A = (sala_bruto * 8)/100
    let desc_vale_T = (sala_bruto * 6)/100
    let FGTS = (sala_bruto * 11)/100
    let desc_IR: number = 0
    let IR: string = ""
    if(sala_bruto <= 2428.8){
        desc_IR = 0
        IR = "Isento"
    } else if(sala_bruto >= 2428.81 && sala_bruto <= 2826.65 ){
        desc_IR = (sala_bruto * 7.5)/100
        IR = "7,5%"
    } else if(sala_bruto >= 2826.66 && sala_bruto <= 3751.05){
        desc_IR = (sala_bruto * 15)/100
        IR = "15%"
    }else if (sala_bruto >=3751.06 && sala_bruto <= 4664.68){
        desc_IR = (sala_bruto * 22.5)/100
        IR = "22,5%"
    }else{
        desc_IR = (sala_bruto * 27.5)/100
        IR = "27,5%"
    }
    let sala_liquido = (sala_bruto) - desc_sindicato - desc_inss - desc_vale_A - desc_vale_T - desc_IR
    let total_descontos = desc_inss + desc_sindicato + desc_vale_A + desc_IR + desc_vale_T
    let  resultado = `Salário Bruto: (${sala_hora} * ${horas_trabalhadas})    :  R$  ${sala_bruto} <br>
    (-) IR (${IR})      :  R$ ${desc_IR} \n
    (-) INSS (10%)     :  R$ ${desc_inss} \n
    (-) Sindicato (3%)     :  R$ ${desc_sindicato} \n
    FGTS (11%)     :  R$ ${FGTS} \n
    Total de descontos     : R$ ${total_descontos} \n
    Salário Líquido     : R$  ${sala_liquido} \n
    Vale alimentação    : R$  ${desc_vale_A} \n
    Vale transporte     : R$  ${desc_vale_T}` 
    console.log(resultado)
}