// let dice1 = Math.floor(Math.random() * 6 + 1);
// let dice2 = Math.floor(Math.random() * 6 + 1);

// console.log("dice1 => ", dice1);
// console.log("dice2 => ", dice2);
// // console.log("sum of dices => ",dice1 + dice2);
// let roll = `you rolled a ${dice1} and a ${dice2}. they sum to ${dice1 + dice2}`;
// console.log(roll);

// console.log("Hello Dear Friends 😉");

// alert("You are very very Good girl😎")

// let name = prompt("please go out");
// console.log(name);

// let age = prompt("What is your age: ");
// let ageNum = parseInt(age);
// let birthday = 1400 - ageNum;
// console.log("Your age is => ", birthday);

// # if

// let age = 60;
// if (age === 40) {
//   console.log("You are aval 40 40iiiiii");
// } else if (age <= 40) {
//   console.log("you are very strong");
// } else {
//   console.log("good byeeeeeeeeee ");
// }

// let a = 21;
// if (a % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

let password = "mohammad";

if (password.length > 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Your password is strong");
  } else {
    console.log("your password include empty string");
  }
} else {
  console.log("your password is not");
}
