import React from 'react'
import './artistProfileImage.css'


function ArtistProfileImage({ link }) {
    return (
        <div>
            <img className='artistsProfileImage-icon' src={link}></img>
        </div>
    )
}

export default ArtistProfileImage
