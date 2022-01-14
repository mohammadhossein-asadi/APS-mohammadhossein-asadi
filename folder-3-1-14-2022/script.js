// # This

// method => obj
// function => global (window, g;obal)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],
//   showTags() {
//     this.tags.forEach((e) => {
//       console.log(this.title, e);
//     }, this);
//   },
// };
// video.showTags();

// const cat = {
//   name: "cat",
//   color: "grey",
//   breed: "persian cat",
//   meow() {
//     console.log(`${this.color} ${this.breed} cats are amazing`)
//     const arrow = () =>{
//       console.log(this)
//     }
//     arrow()
//   },
//   thisIs: `this is ${this}`,
//   arrow : () =>{
//     console.log('arrow' , this)
//   }
// }

// console.log(cat.meow())

// const meow2 = cat.meow

// // this is undefined because the cat object doesn't have any meow2 method
// console.log(cat.meow2)

// // but we can store the meow method inside another variable
// console.log(meow2)

// console.log(cat.thisIs)

// cat.arrow()

// // welcome to javascript :)
// console.log(this)

// # Higher order function

// function rollDie() {
//   const roll = Math.floor(Math.random() * 6) + 1;
//   console.log(roll);
// }

// function callTwice(func) {
//   func();
//   func();
//   func();
//   func();
// }

// // rollDie()
// callTwice(rollDie);

// # Math method

// const myMath = {
//   PI: 3.14,
//   square(num) {
//     return num * num;
//   },
//   cube(num) {
//     return num * num * num;
//   },
//   sayName() {
//     console.log("hi amir");
//   },
// };

// console.log(myMath.square(12));
// console.log(myMath.cube(12));
// console.log(myMath.PI);
// console.log(Math.PI);
// console.log(Math.random());
// console.log(Math.random);

// console.log("mohammad".toUpperCase());

// let person1 = {
//   name: "Alice",
//   age: 25,
// };

// let person2 = {
//   name: "Bob",
//   age: 30,
// };

// let person3 = {
//   name: "John",
//   age: 20,
// };

// let persons = [person1,person2,person3] // Complete here
// console.log(persons);

// # ArrowThis

// const person = {
//   firstName: "Donald",
//   lastName: "Trump",
//   fullName() {
//     // local scope
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
//   hisName: () => {
//     // global scope
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
//   },
//   shoutName() {
//     setTimeout(function () {
//       console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
//   //take a look at window.setTimeout
//   sayName: function () {
//     setTimeout(() => {
//       console.log(this);
//       console.log(this.fullName());
//     }, 3000);
//   },
// };

// console.log(person.fullName())
// console.log(person.hisName())
// console.log(person.shoutName())
// console.log(person.sayName());

// # Object key & values

// const phone = {
//   display: "Super Retina",
//   os: "ios 15.2",
//   chpset: "Apple A15 Bionic",
// };
// // phone leys
// console.log(Object.keys(phone));
// // phone values
// console.log(Object.values(phone));

// const nameOfperson = {
//   mohammadhossein: 20,
//   Benyamin: 24,
//   arad: 20,
//   Josh: 35,
// };

// const upperName = Object.keys(nameOfperson);

// const uperCaseName = upperName.map((e) => e.toUpperCase());

// console.log(uperCaseName);

// const myPhone = {
//   brand: "Honor",
//   model: "7X",
//   color: "Blue",
//   screenSize: 6,
// };

// for (let n in myPhone) {
//   console.log(`${n} => ${myPhone[n]}`);
// }

const grades = {
  tom: 20,
  josh: 17,
  henry: 19,
};

for (let g in grades) {
  if (grades[g] > 16) console.log(`${g.toUpperCase()} - ${grades[g]}`);
}
