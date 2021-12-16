import React , {useState} from 'react'
import ArtistProfileImage from '../../components/artistProfileImage/ArtistProfileImage'
import ArtistsProfileDetails from '../../components/artistsProfileDetails/ArtistsProfileDetails'
import BasicTabs from '../../components/mainTab/MainTab'
import SaveBtn from '../../components/saveBtn/SaveBtn'
import './artistsPage.css'


function ArtistPage() {
  
    const [artist, setArtist] = useState({
      "id": 1,
      "name": "Sven",
      "username": "Rayen",
      "profileImage": "https://d1kq2dqeox7x40.cloudfront.net/images/profile/images/20180713_FU8h9quDCNvBCTf.png?h=64&w=64",
      "bio": "All designs are custom made with love, please do not copy✌",
      "profiles": [
        {
          "name": "Instagram",
          "src": "https://www.instagram.com/svenrayen/",
          "icon":"IoLogoInstagram"
        },
        {
          "name": "Website",
          "src": "https://svenrayen.com/",
          "icon":"IoLogoGoogle"
        }
      ],
      "availability": "Next month",
      "travelPlans": [],
      "styles": [
        {
          "title": "Black & Gray"
        },
        {
          "title": "Fineline"
        },
        {
          "title": "Geometric"
        },
        {
          "title": "Realism"
        }
      ],
      "tattoo": [
        {
          "id": 1,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210512_LYatTGbvUOqQLWk.jpg?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 2,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210512_kmRcwGSAqjAGnSS.jpg?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 3,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210429_asuvn5hFHIR9rb5.jpg?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 4,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20210512_NFOeuK018BlMAGI.jpg?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 5,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190305_7R0NkLzTbsx1IvY.jpg?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 6,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20190124_nykuggWxT7eLxVK.png?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 7,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20180907_YenK8bRAVTOzEKi.png?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 8,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20180925_QCax8QKw9NFxA5i.png?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 9,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20180907_dlaA95qFy5vpg5r.png?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        },
        {
          "id": 10,
          "image": "https://d1kq2dqeox7x40.cloudfront.net/images/posts/20180824_iL1aqV8ocXlKRZs.png?w=150",
          "likes": 0,
          "comments": [],
          "boards": [],
          "postedAt": ""
        }
      ],
      "flash": [],
      "workplace": [
        {
          "name": " ",
          "location": ""
        }
      ]
    })


    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(document.documentElement.scrollTop);
    if (scrolled > 30){
      setVisible(true)
    } 
    else if (scrolled <= 30){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

    return (
        <div className='artistPage'>
            <div className={`saveArtist ${visible ? 'saveArtist-vizible':''}`}>
                <div className="saveArtist-img">
                    <ArtistProfileImage  link="https://d1kq2dqeox7x40.cloudfront.net/images/profile/images/20180713_FU8h9quDCNvBCTf.png?h=50&w=50" / > 
                </div>
                <h4>{artist.name} {artist.username}</h4>
                <SaveBtn >Save</SaveBtn>
            </div>
            <div className="artistPage-main">
                <ArtistsProfileDetails artist={artist}/>
                <BasicTabs images={artist.tattoo} flash={artist.flash} workplace={artist.workplace}/>
                <div>
                </div>
            </div>
        </div>

    )
}

export default ArtistPage
