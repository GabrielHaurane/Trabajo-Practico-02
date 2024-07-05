/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = prompt(`indique su edad`)
if (edad >= 18) {
    document.write(`usted si tiene la edad para conducir`)
} else {
    document.write(`usted no tiene la edad para conducir`)
}