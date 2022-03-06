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

const apiToGet =
  '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}';

// console.log(apiToGet);
// const apiPrice = apiToGet.ticker.price;
// console.log(apiPrice);

// * Convert to object

// const toJason = JSON.parse(apiToGet);
// // console.log(toJason);

// const apiPrice = toJason.ticker.price;
// // console.log(apiPrice);

// // * Convert to json

// const apiToPost = {
//   ticker: {
//     base: "BTC",
//     target: "USD",
//     price: "38280.58063610",
//     volume: "97811.05442583",
//     change: "-202.19261818",
//   },
//   timestamp: 1621704005,
//   success: true,
//   error: "",
// };

// const toApiFormat = JSON.stringify(apiToPost)
// console.log(toApiFormat);

//* XMLHttpRequest

// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("ALL done with request!!!");
//   console.log(req);
//   const data = JSON.parse(req.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log("Error!!!");
//   console.log(req);
// };

// req.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// req.send();

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     console.log("Response wating for parse...", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data parsed...", data);
//   })
//   .catch((err) => console.log("Oh no error", err));

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((res) => {
//     console.log("Response wating to parse...", res);
//     if (res.status === 404) {
//       throw "Error fetching data";
//     }
//     return res.json();
//   })
//   .then((data) => console.log("data parsed ... ", data))
//   .catch((err) => console.log("Oh no Error! ", err));

// fetch("https://apitester.ir/api/Categories")
//   .then((data) => data.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchUser = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   console.log(res);
//   const data = await res.json();
//   return data;
// };

// fetchUser()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// const fetchUsers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Something went wrong", error);
//   }
// };

// fetchUsers();

// axios
//   .get("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// const fetchUsers = async () => {
//   try {
//     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchUsers()

// const getDadJoke = async () => {
//   try {

//     const res = await axios.get("https://icanhazdadjoke.com/", {
//       headers: {
//         Accept: "application/json",
//       },
//     });
//     return res.data.joke;
//   } catch (error) {
//     console.log("no jokes available , sorry");
//   }
// };


// console.log(getDadJoke());

// const jokes = document.querySelector("#jokes");
// const button = document.querySelector("button");

// const addNewJoke = async () => {
//   const jokeText = await getDadJoke();
//   const newLi = document.createElement("li");

//   newLi.append(jokeText);
//   jokes.append(newLi);
// };

// button.addEventListener("click", addNewJoke);
