const client = require("axios").default;
function getUsers(done) {
  client({
    method: "get",
    url: "https://jsonplaceholder.cypress.io/users",
  })
    .then((response) => {
        done(null, {
            code: 200,
            data: response.data
        });
    })
    .catch((error) => {
        done(new Error("Data not found"), {
            code: 404,
            data: error.message
        });
    });
}
// Call function with callback
getUsers((error, result) => {
    console.log(error, result);
})
