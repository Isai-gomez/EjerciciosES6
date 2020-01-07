/*
****SPREAD OPERATOR****
Podemos hacer copias o extender string, array y objetos. Se 
puede sacar clones para no afectar aha todos.
*/

/*Cómo usar con los string*/
const string = "Contengo caracteres";
// const operator = [...string].map(element => element + "*");
//const operator = [...string];
// console.log(operator);
// console.log(string);

/*Cómo usar con los objetos*/
const person = {
  name: { first: "Vishal", last: "Raj" },
  address: { city: "Dubai", country: "UAE" }
};
const personCopy = { ...person };
person.address.pobox = 123456;
person.dateofbirth = { año: 1983, mes: 3, fecha: 21 };
console.log(personCopy); // personCopy no tiene dateofbirth, pero personCopy.address tiene pobox
console.log(person);
