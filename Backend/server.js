const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Blog Website");
});

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
