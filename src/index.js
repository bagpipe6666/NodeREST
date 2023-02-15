require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (rew, res) => {
  res.send("Hello World! กูอยากผ่าน");
});

app.listen(port, () => {
  console.log(`Example app. listening at http://localhost:${port}`);
});
