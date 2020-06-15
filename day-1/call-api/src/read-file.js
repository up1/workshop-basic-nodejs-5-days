const fs = require("fs");
// read file sync
try {
  const data = fs.readFileSync("data.json");
  console.log(data.toString());
} catch (error) {
  console.log(error.message);
}
// read file async
fs.readFile("data.json", (error, data) => {
  if (!error) {
    console.log(data.toString());
  } else {
    console.log(error.message);
  }
});
