class UserResponse {
  constructor(code, data = "default value") {
    this.code = code;
    this.data = data;
  }
}

module.exports = UserResponse;
