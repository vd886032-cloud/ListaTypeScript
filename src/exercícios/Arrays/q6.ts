// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.
export function arr06():void {
    let lista: string[] = []
    for(let i=0; i <= 15; i++){
        let nome: string = String(prompt("Digite seu nome: "))
        lista.push(nome)
    }
    console.log(`Nomes digitados: ${lista} \n Nomes ordenados: ${lista.sort()} \n  `)
}
