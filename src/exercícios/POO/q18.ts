// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.

export function q18poo(): void {
    abstract class Funcionario {
        private nome: string
        private matricula: number
        private salario_base: number
        constructor(nome: string, matricula: number, salario_base: number) {
            this.nome = nome
            this.matricula = matricula
            this.salario_base = salario_base
        }

        get Nome(): string {
            return this.nome
        }

        get Matricula(): number {
            return this.matricula
        }

        get SalarioBase(): number {
            return this.salario_base
        }

        set Nome(novoNome: string) {
            this.nome = novoNome
        }

        set Matricula(novaMatricula: number) {
            this.matricula = novaMatricula
        }

        set SalarioBase(novoSalario: number) {
            this.salario_base = novoSalario
        }

        calcular_salario(): number {
            return this.salario_base
        }
    }

    class Professor extends Funcionario {

        private regime: string

        constructor(
            nome: string, matricula: number, salario_base: number, regime: string
        ) {
            super(nome, matricula, salario_base)
            this.regime = regime
        }

        calcular_salario(): number {

            if (this.regime == "DE") {
                return this.SalarioBase + (this.SalarioBase * 20 / 100)
            }

            return this.SalarioBase
        }
    }

    class Tecnico extends Funcionario {

        private auxilio: number = 1000

        constructor(
            nome: string, matricula: number, salario_base: number
        ) {
            super(nome, matricula, salario_base)
        }

        calcular_salario(): number {
            return this.SalarioBase + this.auxilio
        }
    }

    class Diretor extends Funcionario {

        private departamento: string
        private gratificacao: number

        constructor(
            nome: string,
            matricula: number,
            salario_base: number,
            departamento: string,
            gratificacao: number
        ) {
            super(nome, matricula, salario_base)
            this.departamento = departamento
            this.gratificacao = gratificacao
        }

        calcular_salario(): number {
            return this.SalarioBase + this.gratificacao
        }
    }

    let quest = 0

    let totalProf = 0
    let totalTec = 0
    let totalDir = 0

    while (quest != -1) {

        quest = Number(prompt(`Digite a alternativa desejada:
                \n 1- Cadastrar Professor
                \n 2- Cadastrar Técnico
                \n 3- Cadastrar Diretor
                \n -1- Encerrar`))
        switch (quest) {
            case 1:

                let nomeP = String(prompt("Digite o nome: "))
                let matP = Number(prompt("Digite a matrícula: "))
                let salP = Number(prompt("Digite o salário base: "))
                let regime = String(prompt("Digite o regime (DE ou Outro): "))
                let prof = new Professor(nomeP, matP, salP, regime)
                totalProf += prof.calcular_salario()
                console.log(`Salário final: R$ ${prof.calcular_salario()}`)
                break

            case 2:
                let nomeT = String(prompt("Digite o nome: "))
                let matT = Number(prompt("Digite a matrícula: "))
                let salT = Number(prompt("Digite o salário base: "))
                let tec = new Tecnico(nomeT, matT, salT)
                totalTec += tec.calcular_salario()
                console.log(`Salário final: R$ ${tec.calcular_salario()}`)
                break

            case 3:
                let nomeD = String(prompt("Digite o nome: "))
                let matD = Number(prompt("Digite a matrícula: "))
                let salD = Number(prompt("Digite o salário base: "))
                let dep = String(prompt("Digite o departamento: "))
                let grat = Number(prompt("Digite a gratificação: "))
                let dir = new Diretor(nomeD, matD, salD, dep, grat)
                totalDir += dir.calcular_salario()
                console.log(`Salário final: R$ ${dir.calcular_salario()}`)
                break

            case -1:
                console.log("Encerrando sistema...")
                break
            default:
                console.log("Opção inválida.")
        }
    }
    let totalGeral = totalProf + totalTec + totalDir
    console.log(`Total Professores: R$ ${totalProf}
                \n Total Técnicos: R$ ${totalTec}
                \n Total Diretores: R$ ${totalDir}
                \n Custo Total Geral: R$ ${totalGeral}`)
}