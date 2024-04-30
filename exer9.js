// 9.	Codifique en JavaScript un algoritmo que dado un vector con cinco notas obtenidas por un alumno 
// (comprendidas entre 0 y 10). A continuación, debe mostrar todas las notas, la nota promedio, la nota más alta que
//  ha sacado y la menor.

let allNotes = [ 5, 7, 1, 9, 10]

const maxNote = allNotes.reduce((a, b) => {
    return b > a ? b : a;
  });
  
  console.log("La nota máxima es: " + maxNote); // 10
  
const minNote = allNotes.reduce ((x, y) => {
    return y > x ? x : y
})
 console.log ("La nota mínima es: " + minNote); //1

 const sumNotes = allNotes.reduce((a,b) => {
    return a + b
 })

 const promNote = sumNotes/allNotes.length

 console.log("El promedio de notas es: " + promNote);