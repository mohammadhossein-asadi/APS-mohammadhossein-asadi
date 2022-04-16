const express = require("express");

const app = express();

app.use((req, res) => {
  res.send(`hello my friend`);
});

app.listen(6550, () => {});
