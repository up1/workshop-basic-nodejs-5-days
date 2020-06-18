const express = require("express");
const userService = require("../services/user-service");
const router = express.Router();

router.get("/users/:id", async (req, res) => {
  res.send({
    id: req.params.id,
    limit: req.query.limit, // ?limit=100
  });
});

router.get("/users", async (req, res) => {
  userService
    .getAll()
    .then((allUsers) => {
      if (allUsers.length == 0) {
        res.status(404).send({ error: "User not found" });
        return;
      }
      res.status(200).send(allUsers);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

router.post("/users", (req, res) => {
  const user = req.body;
  // Validate request's data

  // Call service
  userService
    .addNew(user)
    .then((createdUser) => {
      res.send(createdUser);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
});

module.exports = router;
