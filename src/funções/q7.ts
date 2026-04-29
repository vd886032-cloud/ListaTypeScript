// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function func07():void{
    let consumo = (distancia: number, combustivel: number): number =>{
        let consumo_medio = distancia/ combustivel
        return  consumo_medio 
    }
    let limite = (cons_med: number, capacidade: number): string =>{
        let autonomia = cons_med * capacidade
        return `Com o tanque cheio, o carro percorre ${autonomia}km/l`
    }

    let distancia: number = Number(prompt("Digite a distância percorrida em km: "))
    let combustivel: number= Number(prompt("Digite a quantidade de combustível gasta: "))
    let cap_max: number = Number(prompt("Digite a capacidade máxima do tanque em L"))
    let consumo_medio = consumo(distancia, combustivel)
    let tanque_cheio = limite(consumo_medio,cap_max )
    console.log(`Consumo médio: ${consumo_medio}km/l \n ${tanque_cheio}`)
}