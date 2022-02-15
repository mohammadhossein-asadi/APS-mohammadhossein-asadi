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


