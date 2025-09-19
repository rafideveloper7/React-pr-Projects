import React from "react";
import "../Pages/css/employeeCard.css"

function EmployeeCard() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  return (
    <>
      {employees.length === 0 ? (
        <p className="employees-empty">No employees enrolled yet.</p>
      ) : (
        <div className="employees-container">
          {employees.map((emp, index) => (
            <div key={index} className="employee-card">
              <p>
                <span>Name:</span> {emp.userName}
              </p>
              <p>
                <span>Email:</span> {emp.email}
              </p>
              <p>
                <span>Roll:</span> {emp.roll}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default EmployeeCard;
