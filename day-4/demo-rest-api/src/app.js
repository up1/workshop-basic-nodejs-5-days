const express = require("express");
const server = express();

server.use(express.json());
const homeRouter = require("./routers/home-router");
const userRouter = require("./routers/user-router");
server.use(homeRouter);
server.use(userRouter);

module.exports = server;
