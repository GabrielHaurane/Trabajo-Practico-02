/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/
const frase = prompt("escribe una frase: ").toLowerCase();
const vocales = "aeiou";
let cantvocales = 0;

for (let i = 0; i < frase.length; i++) {
  for (let j = 0; j < vocales.length; j++) {
    if (frase[i] === vocales[j]) {
      cantvocales++;
    }
  }
}

document.write(`su frase tiene ${cantvocales} vocales`);