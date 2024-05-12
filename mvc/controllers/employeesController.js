const data = {
  employees: require("../model/employees.json"), // Property holding employee data loaded from JSON file
  setEmployees: function (data) {
    // Method to set new employee data
    this.employees = data; // Set the 'employees' property to the provided data
  },
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNeEmployee = (req, res) => {
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    role: "Tutor",
  };

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: "You dey whine? First and Last is required" });
  }
  data.setEmployees([...data.employees, newEmployee]);
  res.json(newEmployee);

  // const { firstname, lastname } = req.body;

  // if (!firstname || !lastname) {
  //   return res.status(400).json({ message: "First name and last name are required." });
  // }

  // const newEmployee = {
  //   id: data.employees.length > 0 ? data.employees[data.employees.length - 1].id + 1 : 1,
  //   firstname,
  //   lastname,
  //   role: "Tutor",
  // };

  // // Update employees data using setEmployees method
  // const addedEmployee = [...data.employees, newEmployee];
  // data.setEmployees(addedEmployee);

  // // Respond with the newly created employee
  // res.status(201).json(newEmployee);
};

const updateEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );
  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found!` });
  }

  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;
  if (req.body.role) employee.role = req.body.role;

  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  const unsortedArray = [...filteredArray, employee];

  data.setEmployees(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? 1 : 0))
  );
  res.json(data.employees);
};

const deleteEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found!` });
  }

  const filteredArray = data.employees.filter(
    (emp) => emp.id !== parseInt(req.body.id)
  );

  data.setEmployees([...filteredArray]);
  res.json(data.employees);
};

const getEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.params.id)
  );
  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.params.id} not found!` });
  }
  res.json(employee);
};

module.exports = {
  createNeEmployee,
  getAllEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
};
