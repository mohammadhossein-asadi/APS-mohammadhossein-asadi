// # Dom => (Document object model)

// const para = document.querySelector("p"); //* select first p tag
// const para2 = document.querySelector(".error"); //* select p from css selector with classname

// console.log(para, para2);

// const div = document.querySelector("div.error");
// console.log(div);

// * Inside the element tab, you can click on the desired element and the copy selector option to compress the element selector and use it inside the code.

// # Select with css selector  (copy css selector from element tab in Devtool with right click and copy)

// const para = document.querySelector("body > div:nth-child(2) > p:nth-child(1)");

// const para2 = document.querySelector("body > div:nth-child(2) > p.error");

// const div = document.querySelector("div.error");
// console.log(para, para2, div);

// * Multiple select elenemt with querySelectorAll()

// * nodelist is like a array, but it is not a array, and you can not run methods specific to the array on it, like a array, we can select the desired index

// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");

// console.log(paras);
// console.log(paras[2]);
// console.log(errors);

// * you can use forEach method for NodeList
// const parasIterate = paras.forEach(para => {
//     console.log(para);
// })

////////////////////////////////////////#////////////////////////////////////////

// * get an element by Id
// # We do not need to use #
// const title = document.getElementById("page-title");
// console.log(title);
// * get element by their class name
// # We do not need to use .
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// $ Do not work forEach method for getElementsByClassName()

// * get elements bu their tag name

// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);

////////////////////////////////////////#////////////////////////////////////////
// # Change the text inside elements

// const para = document.querySelector("p");

// console.log(para.innerHTML);
// para.innerText = 'Mohammadhossein are awesomw!'

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });

// const content = document.querySelector(".content");

// console.log(content.innerHTML); //* Show text inside element
// * If we equal =, it will replace that element, and if we plus equal +=, it will add to it.
// content.innerHTML = "<h2>THIS IS A NEW H2</h2>"; //* (= overwrite)
// content.innerHTML += "<h2>THIS IS A NEW H2</h2>"; //* (+= append)

// # Append innerHTML from array inside content

// const people = ["Mohammadhossein", "Motahare", "Benyamin"];

// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

////////////////////////////////////////#////////////////////////////////////////

// # Get an update attribiute of HTML elements


