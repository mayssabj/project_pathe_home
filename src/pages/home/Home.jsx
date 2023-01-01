import React from "react";
import './Home.css'
import ProfileSide from "../../componemts/ProfileSide/ProfileSide";
import RightSide from "../../componemts/RightSide/RightSide";
import ListSide from "../../componemts/ListSide/ListSide";


const Home = () =>{
    return(
        <div className="Home">
            <ProfileSide/>
            <ListSide/>
            <RightSide/>
            
        </div>
    )
}
export default Home;