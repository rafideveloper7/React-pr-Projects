import React, { useState } from "react";
import "../Pages/css/employeeForm.css"

function EmployeeForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");

  function addNewStudent(e) {
    e.preventDefault();

    // make employee object
    const employee = {
      userName: userName.trim(),
      email: email.trim(),
      roll: roll.trim(),
    };

    // validate user
    if (!employee.userName || !employee.email || !employee.roll) {
      alert("Invalid inputs");
      return;
    }

    // Get old employees or create empty array
    const enrolledEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];

    // Add new employee
    enrolledEmployees.push(employee);

    // Save back to localStorage
    localStorage.setItem("employees", JSON.stringify(enrolledEmployees));

    console.log("Employee added:", employee);

    // Reset form inputs
    setUserName("");
    setEmail("");
    setRoll("");
  }

  return (
    <>
      <div className="form-container">
        <h2>Enroll new Employee</h2>
        <form onSubmit={addNewStudent}>
          <div className="inputs">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="inputs">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputs">
            <label htmlFor="roll">Roll : </label>
            <input
              type="text"
              id="roll"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>

          <div className="inputs">
            <input type="submit" value="Add now" />
          </div>
        </form>
      </div>
    </>
  );
}

export default EmployeeForm;
