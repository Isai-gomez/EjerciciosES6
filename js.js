//entrada
const input = [4, [5, 2, 5, 1], [1, 5, 3, 1], [5, 2, 5, 1], [5, 3, 5, 1]];
console.log(input[1][0]);
// ver los elementos de la entrada
input.forEach((element, index) => {
  console.log(element);
  //console.log(index);
});
//Almacenar la suma de cada elemnto en diagonal
let firstLine = 0;
let secontLine = 0;
// hacer la media de cada diagonal
function mediaMatrix(ars) {
  for (let i = 1; i <= ars[0]; i++) {
    firstLine += ars[i][i - 1];
  }
  for (let i = ars[0]; i > 0; i--) {
    secontLine += ars[i][ars[i].length - i];
  }
  return [firstLine, secontLine];
}
console.log(` valor de la function ${mediaMatrix(input)}`);
