import React, { useState, useRef } from "react";
import "./PostShare.css";
import {UilSearch} from '@iconscout/react-unicons'



const PostShare = () => {
  
  return (
    <div className="PostShare">
      <div className="Search">
            <input type="text" placeholder='FIND YOUR MOVIE NAME' />
            <div className="s-icon">
                <UilSearch/>
            </div>
           </div>
      
      </div>
    
  );
};

export default PostShare;