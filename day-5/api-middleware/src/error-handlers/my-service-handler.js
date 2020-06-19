const { MyServiceError } = require("../service");

const myServiceHandler = (err, req, res, next) => {
  if (err instanceof MyServiceError) {
    return res.status(400).send({ error_business: err.message });
  }
  next(err);
};

module.exports = myServiceHandler;
