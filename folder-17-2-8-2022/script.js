const buttons = document.querySelector("button");

buttons.addEventListener("click", (e) => {
  console.log(e);
});

const input = document.querySelector("input");

// input.addEventListener("keyup", (e) => {
//   console.log(e);
// console.log(e.key);
// console.log(e.code);
//   console.log(e.target.value);
// });

// input.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       return console.log("Up!");
//     case "ArrowDown":
//       return console.log("Down");
//     case "ArrowLeft":
//       return console.log("left!");
//     case "ArrowRight":
//       return console.log("right!");
//     case "ShiftLeft":
//       return console.log("the left shift");
//     default:
//       console.log("ignored");
//   }
// });

// let divTop = 50;
// let divLeft = 50;

// const div = document.querySelector("div");
// console.log(div.getClientRects());
// window.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "ArrowUp":
//       console.log((div.style.top = `${divTop--}px`));
//       break;
//     case "ArrowDown":
//       console.log((div.style.top = `${divTop++}px`));
//       break;
//     case "ArrowRight":
//       console.log((div.style.left = `${divLeft++}px`));
//       break;
//     case "ArrowLeft":
//       console.log((div.style.left = `${divLeft--}px`));
//       break;
//     case "ControlLeft":
//       div.classList.toggle("circle");
//       break;
//     default:
//       console.log("IGNORED");
//   }
// });

const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("submitted");

    // console.dir(tweetForm);
    // console.log(tweetForm.elements.username.value);
    // console.log(tweetForm.elements.tweet.value);

  //   there is better another way, you are selecting the inputs value by names

  console.log(e.target.username.value);
  console.dir(e.target.tweet.value);

  let usernameInput = e.target.username.value;
  let tweetInput = e.target.tweet.value;

  if (!usernameInput || !tweetInput) {
    alert("khodaii ye chizi benevis");
    return;
  } else {
    alert("submitted");
  }

  addTweet(usernameInput, tweetInput);

  e.target.username.value = "";
  e.target.tweet.value = "";
});


const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");

  bTag.append(username); // <b>benyamin</b>
  newTweet.append(bTag, `- ${tweet}`); // <li><b>benyamin</b> - hii to everyone</li>

  tweetsContainer.append(newTweet);
};
