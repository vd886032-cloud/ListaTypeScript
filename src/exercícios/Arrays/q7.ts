// 7. Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.
// 1. Array que aceita apenas strings
export function arr07():void{
let presenca: string[] = []


presenca.push("ana")
presenca.push("bruno")
presenca.push("carla")
presenca.push("daniel")
presenca.push("eduardo")
console.log(presenca)
// deu certo


// presenca.push(10) ❌ deu erro de tipo

// 4. Loop imprimindo em maiúsculo
for (let i = 0; i < presenca.length; i++) {
    console.log(presenca[i].toUpperCase())
}
}