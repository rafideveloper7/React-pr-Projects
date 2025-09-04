import React from "react";
import heroImg from "../../assets/hero-img.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="left-content">
          <div className="content">
            <h1>This is the <span>Home</span> Page</h1>
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
          <img className="hero-img" src={heroImg} alt="developer" />
        </div>
      </div>
    </>
  );
}

export default Home;
