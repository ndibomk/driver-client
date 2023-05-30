import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Test from "./Circles";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";

import {IoMdDocument} from "react-icons/io"

function Requirement() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  console.log(user);
  // console.log("status", user.loginStatus);
  return (
    <div className="main-req-ap">
    <div className="requiremain-app">
    <h5 style={{ fontSize: "2rem"  }}>Requirements</h5>
    <div className="Requirementmais">
      {/* <div className="circle2"> */}
        
        {/* <div className="circle">
          <h1 className="number">1</h1>
        </div> */}
        <div className="content">
          <p style={{marginBottom:"30px"}}> <BsFillPeopleFill size={45} style={{color:"#760945"}}/></p>
      
          <p style={{ color: "#760c46", fontSize: "1.4rem" }}>Age  </p>
          <p>Our drivers must be 18+ </p>
        </div>

        {/* <div className={user ? 'user-class' : 'line'}>
  </div>        */}
   {/* </div> */}

      {/* <div className="circle1"> */}
     

   
 
 

        {/* <div className="circle">
          <h1 className="number2">2</h1>
        </div> */}
        <div className="content">
          <p style={{marginBottom:"40px",marginTop:'1rem'}}>< AiFillCar size={45} style={{color:"#760945" }}/></p>
          <p style={{ color: "#760c46", fontSize: "1.4rem" }}>
            Transportation 
            {/* {user.loginStatus} */}
          </p>
          <p>
            
            Our drivers will be carrying orders to and from the 'Home base' on
            a regular basis
          </p>
        </div>
        {/* <div className={user ? 'user-class' : 'lines'}></div> */}
      {/* </div> */}
      {/* <div className="circle3"> */}
        {/* <div className="circle">
          <h1 className="number3">3</h1>
        </div> */}
        <div className="content">
          <p style={{marginBottom:"30px"}}><IoMdDocument size={45} style={{color:"#760945"}}/></p>
          <p style={{ color: "#760c46", fontSize: "1.4rem"}}>
            Documentation
          </p>
          <p>Valid Driver Licence</p>
        </div>
     
    </div>
  </div>
  </div>
  );
}

export default Requirement;
