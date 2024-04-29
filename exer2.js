/*2.	Codifique en JavaScript un algoritmo que tome tres números enteros y decida si uno 
de ellos coincide con la suma de los otros dos.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa el num1: ', (num1) => {
  rl.question('Ingresa el num2: ', (num2) => {
    rl.question('Ingresa el num3: ', (num3) => {
      num1 = parseInt(num1);
      num2 = parseInt(num2);
      num3 = parseInt(num3);

      sum1 = num2 + num3;
      sum2 = num1 + num3;
      sum3 = num1 + num2;

      if (num1 === sum1) {
        console.log("El num1 coincide con la suma de num2 + num3: " + num2 + " + " + num3);
      } else if (num2 === sum2) {
        console.log("El num2 coincide con la suma de num1 + num3: " + num1 + " + " + num3);
      } else if (num3 === sum3) {
        console.log("El num3 coincide con la suma de num1 + num2: " + num1 + " + " + num2);
      } else {
        console.log("Ninguno de los números coincide con la suma de los otros dos.");
      }

      rl.close();
    });
  });
});
