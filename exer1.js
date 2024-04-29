/*1. Codifique en JavaScript un algoritmo que tome tres números y si el primero es positivo 
calcule el producto de los otros dos, y en otro caso calcule la suma y muestre el resultado
 en la pantalla*/
 
 function numProduct(num1, num2, num3) {
     if (num1 > 0) {
         return num2 * num3
        } else {
            return num2 + num3
        } 
    }
    
    let result = numProduct(2,4,4)
    console.log("El resultado es: " + result);
