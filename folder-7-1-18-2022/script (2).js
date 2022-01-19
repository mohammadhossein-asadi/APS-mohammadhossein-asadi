const ball = [
  ["certain", "doubt", "decidedly", "see  ", "likely", "Outlook "],
  ["Reply ", "again ", "Better "],
  ["count ", "My reply", "sources "],
];

const item = ball[Math.floor(Math.random() * (ball.length - 1))];
// console.log(item);

const itemStr = item[Math.floor(Math.random() * (item.length - 1))];
console.log(itemStr);

for (const iterator of ball) {
  // console.log(iterator);
  if (iterator.includes(itemStr) && iterator === ball[0]) {
    console.log("Positive");
  } else if (iterator.includes(itemStr) && iterator === ball[1]) {
    console.log("Natural");
  } else if (iterator.includes(itemStr) && iterator === ball[2]) {
    console.log("Negative");
  }
}
