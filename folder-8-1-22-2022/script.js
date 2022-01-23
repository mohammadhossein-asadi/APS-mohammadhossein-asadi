// function changeColor(newColor) {
//   var elem = document.getElementById("para");
//   elem.style.color = newColor;
// }

// # Defult params
// function log(num = 10) {
//   console.log(num);
// }
// log(); // 10
// log(20); // 20
// * Another example
// function logName(name = "Ryu", belt = "Red", age = 25) {
//   console.log(
//     `My name is ${name} and my belt color is ${belt} and my age is ${age}`
//   );
// }
// logName();
// logName("Mohammadhossein", "Blue", 20);

// # Spread
// * Function arguments

// const array1 = [10, 20, 30, 40];
// function sum(a, b, c) {
//   return a + b + c;
// }
// const retsult = sum(...array1);
// console.log(retsult);

// # While creating an array

// const array2 = [5, 6, ...array1, "Mohammad"];
// console.log(array2);

// // # Copy an array

// const array2Copy = [...array2];
// array2Copy.push(4000);
// console.log(array2Copy);

// // # Concatenate
// let arrayConcat = [25, 26, 2, 28];
// // arrayConcat.concat(array2Copy)
// arrayConcat = [...arrayConcat, ...array2Copy];
// console.log(arrayConcat);

// # Object
// const myLaptop = {
//   brand: "Asus",
//   color: "Black",
//   ram: "8GB",
// };

// const myLaptop2 = { ...myLaptop };
// myLaptop2.color = "blue";
// console.log(myLaptop2);
// console.log(myLaptop);

///////////////*//////////////////////////////*//////////////////////////////*///////////////

// # Find the Notes Here: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbkVzQXRaYzAyb0xMcDZMV1ZFbGl5T0tVSnQxZ3xBQ3Jtc0tuSXZLRFlVX2M2Vi0yZVBhR3R3VkpzcUY0bk1ZSjhTOE94Mk10VHJPQ3VVUWhDYU9zYnBLMy1ldlBxa0NYNFZMNTIxOG9xQ21vUlRHZ2FlS3hod2NlVnV2WE9sYmFZaGFLb3Ewd3RNaDJYU3VMWkYyMA&q=https%3A%2F%2Fwww.notion.so%2FThe-Spread-Operator-b7608512fbd844ec9f27f31740fb7298

// console.log(Math.min(45, 23, 76, 1, 2, -4));
// console.log(Math.max(45, 23, 76, 1, 2, -4));

// const temperatures = [76, 72, 68, 79, 54, 65];
// console.log(Math.min(...temperatures));
// console.log(Math.max(...temperatures));

// console.log("this is bananas: ","BANANAS");
// console.log("this is bananas: ",..."BANANAS");

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5, 6];
// console.log(arr2);

// const obj = {
//   a: 1,
//   b: "Test",
// };

// const obj2 = {
//   ...obj,
//   c: "Owner",
// };
// console.log(obj2);

// * Spread Operators --> Expand Arra or Ol
// * Rest Parameter/Operators --> Function to get all the parameters or may be of the parameters


