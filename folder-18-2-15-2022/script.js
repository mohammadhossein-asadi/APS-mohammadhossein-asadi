// const pro = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a === 2) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// pro
//   .then((message) => {
//     console.log("This is in the then " + message);
//   })
//   .catch((message) => {
//     console.log("This is in the catch " + message);
//   });

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (message) => {
//     console.log(message);
//   }
// );

// const uno = () => {
//   console.log("I am One");
// };

// const dos = () => {
//   setTimeout(() => {
//     console.log("Wooooooooo");
//   }, 3000);
//   console.log("I am Two");
// };
// const tres = () => {
//   console.log("I am Three");
// };
// uno();
// dos();
// tres();

// fetch("https://api.chucknorris.io/jokes/random")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log("DATA is: ", data);
//     let joke = data.value;
//     document.body.innerHTML = `JOKE: ${joke}`;
//   })
//   .catch((err) => console.log(err));

// # 1-Promise

// const fakeRequestCallback = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 3000) {
//         resolve("Connection Timeout :(");
//       } else {
//         reject(`Here is youe fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// fakeRequestCallback("test.com/page1")
//   .then((data) => {
//     console.log("IT WORKED!!! (page1)", data);
//   })
//   .then((data) => {
//     console.log("IT WORKED!!! (page2)", data);
//     return fakeRequestCallback("test.com/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!! (page3)", data);
//   })
//   .catch((err) => {
//     console.log("OH NO , A REQUEST FAILED!!!", err);
//   });

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     console.log("random number is : ", rand);
//     setTimeout(() => {
//       if (rand < 0.1) {
//         resolve(`your fake data here: ${url}`);
//       }

//       reject("request error");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((res) => {
//     console.log("done with request");
//     console.log("data is : ", res);
//   })
//   .catch((err) => {
//     console.log("OH , No!", err);
//   });

// const rainBow = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// rainBow("red", 1000)
//   .then(() => rainBow("orange", 1000))
//   .then(() => rainBow("yellow", 1000))
//   .then(() => rainBow("green", 1000))
//   .catch((err) => console.error(err));

// function greeting() {
//   console.log("hello world");
// }
// greeting();

// const sing = async () => {
// return "la la la";
//   throw "ho no , request error";
// you can make a built-in Error object with new Error constructor function
// throw new Error('there is problem')
// };

// console.log(sing());

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 3000) {
//       failure("Connection timed out :(");
//     } else {
//       success("Here is your fake data from ", url);
//     }
//   }, delay);
// };

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("IT WORKED!!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("IT WORKED AGAIN!!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("IT WORKED AGAIN (3rd req)!!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("ERROR (3rd req)!!!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("ERROR (2nd req)!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("ERROR!!!", err);
//   }
// );

// const fakeRequestCallback = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setInterval(() => {
//       if (delay > 4000) {
//         reject("Connection timed out");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// fakeRequestCallback("test.com/test1")
//   .then((data) => {
//     console.log("it works page1", data);
//     return fakeRequestCallback("test.com/test2");
//   })
//   .then((data) => {
//     console.log("it works page2", data);
//     return fakeRequestCallback("test.com/test3");
//   })
//   .then((data) => {
//     console.log("it works page3", data);
//   })
//   .catch((err) => {
//     console.log("Eroooooooooooooooooooor", err);
//   });

// ######################################## //

// const rainBow = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// rainBow("red", 1000)
//   .then(() => rainBow("green", 1000))
//   .then(() => rainBow("blue", 2000))
//   .then(() => rainBow("gray", 1000))
//   .catch((err) => console.log(err));

// const sing = async () => {
//   //   return "la la la";
//   // throw "ho no , request error";
//   //   you can make a built-in Error object with new Error constructor function
//   throw new Error('there is problem')
// };
// console.log(sing());

// const greet = async function(){ // function expression
//     console.log('hoy')
// }
// async function greet (){ // function declaration
//     console.log('hoy')
// }

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "missing credential";
//   }

//   if (password === "jasem") {
//     return `welcome to www.jasemKala.com dear ${username}`;
//   }

//   throw "invalid password";

// };

// login("", "Darkkkkkkkkkkk")
//   .then((msg) => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error!");
//     console.log(err);
//   });





// const delayedColorChange = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// // this syntax won't wait for the previous functions
// async function rainbow() {
//   delayedColorChange("red", 1000);
//   delayedColorChange("orange", 1000);
// }

// // rainbow();

// // await will wait for a promise
// async function rainbow2() {
//     await delayedColorChange("red", 5000);
//   delayedColorChange("orange", 1000);
// }
// rainbow2();

// async function rainbow3() {
//   await delayedColorChange("red", 1000);
//   await delayedColorChange("green", 1000);
//   await delayedColorChange("yellow", 1000);
//   await delayedColorChange("gray", 1000);
//   await delayedColorChange("black", 1000);
//   await delayedColorChange("blue", 1000);
//   delayedColorChange("orange", 1000);
// }
// // rainbow3();

// // async-await
// async function printRainbow() {
//   // async will return promise so i can await for it.
//   await rainbow3();
//   console.log("end of rainbow");
// }

// printRainbow();


// const fakeRequest = (url) => {
//   return new Promise((resolved, reject) => {
//     const delay = Math.random() * 4500 + 500;
//     setTimeout(() => {
//       if (delay > 1000) {
//         reject("connection timeout");
//       } else {
//         resolved(`here is your fake data: ${url}`);
//       }
//     });
//   });
// };

// async function makeTwoRequests() {
//   let data1 = await fakeRequest("/page1");
//   console.log(data1);
// }

// makeTwoRequests();



// const fakeRequest = (url) => {
//   return new Promise((resolved, reject) => {
//     const delay = Math.random() * 4500 + 500;
//     console.log(delay);
//     setTimeout(() => {
//       if (delay > 2000) {
//         reject("connection timeout");
//       } else {
//         resolved(`here is your fake data: ${url}`);
//       }
//     });
//   });
// };

// the original version of async function is like this.
// anything that probably makes an error should be written in the try{} block and you can handle your errors inside the catch(){} block
// async function makeTwoRequests() {
//   try {
//     let data1 = await fakeRequest("/page1");
//     console.log(data1);
//     let data2 = await fakeRequest("/page2");
//     console.log(data2);
//   } catch (err) {
//     console.log("caught an error!");
//     console.log("error is : ", err);
//   }
// }

// makeTwoRequests();


