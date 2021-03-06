import React, { useEffect, useState } from 'react';
import CardSection from '../../components/cardSection/CardSection';


function ExplorePage() {

  const [styles, setStyles] = useState([
    {
      "id": 1,
      "title": "Black & Gray",
      "artist": "Artist One",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/black_and_grey.jpg?w=900"
    },
    {
      "id": 2,
      "title": "Blackwork",
      "artist": "Artist Two",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/blackwork.jpg?w=400"
    },
    {
      "id": 3,
      "title": "Chicano",
      "artist": "Artist Three",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/chicano.jpg?w=400"
    },
    {
      "id": 4,
      "title": "Dotwork",
      "artist": "Artist Four",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/dotwork.jpg?w=400"
    },
    {
      "id": 5,
      "title": "Fineline",
      "artist": "Artist Five",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/fineline.jpg?w=400"
    },
    {
      "id": 6,
      "title": "Geometric",
      "artist": "Artist Six",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/geometric.jpg?w=400"
    },
    {
      "id": 7,
      "title": "Hand-Poked",
      "artist": "Artist Seven",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/hand_poke.jpg?w=400"
    },
    {
      "id": 8,
      "title": "Black & Gray",
      "artist": "Artist Eight",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/black_and_grey.jpg?w=400"
    },
    {
      "id": 9,
      "title": "Dark Art",
      "artist": "Artist Nine",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/dark_art.jpg?w=400"
    },
    {
      "id": 10,
      "title": "Japanese (Irezumi)",
      "artist": "Artist Ten",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/styles/japanese.jpg?w=400"
    }
  ]);
  const [destionations, setDestionations] = useState([
    {
      "id": 1,
      "title": "Athens",
      "artist": "Artist 1",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20191023_AprGYIJ6lRQLjbf.jpg?w=400"
    },
    {
      "id": 2,
      "title": "Istanbul",
      "artist": "Artist 2",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20200304_8q3xZXtIu9y1aXX.jpg?w=400"
    },
    {
      "id": 3,
      "title": "Budapest",
      "artist": "Artist 3",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20190927_yIk1mXKjqLz1dbe.jpg?w=400"
    },
    {
      "id": 4,
      "title": "Rome",
      "artist": "Artist 4",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20180613_VULCWws0cHWtqRT.jpg?w=400"
    },
    {
      "id": 5,
      "title": "Vienna",
      "artist": "Artist 5",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20200304_cTPnHrvkO9xYXka.jpg?w=400"
    },
    {
      "id": 6,
      "title": "Munich",
      "artist": "Artist 6",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20190916_JIigQNoslvK3cyg.jpg?w=400"
    },
    {
      "id": 7,
      "title": "Milan",
      "artist": "Artist 7",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20180613_elECi6jBBCugVNo.jpg?w=400"
    },
    {
      "id": 8,
      "title": "Kyiv (Kiev)",
      "artist": "Artist 8",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20200224_HsqbqLQYfprgsQT.jpg?w=400"
    },
    {
      "id": 9,
      "title": "Prague",
      "artist": "Artist 9",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20180803_5mzE7ASKnFzef0K.jpg?w=400"
    },
    {
      "id": 10,
      "title": "Warsaw",
      "artist": "Artist 10",
      "image": "https://d1kq2dqeox7x40.cloudfront.net/images/destinations/20200128_n3HFS8f2gwxbFAB.jpg?w=400"
    }
  ]);
  const [page, setPage] = useState(3);

  useEffect(() => {
    // fetch('http://localhost:8000/styles?_page=1&_limit=10')
    // .then(response => response.json())
    // .then(data => setStyles(data))
    // .catch(err => console.error(err));
    
    // fetch('http://localhost:8000/destinations?_page=1&_limit=10')
    //   .then(response => response.json())
    //   .then(data => setDestionations(data))
    //   .catch(err => console.error(err));
  }, []);
  

  const fetchMoreDta = () => {
    // fetch(`http://localhost:8000/styles?_page=${page}&_limit=2`)
    //   .then(response => response.json())
    //   .then(data => data.map((item)=>{
    //     setStyles(styles=>[...styles,item])
    //   }))
    //   .catch(err => console.error(err));
    //   setPage(page+1)
  }
  

    return (
        <div>
            { styles ? 
                (<CardSection
                    sectionTitle='Browse by Style'
                    sectionParagraph='Find artists by your preferred style'
                    items={styles}
                    fetchMoreDta={fetchMoreDta}
                />) 
              : 
                (<div style={{textAlign:'center'}}> <h1> Loading...</h1> </div>) 
            }

            {destionations ? 
                ( <CardSection
                    sectionTitle='Tattoo Destinations'
                    sectionParagraph='Find artists and studios around the world'
                    items={destionations}
                // fetchMoreDta={fetchMoreDta}
                />) 
              : (<div style={{textAlign:'center'}}> <h1> Loading...</h1> </div>)
            }
        </div>
    )
}

export default ExplorePage
