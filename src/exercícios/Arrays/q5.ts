// 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function arr05():void{
    function gerenciar_tarefas() {
    let tarefas: string[] = []
    let op: string = ""

    while (op !== "4") {
        console.log(`Escolha uma opção:
1 - Adicionar tarefa
2 - Concluir tarefa (remover)
3 - Exibir tarefas
4 - Sair`)

        op = String(prompt("Opção: "))

        if (op === "1") {
            let tarefa = String(prompt("Digite a tarefa: "))
            tarefas.push(tarefa)

        } else if (op === "2") {
            let concluir = String(prompt("Qual tarefa deseja concluir? "))
            let index = tarefas.indexOf(concluir)

            if (index !== -1) {
                tarefas.splice(index, 1)
                console.log("Tarefa concluída!")
            } else {
                console.log("Tarefa não encontrada.")
            }

        } else if (op === "3") {
            console.log(`Tarefas pendentes: ${tarefas} `)
            

        } else if (op === "4") {
            console.log("Saindo...")

        } else {
            console.log("Opção inválida")
        }
    }
}

gerenciar_tarefas()
}