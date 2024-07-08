/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse 
todas las cadenas concatenadas con un guión -.

*/


let fraseCompleta = ``;

do {
  const palabraIngresada = prompt(`ingrese una frase`);
  if (palabraIngresada != null) {
    if (fraseCompleta.length === 0) {
      fraseCompleta = palabraIngresada;
    } else {
      fraseCompleta += `-` + palabraIngresada;
    }
  }
  console.log(`palabraIngresada`);
} while (confirm(`desea continuar?`));

document.write(`frase ingresada: ${fraseCompleta}`);

// const prueba = confirm(`desea continuar?`)
// console.log(prueba)
