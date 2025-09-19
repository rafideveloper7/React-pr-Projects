import React, { useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
  <section className='FlexContainer'>
            <div className="left-container">
              <h1>Welcome to Web dev Add new Employee here</h1>
            <p>
              Go to Employee page to see their details... <br /> Each Employee is saved
              in local storage. <br /> Add here and you can see their data in detail in
              employee page go there.
            </p>
            </div>
            <div className="right-container">
              <EmployeeForm />
            </div>
        </section>
    </>
  );
}

export default Home;