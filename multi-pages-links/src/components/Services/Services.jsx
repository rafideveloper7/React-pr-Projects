import React from "react";
import "./services.css";
import './../../components/Home/home.css'

import servicesImg from "../../assets/services.png";

function Services() {
  return (
    <>
      <div className="services">
        <div className="left-content">
          <div className="content">
            <h1>
              This is the <span>services</span> Page
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odit
              illum exercitationem animi assumenda provident debitis quidem
              totam voluptatum itaque labore hic qui aliquam veniam ad nihil
              voluptatibus, doloremque eaque!
            </p>
            <div className="btns">
              <button>Explore</button>
            </div>
          </div>
        </div>
        <div className="right-content">
          <img src={servicesImg} alt="Reat" />
        </div>
      </div>
    </>
  );
}

export default Services;
