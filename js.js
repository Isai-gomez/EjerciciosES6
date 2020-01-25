/*
Dada una matriz donde el primer elemento es el número de filas y columnas. Hacer la suma 
en forma de X. Entrada [3,[1,2,3],[1,2,3],[1,2,3]]; salida (1+2+3) entre (3+2+1).
Example: 
A b C
c B a
B a C

La primera suma se conforma por A+B+C.
La segunda suma se conforma por C+B+B.
Obteniendo los dos totales se suman y se divide entre 2 returnando el resultado.
*/
//entrada
const input = [4, [5, 2, 5, 1], [1, 5, 3, 1], [5, 2, 5, 1], [5, 3, 5, 1]];
const input1 = [2,[1,2],[1,3]];
console.log(input1)

//Almacenar la suma de cada elemnto en diagonal

// Hacer la media entre los dos totales.
function mediaMatrix(ars) {
    let firstLine = 0;
    let secontLine = 0;
  for (let i = 1; i <= ars[0]; i++) {
    firstLine += ars[i][i - 1];
  }
  for (let i = ars[0]; i > 0; i--) {
    secontLine += ars[i][ars[i].length - i];
  }
  return (firstLine + secontLine) / 2;
}

console.log(` valor de la function ${mediaMatrix(input1)}`);
