import React from "react";
import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import './ListSide.css'


const ListSide = () =>{
    return(
        <div className="ListSide">
            <PostShare/>
            <Posts/>
        </div>
            
    )
}
export default ListSide;