// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados.

export function rep03():void{
    let op: string = ""
    let maior_sala = 0
    let id_maior:string = ''
    let cont_masc: number = 0, cont_fem:number = 0
    let percent_masc:number =0 , percent_fem: number = 0
    let sala_total: number[] = []
    
    while(op.toLowerCase() != "n"){
    let nome: string = String(prompt("Digite seu nome: "))
    let sala_hora: number = Number(prompt("Digite seu salário-hora: "))
    let horas_trabalhadas: number = Number(prompt("Digite sua quantidade de horas trabalhadas: "))
    let sexo: string = String(prompt("Digite seu sexo: M-masculino/ F-feminino: "))
    let sala_fixo = horas_trabalhadas * sala_hora
    sala_total.push(sala_fixo)
    if(sala_fixo > maior_sala){
        maior_sala = sala_fixo
        id_maior = nome
    }
    if(sexo.toLowerCase() === "m"){
        cont_masc++
    }else if(sexo.toLowerCase() ==="f"){
        cont_fem++
    }else{
        console.error("Sexo inválido")
    }
    op = String(prompt("Digite se quer continuar: (S/N)"))
    }
    let total_func = cont_fem + cont_masc
    percent_masc = (cont_masc * 100)/total_func
    percent_fem = (cont_fem * 100)/total_func

    console.log(`Salário total: ${ sala_total.length ? sala_total.reduce((acumulador, num)=> acumulador+num, 0 ): 0} R$ \n Maior salário: ${maior_sala}R$, recebido por ${id_maior} `)
    console.log(`Funcionários do sexo masculino: ${cont_masc} \n Funcionários do sexo feminino: ${cont_fem}`)
    console.log(`Percentual de homens cadastrados: ${percent_masc.toFixed(2)}% \n Percentual de mulheres cadastradas: ${percent_fem.toFixed(2)}%`)
}