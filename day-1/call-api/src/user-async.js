const client = require("axios").default;
const UserResponse = require("./user-response");

async function getUsers() {
  try {
    const result = await client({
      method: "get",
      url: "https://jsonplaceholder.cypress.io/users",
    });
    return new UserResponse(200);
  } catch (error) {
    return new UserResponse(404, error.messaage);
  }
}
// Call function
getUsers().then((result) => {
  if (result.code === 200) {
    // console.table(users);
    console.log(`Found =${result.data}`);
  } else if (result.code === 404) {
    console.log("Not found");
  }
});
