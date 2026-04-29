// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera
export function cond02():void{
     let input= prompt("Digite um Mês (1-12): ")
     if(!input){
     console.log("Digite algo válido!")
     }else{
     let mes = parseInt(input)
     if(isNaN(mes)){
        console.log("Digite um número")
     }else{
     switch(mes){
     case 1:
        console.log(`O mês correspondente ao número ${mes} é Janeiro`)
        break
     case 2:
         console.log(`O mês correspondente ao número ${mes} é Fevereiro`)
         break
     case 3:
         console.log(`O mês correspondente ao número ${mes} é Março`)
         break
     case 4:
         console.log(`O mês correspondente ao número ${mes} é Abril`)
         break
     case 5: 
         console.log(`O mês correspondente ao número ${mes} é Maio`)
         break
     case 6:
         console.log(`O mês correspondente ao número ${mes} é Junho`)
         break
     case 7: 
         console.log(`O mês correspondente ao número ${mes} é Julho`)
         break
     case 8:
         console.log(`O mês correspondente ao número ${mes} é Agosto`)
         break
     case 9:
         console.log(`O mês correspondente ao número ${mes} é Setembro`)
         break
     case 10:
         console.log(`O mês correspondente ao número ${mes} é Outubro`)
         break
     case 11:
         console.log(`O mês correspondente ao número ${mes} é Novembro`)
         break
     case 12: 
             console.log(`O mês correspondente ao número ${mes} é Dezembro`)
             break
} 
}
}
}
