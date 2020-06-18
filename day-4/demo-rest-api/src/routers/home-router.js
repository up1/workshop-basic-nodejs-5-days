const express = require("express");
const router = express.Router();

const hello = (req, res) => {
  res.send(req.params.name);
};
// router.get("/:name", hello);
router.get("/hello", (req, res) => {
  res.status(404).send("Hello not found");
});

router.get("/json", (req, res) => {
  res.send({
    id: 1,
    name: "somkiat",
  });
});

module.exports = router;
