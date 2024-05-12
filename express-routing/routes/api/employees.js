const express = require("express");
const router = express.Router();
const path = require("path");
const data = {};
data.employees = require("../../data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      role: req.body.role,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });
// router.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "..", "..", "data", "employees.json"))
// })

module.exports = router;
