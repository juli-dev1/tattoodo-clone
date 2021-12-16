import React, { useState } from 'react'
import { IoPerson, IoMenuOutline } from 'react-icons/io5'
import Button from '../button/Button';
import './menuToggleBtn.css'


function MenuBtn() {

    const [disable, setDisable] = useState(true);
    
    const disableFunction = () => {
        setDisable(!disable)
    }


    return (
        <div className='btn-container'>
            <a className="toggle" onClick={disableFunction} href="#contact"> {<IoPerson size={25} />}{<IoMenuOutline size={25} />} </a>
            <div className={`dropdown-menu ${disable ? 'disable' : ''} `}>
                <div className="dropdown-menu-header">
                    <div className="dropdown-menu-icon">
                        {<IoPerson size={35} />}
                    </div>
                    <div>
                        <p>Log In or Sign Up</p>
                    </div>
                    <div className='log-in-out'>
                            <Button inverted={true}>Log in </Button >
                            <Button link='55'>Sign Up </Button>
                    </div>
                </div>
                <ul>
                    <li>About Us</li>
                    <li>Help</li>
                    <li>More</li>
                </ul>
                <ul className="small-screen-li" >
                    <li>Explore</li>
                    <li>Tattoos</li>
                    <li>Read</li>
                </ul>
            </div>
        </div>
    )
}

export default MenuBtn
