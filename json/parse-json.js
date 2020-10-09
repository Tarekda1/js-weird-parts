const jsonData = require("./test-json-parse.json");
const parsed = JSON.parse(JSON.stringify(jsonData));
console.log(parsed);
