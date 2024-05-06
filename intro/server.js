// console.log("Hello node");

// --> File system - CRUD
const fs = require("fs");
const path = require("path");

// with to string method
// fs.readFile("./files/starter.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// without to string method
// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// instead of hardcoding the file path directly into the fs setup, we can use path module.
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// write file --> looks like call back hell, this where fsPromises comes in handy
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to Meet you 🌱.",
  (err) => {
    if (err) throw err;
    console.log("Write complete");

    // update
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nThank you 🤗",
      (err) => {
        if (err) throw err;
        console.log("Append complete");

        fs.rename(
          path.join(__dirname, "files", "reply.txt"),
          path.join(__dirname, "files", "newReply.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);

console.log("Hello....");
// exit on uncaught errors

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
