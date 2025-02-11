import React, { useEffect, useState } from 'react';
import MoviesGrid from '../components/MoviesGrid';
import Pagination from '../components/Pagination';
import { getPopularMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getPopularMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className='bg-gray-900 bg-opacity-30'>
      <div className="bg-gray-800 ">
        <h1 className="text-4xl font-serif text-center mb-8">Popular Movies</h1>
      </div>
      <MoviesGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;