// Matriz longitud 3x4
const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3]
];

for (let index = 0; index < matriz.length; index++) {
    let sumFilas = 0
    for (let j = 0; j < matriz[0].length; j++) {
        sumFilas = sumFilas + matriz[index][j]; 
    }
    console.log("La suma de las filas es : " + sumFilas)
}

for (let index = 0; index < matriz[0].length; index++) {
    let sumCols = 0
    for (let j = 0; j < matriz.length; j++) {
        sumCols = sumCols + matriz[j][index]; 
    }
    console.log("La suma de las columnas es : " + sumCols)
}