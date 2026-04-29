// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.


export function arr03():void{
    let gerar_lista_compras = () => {
        let op: string = ""
        let lista: string[] = []
        while(op.toLowerCase() != "fim"){
            console.log(`Digite a opção desejada: \n 
                1- Adicionar itens à lista \n
                2- Apresentar lista \n
                3- Mostrar quantidade de itens na lista \n
                4- Remover itens da lista
                fim - sair do programa`)
            if(op == "1"){
                let tarefa: string = String(prompt("Digite a tarefa a ser inserida na lista: "))
                op = String(prompt("Digite 'fim' se quiser parar:  "))
                lista.push(tarefa.toLowerCase())
            } else if( op == "2"){
                console.log(`Lista de tarefas: ${lista}`)
            } else if(op == "3"){
                console.log(`Quantidade de itens na lista: ${lista.length}`)
            } else if( op == "4"){
                let deletada: string = String(prompt("Digite a tarefa a ser removida: "))
                let index = lista.indexOf(deletada.toLowerCase())
                if (index !== -1) {
                    lista.splice(index, 1)
                    console.log("Item removido!")
            } else {
                    console.log("Item não encontrado.")
            }
                
            }
            else{
                console.log("Item não encontrado")
            }
        }
    }
    gerar_lista_compras()
}