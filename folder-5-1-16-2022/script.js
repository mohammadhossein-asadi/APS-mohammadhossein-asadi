// * Reading

// # Syntax

// const myObj = {
//   key: "value",
// };

// const myObj = new Object();
// myObj.key = "value";

// # Type

// # 6 primary types in js

//$ string;
//$ number;
//$ boolean;
//$ null;
//$ undefined;
//$ object;

/**
 ** the simple primitives (string, number, boolean, null, and undefined) are not themselves objects.
 ** In fact, null is its own primitive type.
 ** It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.
 ** function is a sub-type of object (technically, a "callable object").
 */

//  # Built-in Objects

/*
 * There are several other object sub-types, usually referred to as built-in objects.
 */

// # instanceof
// # Parameters

/*
$object
// *The object & to test.
/*
$constructor
*Function to test against
*/

// const strPrimitive = "I am a string";
// typeof strPrimitive; // string
// strPrimitive instanceof String;

// const strObject = new String("I am a string");
// typeof strObject; // object
// strObject instanceof String;

//# Consider:

// const strPrimitive = "I am a string";
// console.log(strPrimitive.length);
// console.log(strPrimitive.charAt(3));

/*
 * Objects, Arrays, Functions, and RegExps (regular expressions) are all objects regardless of whether the literal or constructed form is used.
 */

// # Contents
// const myObj = {
//   a: 2,
// };

// console.log(myObj.a);
// console.log(myObj["a"]);

// const wantA = true;
// const myObject = {
//   a: 2,
// };

// let idx;
// if (wantA) {
//   idx = "a";
// }
// console.log(myObject[idx]);

/*
 * In objects, property names are always strings.
 */

// const myObject = {};
// myObject[true] = "foo";
// myObject[3] = "bar";
// myObject[myObject] = "baz";
// console.log(myObject);

// console.log(myObject["true"]);
// console.log(myObject["3"]);
// console.log(myObject["[object Object]"]);

// # Computed Property Names

// const prefix = "foo";

// const myObject = {
//   [prefix + "bar"]: "hello",
//   [prefix + "baz"]: "world",
// };

// console.log(myObject["foobar"]);
// console.log(myObject["foobaz"]);

// # Property vs. Method

// function foo() {
//   console.log("foo");
// }

// const someFoo = foo;
// const myObject = {
//   someFoo: foo,
// };

// foo;
// someFoo;
// myObject.someFoo;

/*
 * The safest conclusion is probably that "function" and "method" are interchangeable in JavaScript.
 */

// const myObject = {
//   foo: function foo() {
//     console.log("foo");
//   },
// };

// const someFoo = myObject.foo;

// someFoo;
// myObject.foo;

// # Arrays

// const myArray = ["foo", 42, "bar"];
// console.log(myArray.length);
// console.log(myArray[0]);
// console.log(myArray[2]);

/*
 * Arrays are objects, so even though each index is a positive integer, you can also add properties onto the array
 */

// const myArray = ["foo", 42, "bar"];
// console.log(myArray);
// console.log((myArray.baz = "baz"));
// console.log("Array length is => ",myArray.length);
// console.log(myArray.baz);
// console.log(myArray);

// const myArray = ["foo", 42, "bar"];
// console.log((myArray["3"] = "baz"));
// console.log(myArray.length);
// console.log(myArray[3]);
// console.log(myArray);

// # Duplicating Objects

// function anotherFunction() {}
// const anotherObject = {
//   c: true,
// };

// const anotherArray = [];
// const myObject = {
//   a: 2,
//   b: anotherObject,
//   c: anotherArray,
//   d: anotherFunction,
// };
// anotherArray.push(anotherObject, myObject);
// console.log(anotherArray);

// const newObj = Object.assign({}, myObject);
// newObj.a;
// newObj.b === anotherObject;
// newObj.c === anotherArray;
// newObj.d === anotherFunction;

//# Property Descriptors

// const myObject = {};

// Object.defineProperty( myObject, "a", {
// 	value: 2,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true
// } );

// myObject.a; // 2

/*
 * Using defineProperty(..), we added the plain, normal a property to myObject in a manually explicit way. However, you generally wouldn't use this manual approach unless you wanted to modify one of the descriptor characteristics from its normal behavior.
 */

// # Writable

// var myObject = {};

// Object.defineProperty( myObject, "a", {
// 	value: 2,
// 	writable: false, // not writable!
// 	configurable: true,
// 	enumerable: true
// } );

// myObject.a = 3;

// myObject.a; // 2

// # Configurable

// var myObject = {
// 	a: 2
// };

// myObject.a = 3;
// myObject.a;					// 3

// Object.defineProperty( myObject, "a", {
// 	value: 4,
// 	writable: true,
// 	configurable: false,	// not configurable!
// 	enumerable: true
// } );

// myObject.a;					// 4
// myObject.a = 5;
// myObject.a;					// 5

// Object.defineProperty( myObject, "a", {
// 	value: 6,
// 	writable: true,
// 	configurable: true,
// 	enumerable: true
// } ); // TypeError

/*
 * There's a nuanced exception to be aware of: even if the property is already configurable:false, writable can always be changed from true to false without error, but not back to true if already false.
 */

//#  Object Constant

// const myObject = {};

// Object.defineProperty(myObject, "FAVORITE_NUMBER", {
//   value: 42,
//   writable: false,
//   configurable: false,
// });

//# Prevent Extensions

// const myObject = {
// 	a: 2
// };

// Object.preventExtensions( myObject );

// myObject.b = 3;
// myObject.b; // undefined

//# Existence

// const myObject = {
//   a: 2,
// };

// * We can ask an object if it has a certain property without asking to get that property's value:

// console.log("a" in myObject);
// console.log("b" in myObject);

// console.log(myObject.hasOwnProperty("a"));
// console.log(myObject.hasOwnProperty("b"));

//# Iteration

// const myArray = [1, 2, 3];
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

//# for..of
// for (const a of myArray) {
//   console.log(a);
// }

// * Viewing

// let myTodos = {
//   day: "Monday",
//   meetings: 0,
//   meetDone: 0,
//   addMeeting(num) {
//     this.meetings = this.meetings + num;
//   },
//   summary() {
//     return `You have ${this.meetings} meetings today!`;
//   },
// };

// myTodos.addMeeting(4);
// console.log(myTodos.summary());

// let myTodosTwo = {
//     day: "Tuesday",
//     meetings: 12,
//     meetDone: 3,
//     addMeeting: function () {
//         console.log(this);
//     },
// };

// myTodosTwo.addMeeting();

const user = ["Mohammad", 3, "admin"];

// let role = user[2];
// let name = user[0];

// let [name, courseCount, role] = user;

// console.log(role);

// const myUser = {
//   name: "mohammad",
//   courseCount: 5,
//   role: "admin",
// };

// console.log(myUser.courseCount);

// const { name, courseCount, role } = myUser;
// console.log(name,courseCount,role);

// # Spread and Rest operators

// let returnValue = Math.max(2, 5, 7, 4, 2, 9, 8);
// console.log(returnValue);

// const myObj = {};
// Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
// console.log(myObj);

// # Spread
// function sumOne(a, b) {
//   return a + b;
// }
// let myA = [5, 4];
// console.log(sumOne(...myA));

// function sumTwo(...args) {
//     console.log(args);
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(sumTwo(1, 8, 6, 4, 75, 2, 5, 4, 5, 45));
