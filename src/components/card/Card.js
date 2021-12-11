import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

function Card({ item }) {
    return (
        <Link to={`/artist/${item.artist}`} className='card'>
            <div className="card-container">
                <img
                    width="100%"
                    height="240"
                    src={item.image}
                    alt=""
                  />
                <div className ="card-title">
                <h4><b>{item.title}</b></h4>
                </div>
            </div>
        </Link>
    )
}

export default Card
