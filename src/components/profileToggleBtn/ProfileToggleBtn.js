import React, { useState } from 'react'
import { IoEllipsisHorizontalSharp, IoShareSocialOutline, IoSkullOutline } from 'react-icons/io5'
// import Button from '../button/Button';
import './profileToggleBtn.css'

function ProfileToggleBtn() {
    const [disable, setDisable] = useState(true);
    
    const disableFunction = () => {
        setDisable(!disable)
    }

    return (
            <div className='profileToggleBtn-container'>
                
            <a  onClick={disableFunction} href="#contact"> {<IoEllipsisHorizontalSharp size={22} />} </a>
            <div className={`profileToggleBtn-menu ${disable ? 'disable' : ''} `}>
                <ul>
                    <li> 
                        <div className='profileToggleBtn-icon'>
                            <IoShareSocialOutline size={32} /> 
                        </div>
                        <div className='profileToggleBtn-text'>
                        Share Profile
                        </div>
                    </li>
                    <li> 
                        <div className='profileToggleBtn-icon'>
                            <IoSkullOutline size={32} /> 
                        </div>
                        <div className='profileToggleBtn-text'>
                        Report Profile
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileToggleBtn
