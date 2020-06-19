const express = require("express");
const server = express();

const auth = async (req, res, next) => {
  try {
    // Verify token from header
    const token = req.header("Authorization").replace("Bearer ", "");
    const user = jwt.verify(token, "XYZ");
    if (!user) {
      throw new Error("");
    }
    // Set data to request
    req.token = token;
    req.xxxxxx = user;
    next();
  } catch (error) {
    res.send("Please authen !!");
  }
};

const jwt = require("jsonwebtoken");

server.get("/login", (req, res) => {
  const token = jwt.sign({ id: 1, name: "somkiat" }, "XYZ");
  res.send({ token: token });
});

server.use("/abc", auth);
server.get("/abc", (request, response) => {
  response.send(request.xxxxxx);
});
server.get("/abc/get", (req, res) => {
  res.send("Call /abc/get");
});

server.get("*", (req, res) => {
  res.send({ error: "ไม่มีนะ" });
});

server.listen(3000, () => {
  console.log("Started ....");
});
