import React, { useState } from 'react';
import { IoArrowDownSharp, IoMapOutline} from 'react-icons/io5'
import './search.css'


function Search() {

    const [addStickyClass, setAddStickyClass] = useState('');
    window.onscroll = function () { addClassFunction() };

    function addClassFunction() {
        if (window.pageYOffset > 155) {
            setAddStickyClass('sticky')
        } else {
            setAddStickyClass('')
        }
    }

    return (
        <div className='search-container'>
            <div className='text'>
                <h1>Explore</h1>
                <p>Find your next tattoo artist.</p>
            </div>
            <div className={`main ${ addStickyClass }`}>
                <div> 
                </div>
                <div>
                    <form className='searchbox '>
                        <input className='input' placeholder="Pick Your City" type="search" name="search" />
                        <button className='button'  > { <IoArrowDownSharp /> } </button>
                    </form>
                </div>
                <div>
                <button className='map-btn'> { <IoMapOutline size={20} /> } Map</button>
                </div>
            </div>
        </div>
    )
}

export default Search
