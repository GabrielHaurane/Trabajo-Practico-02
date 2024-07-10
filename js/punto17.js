/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:
Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
*/
const frase = prompt("escribe una frase: ").toLowerCase();
const vocales = "aeiou";
let posicionVocales = 0;

for (let i = 0; i < frase.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
      posicionVocales = i;
      break;
    }
  }
  if (posicionVocales > 0) {
    break;
  }
}

document.write(
  `la vocal '${frase[posicionVocales]}' está en la posición ${posicionVocales}`
);