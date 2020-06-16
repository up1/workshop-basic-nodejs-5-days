const nock = require("nock");
const getUsers = require("../src/user-async");

test("Integration test", async () => {
  const response = await getUsers();
  expect(response.data.length).toEqual(10);
});

test("Component test with Mock server", async () => {
   nock("https://jsonplaceholder.cypress.io")
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
    .get("/users")
    .reply(200, [{}, {}, {}]);
    const response = await getUsers();
    expect(response.data.length).toEqual(3);
});

test("Component test with 404", async () => {
  nock("https://jsonplaceholder.cypress.io")
   .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
   .get("/users")
   .reply(500);
   const response = await getUsers();
   expect(response.code).toEqual(404);
});
