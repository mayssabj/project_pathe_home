import React from "react";
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () =>{
    return(
        <div className="ProfileCard">
            <dir className=" ProfileImages">
                <img src={Cover} alt=""/>
                <img src={Profile} alt=""/>
            </dir>
            <div className="ProfileName">
                <span> Mayssa Ben Joud </span>
            
            </div>

            <div className="Status">
                <hr />
                <div>
                    <div className="watched">
                        <span>49</span>
                        <span> Watched </span>
                    </div>
                    <div className="vl"></div>
                    <div className="watched">
                        <span>13</span>
                        <span>Favories</span>
                    </div>

                    {Profile && (
                         <>
                        <div className="vl"></div>
                        <div className="watched">
                            <span>5</span>
                            <span>liked</span>
                        </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {Profile ? "":<span> Seetings </span>}
        </div>
    )
}
export default ProfileCard;