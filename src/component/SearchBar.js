import React from 'react';

const SearchBar = ({ searchTerm, onChange }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search blog titles..."
      className="w-full p-2 border border-gray-300 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;
