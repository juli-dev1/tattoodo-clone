import React from 'react'
import { IoLogoInstagram, IoLogoGoogle } from "react-icons/io5";

import "./profileTabContent1.css";


function ProfileTabContent1({ artist, bio, styles }) {
    return (
        <div >
            <div className='bio'>
                <h3>Bio</h3>
                <p>
                    {bio}</p>
            </div>
            <div className='socials'>
                <ul>
                    <li>
                        <a href={artist.profiles[0].src}>{artist.profiles[0].name}</a>
                        <IoLogoInstagram />
                    </li>
                    <li>
                        <a href={artist.profiles[1].src}>{artist.profiles[1].name}</a>
                        <IoLogoGoogle />
                    </li>
                </ul>
            </div>
            <h3>Styles</h3>
            <div className='styles'>

                {styles.map((style, index) => {
                    return (
                        <div key={index} className='styles-item'>
                            {style.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfileTabContent1
