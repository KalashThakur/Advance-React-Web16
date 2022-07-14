// Booleans
let isDone: boolean = false;
isDone = true;

// **************************************

// Number
let price: number = 10;

// **************************************

// String
let first_name: string = "Masai";
let last_name: string = "School";
let full_name = `${first_name}_${last_name}`; //Inference check from the values
// console.log("full_name: ", full_name);

// ******************************************************

// Array
let arr1: number[] = [1, 2, 3, 4];
let arrayOfString: string[] = ["Masai", "School"];
arrayOfString.push("Bangalore");
// console.log('arrayOfString:', arrayOfString)

// ******************************************************

//Tuples - Arrays
// 1. The no. of elements in the touple is fixed
// 2. The types of elements are known in advance
let tuple: [string, string, number, boolean];
tuple = ["Masai", "School", 3, true]; // order is important

// ******************************************************

//Object

// interface person {
//     first_name: string;
//     last_name: string;
//     age: number
// };
//or
//creating a blue-print for object
type person = {
  first_name: string;
  last_name: string;
  age?: number;
  isWorking: boolean;
};

type softwareDeveloper = {
    skills: string
}
const masai: person = {
  first_name: "masai",
  last_name: "school",
  age: 3,
  isWorking: true,
};

let arrOfPerson: person[] = [
  { first_name: "a", last_name: "d", age: 3, isWorking: false },
  { first_name: "b", last_name: "d", age: 3, isWorking: false },
  { first_name: "c", last_name: "d", age: 3, isWorking: false },
];

// ******************************************************

//Enums -> a group of named constants
//  (enum is kind of object in js)

// (const ADD = "ADD")

// enum Color{
//     RED, // 0 --> will give default value 0 if value no given (index)
//     GREEN, // 1 --> will give default value 1 if value no given (index)
//     BLUE, // 2 --> will give default value 2 if value no given (index)
// }

enum Color {
  RED = "red", // 0
  GREEN = "green", // 1
  BLUE = "blue", // 2
}

let greenColor = Color.GREEN;
// console.log('greenColor:', greenColor);

// Others
let u: undefined;
let n: null;
let a: any;

// ******************************************************

//function
// function sum(a: number,b: number) {
//     return a + b;
// }


const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(2, 3));

// ******************************************************

// const printName = ({ first_name, last_name, age, isWorking }: person) => {
//   return `${first_name}_${last_name}`;
// };

const printName = ({ first_name, last_name, age, isWorking }: person): void => {
    console.log(`${first_name}_${last_name}`);
  };

const person1: person = {
  first_name: "masai",
  last_name: "school",
  age: 3,
  isWorking: true,
};

printName(person1);

// ******************************************************

//Union => combining multiple types together
let output: (number | string)[] //array that includes elements of both types
output = ['Masai', 3]

// ******************************************************

//Intersection -> combining 2 objects
// let coder: (person & softwareDeveloper) = {

// }