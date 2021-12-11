import React from 'react'
import { useParams } from 'react-router-dom'

function ArtistPage() {
    let { username } = useParams()

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Artist Name: {username}</h1>
        </div>
    )
}

export default ArtistPage
