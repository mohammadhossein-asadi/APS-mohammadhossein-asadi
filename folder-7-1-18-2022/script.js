// # empty object can be created using one of two syntaxes
let user = new Object();
let user = {};

let user = {
  name: "John",
  age: 30,
};

// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// setInterval(() => {
//     console.log("Hello world!");
// }, 2000);

// let i = 0;
// const stop = setInterval(() => {
//   console.log(i++);
//   if (i === 5) {
//     clearInterval(stop);
//   }
// }, 1000);

const numbers = [1, 2, 30, 4, 5, 60, 7, 80];

// let moreThanTen = numbers.filter((num) => num >= 10);

// console.log(moreThanTen);

// let numberfour = numbers.filter((value) => value === 4);
// console.log(numberfour);

// const even = numbers.filter((number) => number % 2 === 0);
// console.log(even);

// const words = [
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
// ];

// let x = words.filter(y => y.length>6)
// console.log(x);

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 76];

// let isPass = exams.every((score) => score > 75);
// console.log("isPass: ", isPass);
// let isPass = exams.some((score) => score > 97);
// console.log("isPass: ", isPass);

const number = [1, -1, 2, 3, 4, 6];

const sumNumber = number.reduce((sum, num) => {
  return sum + num;
});

console.log(sumNumber);
