const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.status(200).send([
    { id: 1, firstName: "firstName 1" },
    { id: 2, firstName: "firstName 2" },
  ]);
});

router.post("/users", (req, res) => {
  const user = req.body;
  res.send(user);
});

module.exports = router;
