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

// const white = new Color(35, 0, 190);
// console.log(white);

// # Class

// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//     this.count = 0;
//   }

//   logout() {
//     console.log(`the user ${this.username} has just logged out :(`);
//     return this;
//   }
//   login() {
//     this.count++;
//     console.log(`the user ${this.username} has just logged in :)`);
//     return this;
//   }
//   password() {
//     console.log("the user password is 1234");
//   }
//   loginCounter() {
//     console.log(`the user ${this.username} has logged in ${this.count} times`);
//     return this;
//   }
// }

// const userOne = new User("mohammadhossein", "mohammadhossein@gmail.com");
// const userTwo = new User("Arman", "Arman@gmail.com");

// console.log(userOne, userTwo);
// console.log(userOne.login());
// console.log(userOne.logout());
// console.log(userOne.loginCounter());

///////////////////////////////////////

// class Color {
// constructor is a keyword
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// }

// const red = new Color(255, 67, 89, "tomato");
// const white = new Color(255, 255, 255, "white");

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//     this.calcHSL();
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hsl() {
//     const { h, s, l } = this;
//     return `hsl(${h},${s}%, ${l}%)`;
//   }
//   fullySaturated() {
//     const { h, l } = this;
//     return `hsl(${h},100%, ${l}%)`;
//   }
//   opposite() {
//     const { h, s, l } = this;
//     const newHue = (h + 180) % 360;
//     return `hsl(${newHue},${s}%, ${l}%)`;
//   }
//   calcHSL() {
//     let { r, g, b } = this;
//     // Make r, g, and b fractions of 1
//     r /= 255;
//     g /= 255;
//     b /= 255;

//     // Find greatest and smallest channel values
//     let cmin = Math.min(r, g, b),
//       cmax = Math.max(r, g, b),
//       delta = cmax - cmin,
//       h = 0,
//       s = 0,
//       l = 0;
//     if (delta == 0) h = 0;
//     else if (cmax == r)
//       // Red is max
//       h = ((g - b) / delta) % 6;
//     else if (cmax == g)
//       // Green is max
//       h = (b - r) / delta + 2;
//     // Blue is max
//     else h = (r - g) / delta + 4;

//     h = Math.round(h * 60);

//     // Make negative hues positive behind 360°
//     if (h < 0) h += 360;
//     // Calculate lightness
//     l = (cmax + cmin) / 2;

//     // Calculate saturation
//     s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//     // Multiply l and s by 100
//     s = +(s * 100).toFixed(1);
//     l = +(l * 100).toFixed(1);
//     this.h = h;
//     this.s = s;
//     this.l = l;
//   }
// }
// const red = new Color(255, 67, 89, "tomato");
// console.log(red);

// red.hsl();
// red.opposite();
// red.rgba(0.3);

// const white = new Color(255, 255, 255, "white");

class User {
  constructor(username, email) {
    this.email = email;
    this.username = username;
    this.count = 0;
  }

  logout() {
    console.log(`the user ${this.username} has just logged out`);
    return this;
  }

  login() {
    this.count++;
    console.log(`the user ${this.username} has just logged in`);
    return this;
  }

  loginCounter() {
    console.log(`the user ${this.username} has logged in ${this.count} times`);
    return this;
  }
}

class Admin extends User {
  constructor(usename, email, title) {
    super(usename, email);
    this.title = title;
  }

  deleteUser(user) {
    const newUsers = user.fliter((u) => u.usename !== user.usename);
    console.log(newUsers);
  }
}
