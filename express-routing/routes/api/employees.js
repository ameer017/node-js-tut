const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../data/employees.json");
const path = require("path");
const fs = require("fs");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
    });

    // const responseData = {
    //   id: req.body.id,
    //   firstname: req.body.firstname,
    //   lastname: req.body.lastname,
    //   role: req.body.role,
    // };

    // // Convert responseData to a JSON string
    // const responseDataJson = JSON.stringify(responseData);

    // // Append the responseDataJson to a file
    // fs.appendFile(
    //   path.join(__dirname, "..", "..", "data", "employee.json"),
    //   responseDataJson + "\n",
    //   (err) => {
    //     if (err) {
    //       console.error("Error appending to file:", err);
    //       res.status(500).send("Error appending to file");
    //     } else {
    //       console.log("Data appended to file");
    //       res.json(responseData);
    //     }
    //   }
    // );
  })
  .put((req, res) => {
    res.json({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });
router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

// router.get("/", (req, res) => { first method
//     res.sendFile(path.join(__dirname, "..", "..", "data", "employees.json"))
// })

// install postman to test it out
module.exports = router;
