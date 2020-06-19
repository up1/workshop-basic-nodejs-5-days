const express = require("express");
const server = express();

const service = require("./service");
const { MyServiceError } = require("./service");
const { myServiceHandler, defaultHandler } = require("./error-handlers");

server.get("/", (req, res) => {
  service.getData();
});

server.get("/test", (req, res) => {
  throw new Error("test");
});

server.use(myServiceHandler);
server.use(defaultHandler);

server.listen(3000, () => {
  console.log("Started ....");
});
