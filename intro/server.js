// console.log("Hello node");

// --> File system - CRUD
const fs = require("fs");

// with to string method
fs.readFile("./files/starter.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// without to string method
fs.readFile("./files/starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
