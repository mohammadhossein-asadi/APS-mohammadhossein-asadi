// # Callback version

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 3000) {
//       failure("Connection Timeout :(");
//     } else {
//       success(`Here is your fake data from ${url}`);
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

// # Promise version

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection timeout ...");
      } else {
        resolve(`Here is your fake data here ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("IT WORKED!!!!!! (page1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!!!!! (page2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("IT WORKED!!!!!! (page3)");
//           })
//           .catch(() => {
//             console.log("OH NO, ERROR!!! (page3)");
//           });
//       })
//       .catch(() => {
//         console.log("OH NO, ERROR!!! (page2)");
//       });
//   })
//   .catch(() => {
//     console.log("OH NO, ERROR!!! (page1)");
//   });

// * The cleanest option with then/catch

// fakeRequestPromise("test.com/1")
//   .then((data) => {
//     console.log("it worked page 1", data);
//     return fakeRequestPromise("test.com/2");
//   })
//   .then((data) => {
//     console.log("it worked page 2", data);
//     return fakeRequestPromise("test.com/3");
//   })
//   .then((data) => console.log("it worked page 3", data))
//   .catch((err) => console.log("oh no, a request failed", err));

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     console.log(`Random number is: ${rand}`);
//     setTimeout(() => {
//       if (rand < 0.1) {
//         resolve(`Your fake data here ${url}`);
//       } else {
//         reject("request error");
//       }
//     }, 1000);
//   });
// };

// fakeRequest("test/1")
//   .then((res) => {
//     console.log("done with request");
//     console.log("data is: ", res);
//   })
//   .catch((err) => console.log("Oh , No!", err));

// const rainbow = (color, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// };

// rainbow("red", 1000)
//   .then(() => rainbow("orange", 1000))
//   .then(() => rainbow("yellow", 1000))
//   .then(() => rainbow("green", 1000))
//   .catch((err) => console.log(err));

// a regular function

function greeting() {
  console.log("Hello world!");
}
// greeting()

const sing = async () => {
  // return "la la la"
  throw "oh no request error";
  // throw new Error("there is a problem")
};
// console.log(sing());

async function greet() {
  console.log("Hellooooo");
}
// greet()

// const login = async (username, password) => {
//   if (!username || !password) {
//     throw "Missing credential";
//   }
//   if (password === "jasem") {
//     return `Welcome to www.mohammadhossein.com dear ${username}`;
//   }

//   throw "Invalid password";
// };

// login("mohammadhossein", "jasem")
//   .then((msg) => {
//     console.log("Logged in!");
//     console.log(msg);
//   })
//   .catch((err) => console.log("Error", err));

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow2() {
  await delayedColorChange("red", 1000);
  delayedColorChange("orange", 1000);
}
// rainbow2();

async function rainbow3() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("gray", 1000);
  await delayedColorChange("black", 1000);
  await delayedColorChange("blue", 1000);
  delayedColorChange("orange", 1000);
}
// rainbow3();

async function printRainbow() {
  await rainbow3();
  console.log("End of rainbow");
}
// printRainbow()

const fakeRequest = (url) => {
  return new Promise((resolved, reject) => {
    const delay = Math.random() * 4500 + 500;
    setTimeout(() => {
      if (delay > 1000) {
        reject("connection timeout");
      } else {
        resolved(`here is your fake data: ${url}`);
      }
    });
  });
};

async function makeTwoRequest() {
  let data = await fakeRequest("test.com");
  console.log(data);
}
// makeTwoRequest()

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (err) {
    console.log("caught an error!");
    console.log("error is : ", err);
  }
}

// makeTwoRequests()
