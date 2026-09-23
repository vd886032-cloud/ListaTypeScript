// 8. Arrays Repetição

// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function q8poo():void{
    class Gestao_Func{
        nome: string
        cargo: string
        salario:number
        constructor(nome: string, cargo: string, salario: number){
            this.nome = nome
            this.cargo = cargo
            this.salario = salario
        }

    }
    class Listar_func{
        lista_func: Gestao_Func[] = []
        adicionar_func(funcionario:Gestao_Func):void{
            this.lista_func.push(funcionario)
        }
       apresentar(): void {
        for (let func of this.lista_func) {
            console.log(
                `Nome: ${func.nome} | Cargo: ${func.cargo} | Salário: R$ ${func.salario}`
            )
    }
    let quest = 0
    let lista: Listar_func = new Listar_func
    while(quest != -1){
        let nome_func = String(prompt("Digite seu nome: "))
        let cargo_func = String(prompt("Digite o seu cargo: "))
        let salario_func = Number(prompt("Digite o seu salário atual: "))
        let funcionario = new Gestao_Func(nome_func, cargo_func, salario_func)
        lista.adicionar_func(funcionario)
        quest = Number(prompt("Deseja continuar? (-1 para sair)"))
    }
    lista.apresentar()
    
}}      
}