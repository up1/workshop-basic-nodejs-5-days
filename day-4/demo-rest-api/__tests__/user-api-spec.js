const supertest = require("supertest");
const server = require("../src/app");

const request = supertest(server);

test("Get all users /api/users", async (done) => {
  const response = await request.get("/api/users");
  expect(response.status).toBe(200);
  expect(response.body.length).toBe(5);
  done();
});

test("Create new user /api/users", async (done) => {
  const response = await request.post("/api/users").send({
    firstName: "XXXX",
    lastName: "YYYY",
  });
  expect(response.status).toBe(200);
  expect(response.body.firstName).toBe("XXXX");
  done();
});
