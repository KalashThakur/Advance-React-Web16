// Booleans
var isDone = false;
isDone = true;
// **************************************
// Number
var price = 10;
// **************************************
// String
var first_name = "Masai";
var last_name = "School";
var full_name = "".concat(first_name, "_").concat(last_name); //Inference check from the values
// console.log("full_name: ", full_name);
// ******************************************************
// Array
var arr1 = [1, 2, 3, 4];
var arrayOfString = ["Masai", "School"];
arrayOfString.push("Bangalore");
// console.log('arrayOfString:', arrayOfString)
// ******************************************************
//Tuples - Arrays
// 1. The no. of elements in the touple is fixed
// 2. The types of elements are known in advance
var tuple;
tuple = ["Masai", "School", 3, true]; // order is important
var masai = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true
};
var arrOfPerson = [
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
var Color;
(function (Color) {
    Color["RED"] = "red";
    Color["GREEN"] = "green";
    Color["BLUE"] = "blue";
})(Color || (Color = {}));
var greenColor = Color.GREEN;
// console.log('greenColor:', greenColor);
// Others
var u;
var n;
var a;
// ******************************************************
//function
// function sum(a: number,b: number) {
//     return a + b;
// }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 3));
// ******************************************************
// const printName = ({ first_name, last_name, age, isWorking }: person) => {
//   return `${first_name}_${last_name}`;
// };
var printName = function (_a) {
    var first_name = _a.first_name, last_name = _a.last_name, age = _a.age, isWorking = _a.isWorking;
    console.log("".concat(first_name, "_").concat(last_name));
};
var person1 = {
    first_name: "masai",
    last_name: "school",
    age: 3,
    isWorking: true
};
printName(person1);
// ******************************************************
//Union => combining multiple types together
var output; //array that includes elements of both types
output = ['Masai', 3];
// ******************************************************
//Intersection -> combining 2 objects
// let coder: (person & softwareDeveloper) = {
// }
