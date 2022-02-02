// function dom(a, b = 10, c) {
//   console.log(a + b + c);
// }
// dom(10,5,6);
// dom(10,null,10);
// dom(10,undefined,10);

// # Spread

// const youngPeople = ["Dale", "Steve", "Paul"];
// const oldPeople = ["Karl", "Josh", "Paul"];

// const allPeople = [...youngPeople, ...oldPeople];
// allPeople.push("New person");
// console.log(allPeople);

// # Rest

// const [young, old, ...rest] = allPeople;
// console.log(young);
// console.log(old);
// console.log(rest);

// # Strings

// const myString = "Hello, this is a tutirial!";
// const splitMe = [...myString]
// console.log(splitMe);

// # Objects - give me the rest!
// const { a, b, ...c } = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// console.log(a);
// console.log(b);
// console.log(c);

// # Destructuring
// * Array
// const arr = ["hello", "bye", "goodbye"];

// const [one, ...more] = arr;
// console.log(one);
// console.log(more);

// const [bacon, ...rest] = arr;
// console.log(bacon);
// console.log(rest);

// * Object

// const obj = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// const { one, two, ...rest } = obj;
// console.log(one);
// console.log(two);
// console.log(rest);

// const object = {
//   parent: {
//     child: "Boy",
//   },
// };

// const {
//   parent: { child },
// } = object;

// console.log(child);

// const users = [{ id: 1 }, { id: 2 }, { id: 3 }];

// for(const {id} of users){
//     console.log({id});
// }

// const user = { id: 20, username: "jeff" };

// function havefun({ id, username }) {
//   console.log(`hi ${username} your id is : ${id}`);
// }
// havefun(user);

// let a = "foo";
// let b = "bar";

// let temp = a;
// a = b;
// b = temp;

// console.log(temp);
// console.log(a);
// console.log(b);

// * allows a function to accept an indefinite number of arguments as an array

// function sum(...theArgs) {
//   return theArgs.reduce((previous, current) => {
//     return previous + current;
//   });
// }
// console.log(sum(2, 3, 8, 4, 3));

// const cats = ["Persian", "British", "Devon"]; //source code
// const dogs = ["Greyhound", "Saluki", "Retriever"];

// const allPets = cats;
// const petsAndDog = [...cats, ...dogs];
// console.log(cats);

// allPets.push("gorbeh irani");
// cats.push("gorbeh irani");
// console.log(allPets);
// console.log(cats);

// console.log(petsAndDog);

// function raceResults(gold, silver, ...others) {
//   console.log(`gold medal goes to: ${gold}`);
//   console.log(`silver medal goes to: ${silver}`);
//   console.log(`Thanks to: ${others}`);
// }

// raceResults("Ali","mohammad");
// raceResults("Schumacher");
// raceResults("Schumacher", "Hamilton");
// raceResults("Schumacher", "Hamilton", "Vette", "Roseberg", "Button");

// const pageTitle = document.querySelector("h2");
// console.log(pageTitle);
// changeColor(pageTitle);
// function changeColor(element) {
//   pageTitle.style.backgroundColor = "lightblue";
// }
