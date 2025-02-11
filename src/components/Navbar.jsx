import { Home } from 'lucide-react';
import React from 'react';
import movieLogo from '../assets/movie-svgrepo-com.svg';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-lg mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16 relative">
          <a
            href="/"
            className="absolute left-4 flex items-center space-x-3 text-white hover:text-gray-300"
          >
            <Home size={20} />
            <span>Home</span>
          </a>

          <div className="flex-1 flex justify-center items-center">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={movieLogo}
                alt="Pages Logo"
                className="h-8"
              />
              <span className="text-2xl font-bold text-white">
                Look For A Movie
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;