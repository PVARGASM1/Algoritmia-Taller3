// 7.	Codifique en JavaScript un algoritmo que lea la hora de un día de notación de 24 horas y la respuesta en 
// notación de 12 horas, por ejemplo, si la entrada es 13, la salida será 1 p.m

console.log("Ingrese la hora militar: ");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    // Convertir la entrada a un número entero
    let horaMilitar = parseInt(data.toString()); 

    if (horaMilitar >= 0 && horaMilitar <= 24) { 
        if (horaMilitar <= 12) {
            console.log("La hora en formato 12h es: " + horaMilitar + ":00 AM");
        } else {
            let hora12h = horaMilitar - 12;
            console.log("La hora en formato 12h es: " + hora12h + ":00 PM");
        }
    } else {
        console.log("La hora ingresada no es válida.");
    }
});
