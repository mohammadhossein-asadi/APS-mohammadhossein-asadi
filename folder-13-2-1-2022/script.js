// # Hitesh
// const myNewPara = document.createElement("p");
// myNewPara.textContent = "I was added via JS";

// document.querySelector("body").appendChild(myNewPara);

// const button = document.querySelector("button");

// button.addEventListener("click", (event) => {
//   event.target.textContent = "I was clicked!";
// });

// # Web Dev Simplified

// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// // # The events run in sequence
// grandparent.addEventListener("click", (e) => {
//   console.log("Grandparent 1");
// });

// parent.addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent 1");
//   },
//   { capture: true }
// );

// child.addEventListener("click", (e) => {
//   console.log("Child 1");
// });

// document.addEventListener("click", (e) => {
//   console.log("Document 1");
// });

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.innerHTML = "HELLOOOO!"
});

button.addEventListener("click", (e) => {
  button.style.backgroundColor = "Blue"
  button.style.borderRadius = "10px"
  button.style.color = "#FFF"
  button.style.padding = "10px"
});