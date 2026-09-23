// 6. Repetição
// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo.
// Os métodos são os seguintes: alterarNome, depósito e saque.
// No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios. Por
// fim, faça com que esse sistema interaja com o usuário permitido que ele, depois de cadastrar as suas
// informações, possa usar os métodos disponíveis.

export function q6poo():void{
    class ContaCorrente{
        numConta: number
        nomeCorrentista: string
        saldo: number 
        constructor(numConta: number, nomeCorrentista: string, saldo: number = 0 ){
            this.numConta = numConta
            this.nomeCorrentista = nomeCorrentista
            this.saldo = saldo
        }
        alterarNome(novoNome: string): void{
            this.nomeCorrentista = novoNome
        }
        deposito(valor:number){
            this.saldo+= valor
        }
        saque(valor:number){
            if(this.saldo < valor){
                console.log("Não é possivel realizar saque. Valor maior que o saldo")
            }
            else{
                this.saldo-= valor
            }
        }
    }
    let conta = Number(prompt("Digite o número da sua conta: "))
    let nome = String(prompt("Digite seu nome: "))
    let pessoa = new ContaCorrente(conta, nome)
    let quest = 0
    while(quest != -1){
        quest = Number(prompt(`Digite a alternativa desejada: 
            \n 1- alterar nome do correntista;
            \n 2- depositar 
            \n 3- saque
            \n -1 - sair `))
        switch(quest){
            case 1:
                let newName = String(prompt("Digite o novo nome do correntista: "))
                pessoa.alterarNome(newName)
                break
            case 2:
                let valor_depositar = Number(prompt("Digite o valor a ser depositado: "))
                pessoa.deposito(valor_depositar)
                break
            case 3: 
                let valor_sacar = Number(prompt("Digite o valor a ser sacado: "))
                pessoa.saque(valor_sacar)
                break
        }
    }
}