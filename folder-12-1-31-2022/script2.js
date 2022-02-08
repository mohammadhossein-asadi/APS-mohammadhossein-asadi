// function listOfNames(arrayOfPeople) {
//   let content = document.querySelector("#content");
//   arrayOfPeople.forEach((person) => {
//     let name = document.createElement("h1");
//     let job = document.createElement("h2");
//     name.innerHTML = person.name
//     job.innerHTML = person.job
//     content.append(name,job)
//   });
// }

// let people = [
//   { name: "Alireza", job: "Teacher" },
//   { name: "Jafar", job: "Student" },
//   { name: "Boris", job: "Prime Minister" },
// ];

// listOfNames(people);

// function shoppingList(arrayOfPeople) {
//   arrayOfPeople.forEach((item) => {
//     let content = document.querySelector("#content");
//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     li.innerHTML = item;
//     content.appendChild(ul);
//     ul.appendChild(li)
//   });
// }

// let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

// shoppingList(shopping);

function readingList(books) {
  let content = document.querySelector("#content");
  let book = document.createElement("h1");
  book.innerHTML = "Book list";
  content.appendChild(book);
  content.style.display = "flex";
  books.forEach((p) => {
    let para = document.createElement("p");
    para.innerHTML = p.title;
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.style.listStyleType = "none";
    // content.style.display = "flex"
    ul.appendChild(li);
    content.appendChild(ul);
    content.appendChild(para);
    let img = document.createElement("img");
    const src = ["one.jfif", "two.jfif", "three.jfif"];
    let imgSrc = (img.src = "");
    src.forEach((ele) => {
      imgSrc = src[ele];
      content.appendChild(img);
    });
  });
  // let img1 = document.createElement("img");
  // img1.src = "one.jfif";
  // let img2 = document.createElement("img");
  // img2.src = "two.jfif";
  // let img3 = document.createElement("img");
  // img3.src = "three.jfif";
  // content.append(img1,img2,img3)
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
