/*
John works at a clothing store. He has a large
pile of socks that he must pair by color for sale.
Given an array of integers representing the color 
of each sock, determine how many pairs of socks with 
matching colors there are.

For example, there are n=7  socks with colors 
ar=[1,2,1,2,1,3,2]. There is one pair of color 1
 and one of color 2. There are three odd socks left, 
 one of each color. The number of pairs is 2.

Function Description

Complete the sockMerchant function in the editor below.
It must return an integer representing the number of
matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer, the number of socks
represented in. The second line contains  space-separated 
integers describing the colors  of the socks in the pile.

Constraints
* 1<n < 100
* 1< ar[i]<100 where 0<i<n
Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
*/
const input = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const sock = 9;
const input1 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];
const sock1 = 10;

const input2 = [1, 1, 2, 2, 3, 1, 1];
const sock2 = 7;

function sockMerchant(n, ar) {
  let pares = []; // contar número

  const ordenar = ar.sort((a, b) => a - b); //ordenar el array de menor a mayor
  console.log(ordenar);

  for (let i = 0; i < n; i++) {
    // recorrer el ordenar
    if (ordenar[i] === ordenar[i + 1]) {
      // contar si el número se repite
      pares[i] = ordenar[i];
      pares[i + 1] = ordenar[i + 1];
    }
  }
  //si el tamaño no espar le resto el recidúo
  if (pares.length % 2 != 0) {
    pares.length -= pares.length % 2;
    return pares.length / 2;
  }
  const paresE = pares.filter(element => element != undefined);
  console.log(paresE);
  if (paresE.length % 2 != 0) {
    paresE.length -= paresE.length % 2;
  }
  return paresE.length / 2;
  //return pares.length / 2;
  //divido para tener el número de pares
}
console.log(sockMerchant(sock, input));
