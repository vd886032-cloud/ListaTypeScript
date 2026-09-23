// 7. Repetição
// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function q7poo():void{
    class Gestao_Func{
        nome: string
        cargo: string
        salario:number
        constructor(nome: string, cargo: string, salario: number){
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
        }
        calcular_aumento(percentual:number): void{
            this.salario = this.salario + (this.salario * percentual/100)
        }
        apresentar():void{
            console.log(`Nome do funcionário: ${this.nome} 
                \n Cargo do funcionário: ${this.cargo}
                \n Salário: R$ ${this.salario}`)
        }
    }
    let nome_func = String(prompt("Digite seu nome: "))
    let cargo_func = String(prompt("Digite o seu cargo: "))
    let salario_func = Number(prompt("Digite o seu salário atual: "))
    let funcionario = new Gestao_Func(nome_func, cargo_func, salario_func)
    let quest = 0
    while(quest != -1){
        quest = Number(prompt(`Digite a alternativa escolhida: 
            \n 1- calcular aumento
            \n 2- apresentar informações
            \n -1 - sair `))
            switch(quest){
                case 1:
                    let aumento = Number(prompt("Digite o percentual de aumento: "))
                    funcionario.calcular_aumento(aumento)
                    break
                case 2:
                    funcionario.apresentar()
                    break
            }
    }
}