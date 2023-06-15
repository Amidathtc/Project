const express = require("express");
require("./Config/database");
const port = 4009;

const app = express();

app.use(express.json());

//default get

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up and running",
  });
});

app.listen(port, () => {
  console.log("server is running on", port);
});
