import React from 'react'
import { IoImageOutline } from "react-icons/io5";
import "./mainTabContentWorkplace.css"

function MainTabContentWorkplace({ workplace }) {
    return (
        <div className='workplace-tab'>
            <div className='workplace-tab-icon'>
                <IoImageOutline size={42} />
            </div>
            <h3>About the Artist</h3>
            <p>Unfortunately, the artist hasn't updated their profile.</p>
        </div>
    )
}

export default MainTabContentWorkplace
