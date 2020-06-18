const userService = require("../src/user-service");

jest.mock("../src/models/user-model", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("User_pui");
  myData.$queueResult([
    myData.build({
      id: 1,
      firstName: "First",
      lastName: "Last",
      createdAt: "2020-01-01 13:30:31",
    }),
    myData.build({
      id: 2,
      firstName: "First",
      lastName: "Last",
      createdAt: "2020-01-01 13:30:31",
    }),
  ]);
  return myData;
});

test("Find All", async () => {
  const users = await userService.getAll();
  expect(users.length).toBe(1);
});
