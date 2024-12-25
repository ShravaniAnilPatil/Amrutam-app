import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowRight } from "react-icons/go";
import FilterBar from "../components/FilterBar";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
        {/* Blue Background for the Container */}
        <div className="bg-blue-100 p-6 rounded-lg">
          {/* Heading with White Text */}
          <h1 className="text-2xl font-bold text-center mb-4 text-black">
            Find Expert Doctors For An In-Clinic Session Here
          </h1>
          <div className="flex justify-center items-center gap-4 mb-6">
            {/* Location Select */}
            <div className="relative">
              <CiLocationOn className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#3f6212]" />
              <select
                className="block appearance-none w-48 bg-white border border-gray-300 text-[#3f6212] py-2 pl-10 pr-3 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
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
            {/* Search Input */}
            <div className="flex-grow max-w-md relative text-[#3f6212]">
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                className="w-full bg-white border border-gray-300 text-[#3f6212] py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-green-200"
              />
              <GoArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3f6212]" />
            </div>
          </div>
        </div>

        <FilterBar />
        <DoctorList />
      </div>
    </div>
  );
};

export default HomePage;
