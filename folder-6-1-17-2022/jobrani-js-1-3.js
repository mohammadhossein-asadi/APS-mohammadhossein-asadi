// setTimeout( ()=>{
//     console.log('setTimeOut')

//     setInterval(()=>{
//         console.log('hi im in setTimeOut')
//     } , 2000)
// }  , 5000   )


// every 1000 millisecond is 1second
// setInterval( () =>{
//     console.log('setInterval!!!!!')
// } , 2000)

// let i = 0;
// const stopAbleSetInterval = setInterval(() => {
//   console.log(i++);

//   if (i === 5) {
//     clearInterval(stopAbleSetInterval);
//   }
// }, 1000);

// lets make a clock
// setInterval(() => {
//   let date = new Date();

//   console.log(
//     `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
//   );
// }, 1000);

// # Filter method

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let moreThanTen = numbers.filter((number) => number >= 10);
// these are the same
console.log(moreThanTen);
// let moreThanTenFunc = numbers.filter(function (number) {
//   return number >= 10;
// });
// console.log(moreThanTenFunc);

// let numberFour = numbers.filter((num) => num === 4);
// console.log(numberFour);

// let numbersLessThanTen = numbers.filter((num) => num < 10);
// console.log(numbersLessThanTen);

// * isEven
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const even = numbers.filter((value) => value % 2 === 0);
// console.log(even);

// * people under 18 years old

// const people = [
//   { name: "Florin", age: 26 },
//   { name: "Ivan", age: 17 },
//   { name: "Jai", age: 15 },
//   { name: "Peter", age: 19 },
// ];

// const adults = people.filter((person) => person.age >= 18);
// console.log(adults);

// # Quiz

//* Write a function which just return strings, greater than 6 characters.

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// # Every & Some methods

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77, 76];

// let isPass = exams.every((passScore) => passScore > 75);
// console.log("isPass: ", isPass);

// //every
// let isPassing = exams.every((passScore) => passScore >= 77);
// console.log("isPassing: ", isPassing);

// // some
// let isAnyOnePassed = exams.some((passScore) => passScore >= 77);
// console.log("isAnyOnePassed: ", isAnyOnePassed);

// // some
// let isGradeA = exams.some((harchizi) => harchizi >= 95);
// console.log("isGradeA:", isGradeA);

// // some
// let isGradeD = exams.some((gradeDyeIn) => gradeDyeIn <= 75);
// console.log("isGradeD: ", isGradeD);

// # Reduce method
// * Takes two parameters

const numbers = [1, -1, 2, 3, 4, 6];

const sumNumber = numbers.reduce((num, sum) => {
  return num + sum;
});

console.log(sumNumber);
