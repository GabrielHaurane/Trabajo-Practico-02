/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

const cantidadNumpiramide = parseInt(prompt('ingrese el numero para su pirámide(no mas de 50): '))

if(cantidadNumpiramide <= 50){
    for (let i = 0; i < cantidadNumpiramide; i++) {
        for (let j = 0; j < i; j++) {
            document.write(`<span>${(j + 1)}</span>`)
        }
        document.write('<br>')
    }
}

