const userService = require("../../src/user-service");

jest.clearAllMocks();
jest.mock("../../src/models/user-model", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("User_pui");
  return myData;
});

test("Create new user", async () => {
  const result = await userService.create({
    firstName: "fake firstname",
    lastname: "L",
  });
  expect(result.firstName).toEqual("fake firstname");
});
