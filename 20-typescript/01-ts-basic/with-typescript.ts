function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 5);

console.log(result);

// Just use the command to compile the file, it will compile the ts file into a js file
// tsc with-typescript.ts

// with-typescript.js
// function add(a, b) {
//     return a + b;
// }
// var result = add(2, 5);
// console.log(result);
