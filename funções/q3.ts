// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***
export function func03():void{
    function triangleFactory(n:number):any {
    for (let i = 1; i<= n ; i++){
         let lines:string = "";
         for(let a = 1 ; a<= i ; a++){
             lines+= "*";
         }
         console.log(lines)
     }
 }
 triangleFactory(10)
}