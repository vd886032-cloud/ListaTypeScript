// 10. Calculadora de IMC com Classificação.
// Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
//  Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
//  Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
// o Abaixo de 18.5: &quot;Abaixo do peso&quot;
// o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
// o 25 ou mais: &quot;Sobrepeso&quot;
//  Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
// [classificacao]&quot;.
//  Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.


export function func10():void{
  let calcular_imc = (peso:number, altura:number): number =>{
    let imc = peso/altura**2
    return imc
  }
  let classificar = (valor_imc:number):string =>{
    if(valor_imc <18.5){
        return "abaixo do peso"
    }else if(valor_imc >= 18.5 && valor_imc<= 24.9){
        return "peso normal"
    }else {
        return "sobrepeso"
    }
  }  
  let exibir_laudo = (nome:string, classificacao:string):any =>{
    console.log(`Nome: ${nome} \n Status: ${classificacao}`)
  }
  let nome:string = String(prompt("Digite seu nome: "))
  let peso: number = Number(prompt("Digite o seu peso: "))
  let altura: number = Number(prompt("Digite sua altura: "))
  let imc =  calcular_imc(peso, altura)
  let classificacao = classificar(imc)
  exibir_laudo(nome, classificacao)
}