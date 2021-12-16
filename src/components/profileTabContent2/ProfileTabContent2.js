import React from 'react'
import { IoTodayOutline } from "react-icons/io5";

import "./profileTabContent2.css"


function ProfileTabContent2(travelPlans) {

    if (travelPlans.length <= 0) {
        return (<div>

        </div>)
    } else {
        return (
            <div className='travel-plan'>
                <div className='travel-plan-icon'>
                <IoTodayOutline size={32} />
            </div>
            <h3>Staying home for a while.</h3>
            <p>This artist hasn't specified any travel plans yet. Come back later to check for updates.</p>
            </div>
        )
    }
}

export default ProfileTabContent2
