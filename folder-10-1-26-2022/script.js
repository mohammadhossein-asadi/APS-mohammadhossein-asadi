let content = document.querySelector(".content");
let navbar = document.querySelector(".navbar");
let nav = document.createElement("h2");
let img = document.createElement("img");
img.src = "coding.jpeg";
img.style.justifyContent = "center"
content.appendChild(img)
content.appendChild(nav);
nav.textContent = "BOOTCAMP";
content.style.width = "1000px"

let one = document.createElement("h3");
one.textContent = "Home";
navbar.appendChild(one);
let two = document.createElement("h3");
two.textContent = "Courses";
navbar.appendChild(two);
let three = document.createElement("h3");
three.textContent = "About";
navbar.appendChild(three);
let four = document.createElement("h3");
four.textContent = "Contact";
navbar.appendChild(four);

