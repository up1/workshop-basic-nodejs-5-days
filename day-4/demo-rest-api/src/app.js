const express = require("express");
const server = express();
const homeRouter = require("./routers/home-router");
const userRouter = require("./routers/user-router");

server.use(express.json());
server.use(homeRouter);
server.use("/api/", userRouter);

module.exports = server;
