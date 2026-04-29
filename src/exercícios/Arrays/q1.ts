// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa
export function arr01(): void{
    let lista: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let lista_par: number[] = lista.filter((n)=> n % 2 ===0)
    let lista_impar: number[] = lista.filter((n)=> n%2 !== 0)
    let lista_reversa: number[] = lista.sort((a, b)=> b - a)
    let multiplos2_3_4: number[] = lista.filter((n)=> n % 2 ===0 && n%3 === 0 && n%4 ===0)
    console.log(`Números pares: ${lista_par} \n Números impares: ${lista_impar} \n Números múltiplos de 2, 3 e 4: ${multiplos2_3_4} \n Lista reversa: ${lista_reversa}`)
}