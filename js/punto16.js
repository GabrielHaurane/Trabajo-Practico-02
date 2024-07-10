/*
16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
const frase = prompt("escribe una frase: ");
let fraseReves = '';

for (let i = frase.length; i > 0; i--) {
    fraseReves += frase[i - 1]
}

document.write(fraseReves)