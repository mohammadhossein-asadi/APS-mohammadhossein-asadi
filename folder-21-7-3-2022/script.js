const arr = [1, 2, 3];

arr.sing = function (arg) {
  return console.log(arg);
};

arr.sing(4);
arr.push(4);

// console.log(arr);

const body = document.body;
// console.dir(body);

String.prototype.groot = (name) => alert(`hiii ${name}`);

// const cat = "blueCat";

// cat.groot("groot");

// cat.toLowerCase();

// const dog = "eco";

// dog.groot("eco");

// String.prototype.yell = function () {
//   console.log(this.toUpperCase());
// };
// "Hello".yell();

//# Factory function

// const user1 = {
//   name: "moahmmadhossein",
//   email: "mohammadhossein@gmail.com",
//   login() {
//     return `The ${this.name} has just logged in`;
//   },
//   logout() {
//     return `The ${this.name} has just logged out`;
//   },
// };

// const user2 = {
//   name: "moahmmad",
//   email: "mohammad@gmail.com",
//   login() {
//     return `The ${this.name} has just logged in`;
//   },
//   logout() {
//     return `The ${this.name} has just logged out`;
//   },
// };

// function makeUser(username, email) {
//   const user = {};
//   user.name = username;
//   user.email = email;
//   user.info = function () {
//     const { name, emailAddress } = this;
//     return `user ${name} has this email: ${emailAddress}`;
//   };

//   user.login = function () {
//     return `${user.name} has just logged in`;
//   };

//   user.email = function () {
//     return `The user email is: ${this.emailAddress}`;
//   };
//   return user;
// }

// const person1 = makeUser("mohammad", "mohammad@gmail.com");
// const person2 = makeUser("ali", "ali@gmail.com");
// console.log(person1, person2);
// console.log(person1.login());

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// console.log(makeColor(35, 255, 150).rgb());

// const firstColor = makeColor(35, 255, 150);
// console.log(firstColor);

// const black = makeColor(0, 0, 0);

// console.log(`${firstColor.hex()}\n, ${firstColor.rgb()}\n, ${black.hex()}`);

function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

const white = new Color(35, 0, 190);
// console.log(white);

// # Class

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.count = 0;
  }
  logout() {
    console.log(`the user ${this.username} has just logged out :(`);
    return this;
  }
  logout() {
    this.count++;
    console.log(`the user ${this.username} has just logged in :)`);
    return this;
  }
  password() {
    console.log("the user password is 1234");
  }
  loginCounter() {
    console.log(`the user ${this.username} has logged in ${this.count} times`);
    return this;
  }
}
