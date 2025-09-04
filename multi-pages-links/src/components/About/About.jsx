import React from 'react'
import './about.css'

import aboutImg from '../../assets/about.png'

function About() {
  return ( <>
      <div className="about">
        <div className="right-content">
          <img src={aboutImg} alt="Reat" />
        </div>
        <div className="left-content">
          <div className="content">
            <h1>This is the <span>About</span> Page</h1>
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
        
      </div>
    </>
  )
}

export default About