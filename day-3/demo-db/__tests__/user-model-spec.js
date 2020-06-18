jest.mock("../src/models/user-model.js", () => () => {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();
  const myData = dbMock.define("products");
  myData.$queueResult([
    myData.build({
      id: 1,
      firstName: "First",
      lastName: "Last",
      createdAt: "2020-01-01 13:30:31",
    }),
  ]);
  return myData;
});

const userModel = require("../src/models/user-model.js");
test("Find All", async () => {
  const users = await userModel.User.findAll();
  expect(users.length).toBe(1);
});
