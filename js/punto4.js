/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/


let sumaTotal = 0;

while (true) {
    let input = prompt("Introduce un número (o presiona 'Cancelar' para terminar):");

    if (input === null) {  // Si se pulsa "Cancelar"
        break;
    }

    let numero = parseInt(input);

    if (isNaN(numero)) {
        alert("Eso no es un número válido. Inténtalo de nuevo.");
    } else {
        sumaTotal += numero;
    }
}

alert("La suma total de los números introducidos es: " + sumaTotal);
