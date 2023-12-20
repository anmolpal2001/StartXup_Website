import React, { useState } from 'react';

const FilterSection = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('All-Category');

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <div className='hidden w-full max-w-screen-2xl md:flex justify-center mx-auto'>
      <div className='flex justify-center flex-col h-full'>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20">
          <div className="flex gap-5 md:gap-10">
            <h2 className='text-2xl text-white font-medium '>Filter : </h2>
            <select
              onChange={(e) => handleFilterChange(e.target.value)}
              className='px-10 py-2 rounded-sm'
              value={selectedFilter}
            >
              <option value="All-Category">All Category</option>
              <option value="Technology">Technology</option>
              <option value="Consumer Internet">Consumer Internet</option>
              <option value="Finance">Finance</option>
              <option value="Logistics">Logistics</option>
              <option value="Food & Beverage">Food & Beverage</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
