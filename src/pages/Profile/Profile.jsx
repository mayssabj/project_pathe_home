import React from 'react'
import ListSide from '../../componemts/ListSide/ListSide'
import ProfileCard from '../../componemts/ProfileCard/ProfileCard'
import ProfileLeft from '../../componemts/ProfileLeft/ProfileLeft'
import RightSide from '../../componemts/RightSide/RightSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className="Profile">
        <ProfileLeft/>

        <div className="Profile-center">
            <ProfileCard/>
            <ListSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile