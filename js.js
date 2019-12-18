//entrada
const input = [3, [1, 2.3], [1, 2, 3], [1, 2, 3]];
console.log(input[1][0]);
input.forEach((element, index) => {
  console.log(element);
  //console.log(index);
});
let firstLine = 0;
let secontLine = 0;

function mediaMatrix(ars) {
  for (let i = 1; i <= ars[0]; i++) {
    firstLine += ars[i][i - 1];
  }
  return firstLine;
}
console.log(` valor de la function ${mediaMatrix(input)}`);
