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

// Primera opcion

/*
 let dni = parseInt(prompt(`indique su DNI sin puntos`, `45232411`));
 let division = parseInt(dni % 23);
 
   if (dni >= 0 && dni <= 99999999) {
     switch (division) {
       case 0:
         document.write(`T`);
         break;
       case 1:
         document.write(`R`);
         break;
       case 2:
         document.write(`W`);
         break;
       case 3:
         document.write(`A`);
         break;
       case 4:
         document.write(`G`);
         break;
       case 5:
         document.write(`M`);
         break;
       case 6:
         document.write(`Y`);
         break;
       case 7:
         document.write(`F`);
         break;
       case 8:
         document.write(`P`);
         break;
       case 9:
         document.write(`D`);
         break;
       case 10:
         document.write(`X`);
         break;
       case 11:
         document.write(`B`);
         break;
       case 12:
         document.write(`N`);
         break;
       case 13:
         document.write(`J`);
         break;
       case 14:
         document.write(`Z`);
         break;
       case 15:
         document.write(`S`);
         break;
       case 16:
         document.write(`Q`);
         break;
       case 17:
         document.write(`V`);
         break;
       case 18:
         document.write(`H`);
         break;
       case 19:
         document.write(`L`);
         break;
       case 20:
         document.write(`C`);
         break;
       case 21:
         document.write(`K`);
         break;
       case 22:
         document.write(`E`);
         break;
     }
   } else {
     document(`usted no indico un numero`);
   }
*/

// Segunda opcion

/*
   const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
   let dni;
   const resto = dni % 23;
   while (true) {
       dni = prompt("Introduce el número del DNI (0-99999999) o pulsa cancelar para salir:");

       if (dni === null) {
           break;  El usuario ha pulsado cancelar
       }

       numeroDNI = parseInt(dni);
      
       if (dni < 0 || numeroDNI > 99999999) {
           alert("El número debe estar entre 0 y 99999999. Por favor, inténtalo de nuevo.");
       } else {
           const letraDNI = letras.charAt(resto);
           alert(`La letra correspondiente a tu DNI es: ${letraDNI}`);
       }
   }
  */
