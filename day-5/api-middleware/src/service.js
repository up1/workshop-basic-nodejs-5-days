const getData = () => {
  throw new MyServiceError("From service");
};

class MyServiceError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = { getData, MyServiceError };
