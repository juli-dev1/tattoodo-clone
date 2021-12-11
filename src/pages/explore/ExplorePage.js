import React, { useEffect, useState } from 'react';
import CardSection from '../../components/cardSection/CardSection';


function ExplorePage() {

  const [styles, setStyles] = useState();
  const [destionations, setDestionations] = useState();
  const [page, setPage] = useState(3);

  useEffect(() => {
    fetch('http://localhost:8000/styles?_page=1&_limit=10')
    .then(response => response.json())
    .then(data => setStyles(data))
    .catch(err => console.error(err));
    
    fetch('http://localhost:8000/destinations?_page=1&_limit=10')
      .then(response => response.json())
      .then(data => setDestionations(data))
      .catch(err => console.error(err));
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
