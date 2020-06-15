const client = require("axios").default;
function getUsers() {
  return client({
    method: "get",
    url: "https://jsonplaceholder.cypress.io/users",
  })
    .then((response) => {
        return {
            code: 200,
            data: response.data
        }
    })
    .catch((error) => {
      return {
          code: 404,
          data: error.message
      };
    });
}
// Call function
getUsers().then(result => {
    if(result.code === 200) {
        // console.table(users);
        console.log(`Found =${result.data.length}`);
    } else if(result.code === 404) {
        console.log("Not found");
    }
})
