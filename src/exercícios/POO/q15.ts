// 15. Herança Polimorfismo Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.

export function q15poo():void{
    abstract class Funcionario{
        private nome: string
        constructor(nome:string){
            this.nome= nome
        }
        get Nome(){
            return this.nome
        }
    }
    class Horista extends Funcionario{
        private sala_hora: number
        private horas_trabalhadas:number
        constructor(nome:string, sala_hora:number, horas_trabalhadas:number){
            super(nome)
            this.sala_hora = sala_hora
            this.horas_trabalhadas = horas_trabalhadas
        }
        get SalaHora(){
            return this.sala_hora
        }
        get Horas_trab(){
            return this.horas_trabalhadas
        }
    }
    class Assalariado extends Funcionario{
        private salario:number
        constructor(nome:string, salario: number){
            super(nome)
            this.salario = salario
        }
        get Salario(){
            return this.salario
        }
    }
    let quest = Number(prompt("Digite seu tipo: 1- Horista, 2- Assalariado: "))
    if(quest === 1){
        let nomeH = String(prompt("Digite seu nome: "))
        let sala_hora = Number(prompt("Digite seu salário-hora: "))
        let horas_trabalhadas = Number(prompt("Digite a quantidade de horas trabalhadas: "))
        let NovoHorista = new Horista(nomeH, sala_hora, horas_trabalhadas)
        console.log(`Salário: R$ ${NovoHorista.Horas_trab * NovoHorista.SalaHora}`)
    }
    else if(quest === 2){
        let nomeA = String(prompt("Digite seu nome: "))
        let salario = Number(prompt("Digite seu salário: "))
        let NovoAssalariado = new Assalariado(nomeA, salario)
        console.log(`Salário: R$ ${NovoAssalariado.Salario}`)
    }
}