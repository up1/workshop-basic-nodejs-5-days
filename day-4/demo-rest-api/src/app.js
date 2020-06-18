const express = require("express");
const server = express();
const homeRouter = require("./routers/home-router");
const userRouter = require("./routers/user-router");

server.use(express.json());

const routes = [
  {
    prefix: "",
    target: homeRouter,
  },
  {
    prefix: "/api",
    target: userRouter,
  },
];

for (let route of routes) {
  server.use(route.prefix, route.target);
}

module.exports = server;
