function literal() {
  /*
   * When we define the variable separately, we do not need to write the key inside the     object, we just call the name of the variable.
   */
  let name = "Crystal";
  let belt = "Black";

  let test = {
    // name: name,
    // belt: belt,
    chop(x) {
      console.log(`You chopped the enemy ${x} times`);
    },
  };
  console.log(test.chop(5));
}
// literal();

// Another example

// let firstName = "Mohammadhossein";
// let lastName = "Asadi";

// let person = {
//   firstName,
//   lastName,
// };

// let createPerson = (firstName, lastName, age) => {
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName,
//     lastName,
//     fullName,
//     isSenior() {
//       return age > 60;
//     },
//   };
// };

// let result = createPerson("Ross", "Geller", 32);

// console.log(result.firstName);
// console.log(result.lastName);
// console.log(result.fullName);
// console.log(result.isSenior());

// const testerObj = {
//   func1: function () {
//     console.log("executed from func1", this);
//   },
//   func2: () => console.log("executed from func2", this),
// };

// console.log(testerObj.func1());
// console.log(testerObj.func2());

// # Destructuring

// const alphabet = ["A", "B", "C", "D", "E", "F"];
// const numbers = ["1", "2", "3", "4", "5", "6"];

// const [a, , c, ...rest] = alphabet;
// const newArray = [...alphabet, ...numbers];

// console.log(newArray);

// function sumMultiply(a, b) {
//   return [a + b, a * b];
// }
// const array = sumMultiply(2, 3);
// console.log(array);

// # Object destructure

const circle = {
  label: "circleX",
  radius: 2,
  color: "red",
};

// const { label, radius, color } = circle;
// console.log(label, radius, color);

// const person = {
//   name: "Domenic",
//   age: 21,
//   gender: "Male",
// };

// you can assign defult value in destructur
// let { name, age, gender = "Unknown" } = person;

// console.log(name);
// console.log(age);
// console.log(gender);

// const arad = {
//   // precision: 7
// };

// const circleArea = ( {radius} ,{ precision = 2 } = arad   ) =>{
//   return ( Math.PI * radius * radius ).toFixed(precision)
// }
// console.log(circleArea(circle))


// # array destructuring

// const [first, second, , third] = [10, 20, , 30];
// console.log(first, second, third);

// // Example

// const restaurant = {
//   name: "brother's of Rahmani except jafar",
//   address: `${Math.floor(Math.random() * 100 + 1)} Shah yad Ave`,
//   city: "Tehran",
//   state: "Persia",
//   zipcode: "99999",
// };

// const { address, city, state, zipcode, name } = restaurant;

// const fullAddress = `${address} ${city},${state},${zipcode},${name}`;

// console.log(fullAddress);

//////////////#//////////////

// let car = {
//   brand: "BMW",
//   model: 528,
//   isTrue: true,
// };

// console.log(car.model);
// car.model = 330;
// console.log(car.model);
// car.isTrue = false;
// console.log(car.isTrue);

// $ modifyng Object
// car.color = "blue";
// console.log(car.color);

// # Array + Object

// let one = {
//   name: "name one",
//   num: 1,
// };

// let two = {
//   name: "name two",
//   num: 2,
// };

// let three = {
//   name: "name three",
//   num: 3,
// };

// let kitten = [one, two, three];
// console.log(kitten[1].name);

// const totalEggs = 0
// function collectEggs() {
//    totalEggs = 6
// }

// console.log(totalEggs)
// collectEggs()
// console.log(totalEggs)

// let totalEggs = 0
// function collectEggs() {
//   let totalEggs = 6
//   console.log(totalEggs)
// }

// collectEggs()

// let animal = 'Ocuopus'

// function observe(){
//     let animal = 'Squid'
//     console.log(animal)
// }

// observe()
