import React from 'react';

const MovieCard = ({ title, poster }) => {
    return (
        <div className="movie-card">
            <img src={poster} alt={title} />
            <h3>{title}</h3>
        </div>
    );
};

export default MovieCard; 