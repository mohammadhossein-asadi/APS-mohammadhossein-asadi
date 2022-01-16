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



