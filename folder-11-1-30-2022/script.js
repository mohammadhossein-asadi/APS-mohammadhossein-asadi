// # Defult parameters

// const myAdder = (num1, num2) => {
//   let added = num1 + num2;
//   return added;
// };

// let result = myAdder(3, 5);
// console.log(result);

// const myMultiplier = (num1, num2) => {
//   return console.log(num1 * num2);
// };
// myMultiplier(2, 4);

// const guestUser = (name = "unName", courseCount = 0) => {
//   return "Hello " + name + " and your course count is: " + courseCount;
// };

// console.log(guestUser()); //* No parameters
// console.log(guestUser("John")); //* It has a parameter
// console.log(guestUser("John", 1)); //* It has two parameters

// # Spread & Rest Operators
// * The spread comes out of the array and divides it into separate values
// let returnedValue = Math.max(2, 5, 7, 4, 2, 8);
// console.log(returnedValue);

// const myObj = {};
// Object.assign(myObj, { a: 2, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

// const sumOne = (a, b) => {
//   return a + b;
// };
// let myNum = [5, 4];
// console.log(sumOne(5, 4));
// console.log(sumOne(5, 4, 1)); //* If we another parameter, it will not be considered
// console.log(sumOne(myNum)); //* Return arguments and undefined
// // # Use Spread operatos
// console.log(sumOne(...myNum)); //* Return arguments and undefined

// * The Rest comes and throws the values ​​into an array and then for of them

// * When we do not know how many parameters we have, we use ...

// const sumTwo = (a, b, ...args) => {
//   console.log('Your args parameter is: ',args);
//   let multi = a * b;
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return [multi, sum];
// };

// console.log(sumTwo(2, 3, 1, 1, 1));

// # Destructuring

const user = ["Mohammadhossein", 3, "student"];
// let role = user[2];
// let name = user[0];

// console.log(`Your role is: ${role} and your name is: ${name}`);

// let [name, courseCount, role] = user;
// console.log(name, courseCount, role);

// const myUser = {
//   name: "Mohammadhossein",
//   courseCount: 5,
//   role: "student",
// };
// console.log(myUser.courseCount);
// // * Destructuring object
// const { name, courseCount, role } = myUser;
// // * after Destructuring
// console.log(courseCount);

// # Dom => Look Dom folder
