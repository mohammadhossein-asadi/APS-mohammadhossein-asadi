//# Scope

// var x = 1;
// {
//   var x = 2;
// }
// console.log(x);

//# By contrast, identifiers declared with let and const do have block scope

// let x = 1;
// {
//   let x = 2;
// }
// console.log(x);

// => The x = 2 is limited in scope to the block in which it was defined.
// => The same is true of const

// const c = 1;
// {
//   const c = 2;
// }
// console.log(c); // logs 1 and does not throw SyntaxError...

/*

* In this first code, the value of the variable is 1, and the log console gives the same output
* But inside the block scope, the value of 2 is changed to a variable and after the answer, it is as follows

# first result is 1
# secound result is undefined

*/

// function calc() {
//   let number = 10;
//   return number;
// }
// console.log(number);

// => number is not defined

//# Block Scope
/**
 ** if statement
 */

if (true) {
  var varVariable = "this is true";
}
// console.log(varVariable);

if (true) {
  let letVariable = "this is true";
}
// console.log(letVariable);

// # Global Scope

// var a = 2022;
// let b = 2020;

// function test() {
//   return b;
// }

// # function scope

// function testFunc() {
//   var a = 20;
// }

// console.log(a);

// # Block Scope

// if (100 > 20) {
//   let a = 20;
// }

// console.log(a);

// # Lexical Scope
/*
 * The internal function has access to all the variables defined in the external function
 */
// function init() {
//   var firstName = "Firstname";
//   function sayFirstName() {
//     console.log(firstName);
//   }
//   sayFirstName();
// }
// init();
// console.log(firstName);

// # five object example

const monitor = {
  screenSize: "23 inch",
  screnResolution: "1920 x 1080",
  quality: "4k",
  isTouch: true,
};

const keyboard = {
  brand: "Beyond",
  color: "Black",
  backLight: true,
};

const mouse = {
  color: "Black",
  rgb: true,
  isGaming: true,
  button: 7,
};

const pc = {
  motherBoard: "gigabyte",
  hardIsSsd: true,
  ram: 16,
  graphic: "RX 580",
};

const pubg = {
  category: "Shoting",
  isBattelRoyal: true,
  isOnline: true,
  size: "3Gb+",
};
