const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";

const request = new XMLHttpRequest();

request.open("GET", url1);
request.send();

request.onload = () => {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    console.log("Not found...");
  }
};

const getTodos = (url) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.onload = () => {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else {
        reject("Not found...");
      }
    };
  });
};

// getTodos(url1, function (data, error) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(data);
//     getTodos(url2, function (data, error) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(data);
//         getTodos(url3, function (data, error) {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// });

getTodos(url1)
  .then((data) => {
    console.log(data);
    return getTodos(url2);
  })
  .then((data) => {
    console.log(data);
    return getTodos(url3);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
