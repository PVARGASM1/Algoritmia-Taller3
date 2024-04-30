// 5.	Codifique en JavaScript un algoritmo que sume los números pares comprendidos 
// entre 50 y 200, inclusive.

let sum = 0 

for (let index=50; index <=200; index++) {
    if (index % 2 === 0){
        sum = sum + index
    }
}
console.log ("La suma de los números pares entre 50 y 200 son: " + sum)  