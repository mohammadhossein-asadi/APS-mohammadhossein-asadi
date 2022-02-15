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


