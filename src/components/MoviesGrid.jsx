import React from 'react';
import MovieCard from './PelisCarta';

const MoviesGrid = ({ movies }) => {
    const totalInRow = 5;

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-4 gap-y-6">
                {movies.map((movie, index) => (
                    <div key={movie.id} className="flex justify-center">
                        <MovieCard
                            movie={movie}
                            index={index}
                            totalInRow={totalInRow}
                            className="transition-transform transform hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesGrid; 