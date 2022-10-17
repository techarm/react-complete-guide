// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function Type, parameters

// Primitives
let age: number;
let username: string;
let isRegister: boolean;

age = 30;
username = "techarm";
isRegister = true;

// Arrays
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "techarm",
  age: 30,
};

// Type inference
let course = "Hello World!";
course = "new string";

// Union type
let bookId: string | number;
bookId = 1;
bookId = "b1";

// Type aliases
type Person = {
  name: string;
  age: number;
};

let p1: Person;
p1 = {
  name: "techarm",
  age: 30,
};

// Fcuntions & types
// function sub(a: number, b: number): number
function sub(a: number, b: number) {
  return a - b;
}

// function print(value: any): void
function printMessage(value: any) {
  console.log(value);
}

// Generics
// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

// const demoArray = [1, 2, 3];
// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray[0].split(""); // runtime error

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split("");  // compile error
stringArray[0].split("");
