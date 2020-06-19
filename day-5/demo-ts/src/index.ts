import express, { Application } from "express";
const server: Application = express();

server.get("/", (req, res) => {
  res.send("Hello TypeScript");
});

server.listen(3000, () => {
  console.log("Starting");
});
