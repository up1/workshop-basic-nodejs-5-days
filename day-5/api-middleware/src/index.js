const express = require("express");
const server = express();

//Hello first middleware
server.use((req, res, next) => {
  console.log("hello second middleware");
  next();
});
server.use((req, res, next) => {
  console.log("hello first middleware");
  next();
});

const xx = (req, res, next) => {
  console.log("Call before /");
  next();
};

server.get("/", xx, (req, res) => {
  console.log("Call /");
  res.send("Hello default route");
});

server.get("/test", (req, res) => {
  console.log("Call /test");
  res.send("Call /test");
});

server.listen(3000, () => {
  console.log("Started ....");
});
