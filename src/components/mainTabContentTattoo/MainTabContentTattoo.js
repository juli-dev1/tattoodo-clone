import React from 'react'
import "./mainTabContentTattoo.css"

function MainTabContentTattoo({ images }) {
    return (
        <div className='tattoo-tab'>
            <div className="tattoo-tab-column">
                {images.map((image, index) => {
                    return (
                        <img key={index} src={image.image} />
                    )
                })}
            </div>
        </div>
    )
}

export default MainTabContentTattoo
