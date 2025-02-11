import { X } from 'lucide-react';
import React from 'react';

const Trailer = ({ trailers, currentTrailer, onClose, onChangeTrailer }) => {
  if (!currentTrailer) return null;

  const trailerIndex = trailers.findIndex(t => t.id === currentTrailer.id);

  const changeTrailer = (direction) => {
    const newIndex = (trailerIndex + direction + trailers.length) % trailers.length;
    onChangeTrailer(trailers[newIndex]);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-4 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-100">
            {currentTrailer.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Close trailer"
          >
            <X size={24} />
          </button>
        </div>
        <div className="aspect-w-16 aspect-h-9 mb-4">
          {currentTrailer.key ? (
            <iframe
              src={`https://www.youtube.com/embed/${currentTrailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${currentTrailer.key}`}
              title={currentTrailer.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[300px] rounded-lg"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-700 rounded-lg">
              <p className="text-gray-300">The trailer is not available</p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 justify-center flex-grow">
            {trailers.map((trailer, index) => (
              <button
                key={trailer.id}
                onClick={() => onChangeTrailer(trailer)}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${index === trailerIndex ? 'bg-red-600 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                  }`}
                aria-label={`View trailer ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;