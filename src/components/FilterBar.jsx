import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    expertise: "",
    gender: "",
    fees: "",
    language: "",
  });

  const [activeFilters, setActiveFilters] = useState([]);

  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters, [type]: value };
    setFilters(newFilters);

    const filterExists = activeFilters.find((filter) => filter.type === type);
    if (filterExists) {
      setActiveFilters(
        activeFilters.map((filter) =>
          filter.type === type ? { type, label: value } : filter
        )
      );
    } else {
      setActiveFilters([...activeFilters, { type, label: value }]);
    }
  };

  const removeFilter = (type) => {
    setActiveFilters(activeFilters.filter((filter) => filter.type !== type));
    setFilters({ ...filters, [type]: "" });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <div className="flex flex-wrap items-center justify-evenly">
        <select
          className="border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
          value={filters.expertise}
          onChange={(e) => handleFilterChange("expertise", e.target.value)}
        >
          <option value="">Expertise</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Cardiology">Cardiology</option>
        </select>
        <select
          className="border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
          value={filters.gender}
          onChange={(e) => handleFilterChange("gender", e.target.value)}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className="border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
          value={filters.fees}
          onChange={(e) => handleFilterChange("fees", e.target.value)}
        >
          <option value="">Fees</option>
          <option value="₹0 - ₹500">₹0 - ₹500</option>
          <option value="₹500 - ₹1000">₹500 - ₹1000</option>
        </select>
        <select
          className="border border-gray-300 px-3 py-2 rounded-md focus:ring focus:ring-green-200 focus:outline-none"
          value={filters.language}
          onChange={(e) => handleFilterChange("language", e.target.value)}
        >
          <option value="">Languages</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </select>
        <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300">
          Apply Filters
        </button>
      </div>
      <div className="flex justify-end flex-wrap gap-2 mt-3">
        {activeFilters.map((filter) => (
          <div
            key={filter.type}
            className="flex items-center bg-gray-100 text-gray-700 px-5 py-3 rounded-full text-sm" 
          >
            <span>{filter.label}</span>
            <button
              className="ml-2 text-gray-500 hover:text-gray-700"
              onClick={() => removeFilter(filter.type)}
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
