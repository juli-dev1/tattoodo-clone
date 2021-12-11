import React from 'react'
import Carousel from 'react-elastic-carousel'
import Card from '../card/Card'
import './cardSection.css'

const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 2 },
];

function CardSection({ sectionTitle, sectionParagraph, items, fetchMoreDta }) {
    return (
        <div className="card-section">
            <div className='text-btn'>
                <div className="card-text">
                    <h2> {sectionTitle}</h2>
                    <p>{sectionParagraph}</p>
                </div>
                <div className='arrow-btn'>
                </div>
            </div>
            <div className="item" onClick={fetchMoreDta}>
                <Carousel 
                    breakPoints={breakPoints}  
                    pagination={false} 
                >
                    {
                        items.map((item) => {
                            return (
                                <div key={item.id}>
                                    <Card item={item} />
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default CardSection
