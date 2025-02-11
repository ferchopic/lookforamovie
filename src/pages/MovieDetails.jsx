import { Play } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from '../components/Trailer';
import { getMovieDetails, getMovieTrailers } from '../services/api';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailers, setTrailers] = useState([]);
    const [selectedTrailer, setSelectedTrailer] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const movieData = await getMovieDetails(id);
                setMovie(movieData);

                const trailerData = await getMovieTrailers(id);
                const availableTrailers = trailerData.results.filter(
                    video => video.type === 'Trailer' && video.site === 'YouTube'
                );
                setTrailers(availableTrailers);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        fetchMovieData();
    }, [id]);

    if (!movie) return <div className="text-center">Loading...</div>;

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-auto flex justify-center md:justify-start">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-[230px] mx-[50px] h-auto rounded-lg shadow-lg object-cover"
                />
            </div>
            <div className="md:flex-1">
                <h1 className="text-3xl font-bold mb-4 text-gray-100">{movie.title}</h1>
                <p className="text-gray-400 mb-4">{movie.release_date}</p>
                <p className="mb-4 text-gray-300">{movie.overview}</p>
                <p className="mb-4 text-gray-300">
                    <span className="font-semibold text-gray-100">Rating:</span>{' '}
                    {movie.vote_average.toFixed(1)} / 10
                </p>
                {trailers.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                        {trailers.map((trailer) => (
                            <button
                                key={trailer.id}
                                onClick={() => setSelectedTrailer(trailer)}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center space-x-2"
                            >
                                <Play size={20} />
                                <span>{trailer.name}</span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400">No trailers available</p>
                )}
            </div>
            {selectedTrailer && (
                <Trailer
                    trailers={trailers}
                    currentTrailer={selectedTrailer}
                    onClose={() => setSelectedTrailer(null)}
                    onChangeTrailer={setSelectedTrailer}
                />
            )}
        </div>
    );
};

export default MovieDetails; 