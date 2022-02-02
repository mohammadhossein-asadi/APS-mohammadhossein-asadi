// $ settimeout()

// # give two parameter === first parameter => function and secound parameter => time
setTimeout(() => {
  console.log("hello");
}, 2000);

// * one secound equal === 1000 ms

// $ setInterval()
// # give two parameter === first parameter => function and secound parameter => time
// # The difference settimeout() is that according to the time we give it, it executes the operation inside the block code every time until we stop the program.

setInterval(() => {
  for (let i = 0; i <= 10; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
  }
}, 2000);
