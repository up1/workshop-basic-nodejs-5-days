const userService = require("../../src/user-service");

jest.mock("../../src/models/user-model", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("User_pui");
  myData.$queueFailure("Error name");
  return myData;
});

test("Find All with database error", async () => {
  const users = await userService.getAll();
  expect(users).toHaveLength(0);
});
