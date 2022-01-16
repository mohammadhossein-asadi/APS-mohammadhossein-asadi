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
*The object to test.
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


