import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="flex-grow px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 border border-blue-700 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder-gray-200"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;