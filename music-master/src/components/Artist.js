import React from 'react';

const Artist = ({artist}) => {
    if(!artist) { return null; }
    const {name, followers, images, genres } = artist;
    const image = images.length > 0 ? images[0].url : null
    return (
        <div>
            <h1>{name}</h1>
            <h1>followers {followers.total}</h1>
            { image ?  <img style={{width: 400, height: 400 }} src={image} alt='album' /> : null }
        </div>
    )
};

export default Artist;
