// 4.	Codifique en JavaScript un algoritmo que presenta en pantalla todas las potencias enteras de 2 que sean menores o iguales que 100
//  (usar ciclos). Realizar la traza para las primeras cinco iteraciones. 


console.log("Potencias de 2 menores o iguales que 100:");

let potencia = 1;
let exponente = 0;

while (potencia <= 100) {
    console.log("2^" + exponente + " = " + potencia);
    exponente++;
    potencia = potencia * 2;
}
