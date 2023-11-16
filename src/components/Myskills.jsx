import React from "react";
import "./myskills.css";
import htmllogo from '../Assets/htmllogo.png';
import csslogo from '../Assets/csslogo.png';
import jslogo from '../Assets/jslogo.png';
import javalogo from '../Assets/javalogo.png';
import gitlogo from '../Assets/gitlogo.png';
import mysqllogo from '../Assets/mysqllogo.png'
import mongodb from '../Assets/mongodblogo.png'
import expresslogo from '../Assets/expresslogo.png'
import reactlogo from '../Assets/reactlogo.png'
import nodelogo from '../Assets/nodelogo.png'
import springbootlogo from '../Assets/icons8-spring-boot-96.png';


export default function Myskills() {
  return (
    <>
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-inner">
          <div className="cards">
            <img src={htmllogo} alt="htmllogo" />
            <p>HTML</p>
          </div>
          <div className="cards">
            <img src={csslogo} alt="csslogo" />
            <p>CSS</p>
          </div>
          <div className="cards">
            <img src={jslogo} alt="jslogo" />
            <p>JS</p>
          </div>
          <div className="cards">
            <img src={javalogo} alt="javalogo" />
            <p>JAVA</p>
          </div>
          <div className="cards">
           <img src={gitlogo} alt="gitlogo" />
            <p>GITHUB</p>
          </div> 
          <div className="cards">
           <img src={mysqllogo} alt="mysqllogo" />
            <p>MYSQL</p>
          </div> 
          <div className="cards">
           <img src={springbootlogo} alt="springbootlogo" />
            <p>SpringBoot</p>
          </div> 
          <div className="cards">
           <img src={mongodb} alt="mongodb" />
            <p>MongoDB</p>
          </div> 
          <div className="cards">
            <img src={expresslogo} alt="expresslogo" />
            <p>Express.js</p>
          </div>
          <div className="cards">
            <img src={reactlogo} alt="reactlogo" />
            <p>React</p>
          </div>
          <div className="cards">
            <img src={nodelogo} alt="nodelogo" />
            <p>Node.js</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
