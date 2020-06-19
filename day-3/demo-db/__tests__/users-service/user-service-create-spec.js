const userService = require("../../src/user-service");

jest.clearAllMocks();
jest.mock("../../src/models/user-model", () => () => {
  const { ValidationError, ValidationErrorItem } = require("sequelize");
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  let myData = dbMock.define("User_pui");

  const itemError = new ValidationErrorItem(
    "email",
    "Not a valid email address",
    "InvalidEmail"
  );
  const error = new ValidationError("Error", [itemError]);
  jest.spyOn(myData, "create").mockRejectedValue(new Error("XXX"));

  return myData;
});

test("Error from validation", async () => {
  const myUser = {};
  const result = await userService.create(myUser);
  expect(result).toBeFalsy();
});
