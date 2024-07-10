/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
*/

let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt("Introduce un nombre:");
    let edad = parseInt(prompt(`Introduce una edad para ${nombre}:`));

    if (isNaN(edad)) {
        alert("Eso no es una edad válida. Inténtalo de nuevo.");
        i--; // Decrementa i para repetir la entrada de este ciclo
    } else {
        nombres.push(nombre);
        edades.push(edad);
    }
}

let edadMayor = Math.max(...edades);
let indiceMayor = edades.indexOf(edadMayor);

alert("El nombre de la persona mayor es: " + nombres[indiceMayor]);