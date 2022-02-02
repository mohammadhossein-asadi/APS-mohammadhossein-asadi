// #  Get Element By ID

let hello = document.getElementById("greet");
// console.log(hello);
// # Get Elements By Class or Tag

let bye = document.getElementsByClassName("bye");
// console.log(bye);

// # Get Elements By Tag Name

let list = document.getElementsByTagName("li");
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

let title = document.getElementsByClassName("title")