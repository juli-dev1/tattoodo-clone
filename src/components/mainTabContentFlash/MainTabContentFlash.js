import React from 'react'
import { IoImageOutline } from "react-icons/io5";
import "./mainTabContentFlash.css"


function MainTabContentFlash({ flash }) {
    return (
        <div className='flash-tab'>
            <div className='flash-tab-icon'>
                <IoImageOutline size={42} />
            </div>
            <h3>About the Artist</h3>
            <p>Unfortunately, the artist hasn't updated their profile.</p>
        </div>
    )
}

export default MainTabContentFlash
