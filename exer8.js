// 8.	Codifique en JavaScript un algoritmo para crear un vector de cinco elementos de 
// cadenas de caracteres, inicializa el vector con datos leídos por el teclado, copie 
// los elementos del vector en otro vector, pero en orden inverso, y muéstrelo en la pantalla.

console.log("Ingresar los datos de los vectores: ");

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let arrayOriginal = [];

rl.on('line', (input) => {
    
    arrayOriginal.push(input);

    if (arrayOriginal.length === 5) {
       
        let arrayInverso = [];
        for (let i = arrayOriginal.length - 1; i >= 0; i--) {
            arrayInverso.push(arrayOriginal[i]);
        }

        // Mostrar el vector original e inverso
        console.log("Array original:");
        console.log(arrayOriginal);
        console.log("Array inverso:");
        console.log(arrayInverso);

        rl.close();
    }
});


