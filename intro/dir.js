const fs = require("fs");
const path = require("path");

if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
    fs.writeFile(
      path.join(__dirname, "./new", "newFile.js"),
      "hello",
      (err) => {
        if (err) throw err;
        console.log("File created");
      }
    );
  });
} else {
  console.log("Directory name already exists");
}

// if (fs.existsSync("./new")) {
//   fs.rmdir("./new", (err) => {
//     if (err) throw err;
//     console.log("Directory deleted");
//   });
// }
