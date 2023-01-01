import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import TrendCard from "../TrendCard/TrendCard";


const RightSide = () => {
  
  return (
    <div className="RightSide">
      <div></div>
      <div className="navIcons">
        <img src={Home} alt="" />
         <div className="home">Home</div>
        <img src={Noti} alt="" />
        <div className="noti">Notification</div>
      </div>
      
      <TrendCard />

      
    </div>
  );
};

export default RightSide;
