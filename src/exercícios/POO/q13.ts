// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function q13poo():void{
    class Aluno{
        private nome:string
        private nota1:number
        private nota2: number
        constructor(nome:string, nota1:number, nota2:number){
            this.nome = nome
            this.nota1 = nota1
            this.nota2 = nota2
        }
        get Nome():string{
            return this.nome
        }
       
        calcular_Media():number{
            let media = (this.nota1 + this.nota2)/2
            console.log(media)
            return media
        }
        Informar_Situacao(){
            if(this.calcular_Media()>= 7){
                console.log("Aluno aprovado")
            }else{
                console.log("Aluno reprovado")
            }
        }
    }let quest = 0
    while(quest != -1){
        let nomeAluno = String(prompt("Digite o nome do aluno: "))
        let nota1Aluno = Number(prompt("Digite sua 1ª nota: "))
        let nota2Aluno = Number(prompt("Digite sua 2ª nota: "))
        let NovoAluno = new Aluno(nomeAluno, nota1Aluno, nota2Aluno)
        console.log(`Nome do Aluno: ${NovoAluno.Nome}
        \n Média do aluno: ${NovoAluno.calcular_Media()}
        \n Situação: ${NovoAluno.Informar_Situacao()}`)

    }
    
    
}