import React , { useState }from 'react'
import BasicTabs from '../profileTab/ProfileTab'
import SaveBtn from '../saveBtn/SaveBtn'
import "./artistsProfileDetails.css"
import { IoEllipsisHorizontalSharp, IoChevronDownOutline, IoChevronUpOutline } from 'react-icons/io5'
import ArtistProfileImage from '../artistProfileImage/ArtistProfileImage'


function ArtistsProfileDetails({ artist }) {

    const [disable, setDisable] = useState(true);
    return (
        <div className='artistsProfileDetails'>
            <div className='artistsProfileDetails-menuBtn'>
                <IoEllipsisHorizontalSharp size={22} />
            </div>
            <div className='artistsProfileDetails-header'>
                <div>
                    <ArtistProfileImage link="https://d1kq2dqeox7x40.cloudfront.net/images/profile/images/20180713_FU8h9quDCNvBCTf.png?h=64&w=64" / > 
                </div>
                <div className='artistsProfileDetails-header-text'>
                    <h2 className='username'>{artist.name} {artist.username}</h2>
                    
                    <div className='active'><div className='activeCircle'></div><span className='status'>Availability: </span>{artist.availability}</div>
                </div>
            </div>
                <div className='save-btn'>
                    <SaveBtn>Save</SaveBtn>
                </div>
                <div className='disable-btn' onClick={() => setDisable(!disable)}>
                    {disable ?
                       (<div>
                            <p>More Information</p>
                            <IoChevronDownOutline />
                       </div>)
                        :
                        (<div>
                            <p>Close</p>
                            <IoChevronUpOutline />
                        </div>)
                    }
                    
                </div>
                <div className={disable? 'profileTabs-disable':''}>
                    <BasicTabs artist={artist} />
                </div>
        </div>
    )
}

export default ArtistsProfileDetails
