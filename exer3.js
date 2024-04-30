// 3.	Codifique en JavaScript un algoritmo que imprima y sume la serie de números múltiplos
//  de 3 hasta 100, es decir, 3, 6, 9, 12, ... 99 (usar ciclos).  Realizar la traza para las
//   primeras 5 iteraciones.

for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0) {
        console.log("El número " + index + " es multiplo de 3.")
    }
}