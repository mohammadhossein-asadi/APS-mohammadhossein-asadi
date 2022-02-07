const btn = document.querySelector("#v3");

// console.log(btn);
// console.dir(btn);
// btn.onclick = () => {
//   console.log("You haved clicked me!");
// };

//* What Does "(e)" Mean in JavaScript?
//* Please pressed CTRL key
// const btn = document.querySelector("#v3");

// btn.addEventListener("click", function (e) {
//   if (e.ctrlKey) {
//     console.log("CTRL key was pressed while clicking.");
//     console.log(e);
//   }
// });

// const button = document.querySelector("#v3");

// button.addEventListener("click", (event) => {
//   button.textContent = `Click count: ${event.detail}`;
// });

//# key press

// const log = document.getElementById("log");
// const input = document.querySelector("input");

// input.addEventListener("keypress", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

// # another way ...
// function scream() {
//   console.log("Loud noise");
// }

// btn.onmouseenter = scream;

// document.querySelector("h1").onclick = () => alert("You clicked the h1");

// const heightOutput = document.querySelector("#height");
// const widthOutput = document.querySelector("#width");

// console.log(heightOutput, widthOutput);
// console.log(window);
// const reportWindowSize = () => {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// };

// window.addEventListener("resize", reportWindowSize);

// btn.addEventListener("dblclick", () => alert("V3 clicked!"));

// const twist = () => console.log("twits");
// const shout = () => console.log("shout");

// const tasButton = document.querySelector("#tas");

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// tasButton.addEventListener("click", twist);
// tasButton.addEventListener("click", shout);

// # Quiz 1
// const hello = document.querySelector("#hello");
// hello.addEventListener("click", () => console.log("Hello ;)"));

// const goodbye = document
//   .querySelector("#goodbye")
//   .addEventListener("click", () => console.log("Goodbye :("));

// # Project
// * Random BackgroundColor
// const button = document.querySelector("button");
// const h1 = document.querySelector("h1");
// const p = document.createElement("p");

// h1.append(p);

// button.addEventListener("click", () => {
//   const newColor = randomColor();
//   document.body.style.backgroundColor = newColor;
//   p.innerText = newColor;
// });

// const randomColor = () => {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r} , ${g} , ${b})`;
// };