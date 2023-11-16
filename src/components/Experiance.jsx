import React  from "react";
import './Experiance.css';
import virtusa from '../Assets/virtusa logo.jpg';

export default  function Experiance(){
    return(

        <div className="exp">
            <div className="exp-in">
                <div className="left">
                        <div className="left-head">
                            <h2>Experience</h2>
                        </div>
                        <div className="left-in-1">
                            <div className="left-in-1-in"> 
                            <img src={virtusa} alt="" />
                             <h3> Virtusa Consulting </h3>
                             </div>
                            
                            <h5>Associate Engineer</h5>
                            <p>Nov 2021 - Present</p>
                        </div>
                </div>
                 
                <div className="right">
                        <div className="right-inerr">
                            <div className="right-head">
                                <h2>Education</h2>
                            </div>
                            <div className="right-in-1">
                                <h3>BTech (Computer Science Engineering)</h3>
                                 <h5> AITS</h5>
                                <p>2021</p>
                            </div>
                            <div className="right-in-2">
                                <h3>MPC</h3>
                                <h5>ANM & BR Jr College</h5>
                                <p>2017</p>
                            </div>
                            <div className="right-in-3">
                            <h3>SSC</h3>
                            <h5> IK High School</h5>
                                <p>2013</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
