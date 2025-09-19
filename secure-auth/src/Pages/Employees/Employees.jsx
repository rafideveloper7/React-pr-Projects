import React from "react";
import { Link } from "react-router-dom";
import "../css/employee.css";
import EmployeeCard from "../../components/EmployeeCard";

function Employees() {
  return (
    <div className="employees-page">
      <h1> Employees Page </h1>
      
      <div className="employee-list">
        <EmployeeCard />
      </div>
    </div>
  );
}

export default Employees;
