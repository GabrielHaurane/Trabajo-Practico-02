/*
5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’

*/

  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let dni;
  const resto = dni % 23;
  while (true) {
      dni = prompt("Introduce el número del DNI (0-99999999) o pulsa cancelar para salir:");

      if (dni === null) {
          break; // El usuario ha pulsado cancelar
      }

      numeroDNI = parseInt(dni);
      
      if (dni < 0 || numeroDNI > 99999999) {
          alert("El número debe estar entre 0 y 99999999. Por favor, inténtalo de nuevo.");
      } else {
          const letraDNI = letras.charAt(resto);
          alert(`La letra correspondiente a tu DNI es: ${letraDNI}`);
      }
  }
