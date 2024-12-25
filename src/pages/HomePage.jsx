import React from "react";
import FilterBar from "../components/FilterBar";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Find Expert Doctors For An In-Clinic Session Here
        </h1>
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="relative">
            <select
              className="block appearance-none w-48 bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              defaultValue=""
            >
              <option value="" disabled>
                Select Location
              </option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
            </select>
          </div>
          <div className="flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search doctors by name or specialty..."
              className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
            />
          </div>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
            Search
          </button>
        </div>

        <FilterBar />
        <DoctorList />
      </div>
    </div>
  );
};

export default HomePage;
