/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/

const texto = prompt('ingrese un texto: ')
let textoModificado = '';
for (let i = 0; i < texto.length; i++) {
    textoModificado += i + 1 === texto.length ? texto.charAt(i) : texto.charAt(i) + '-';
}

document.write(`cadena modificada: ${textoModificado}`)