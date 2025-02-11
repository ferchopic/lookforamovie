import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesGrid from '../components/MoviesGrid';
import Pagination from '../components/Pagination';
import { searchMovies } from '../services/api';

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchSearchResults = async () => {
            const data = await searchMovies(query, currentPage);
            setMovies(data.results);
            setTotalPages(data.total_pages);
        };
        fetchSearchResults();
    }, [query, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Search results for: {query}</h1>
            <MoviesGrid movies={movies} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default SearchResults; 