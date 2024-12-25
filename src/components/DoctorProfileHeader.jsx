import React from "react";
import img1 from "../assets/images/image.png";

const DoctorProfileHeader = ({ doctor }) => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-green-50 p-8 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          src={img1}
          alt={doctor.name}
          className="h-20 w-20 rounded-full object-cover border-4 border-green-200 shadow-md"
        />
        <div className="ml-6 flex flex-col">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-extrabold text-gray-800">{doctor.name}</h1>
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
              ✓ 
            </span>
          </div>
          <p className="text-lg text-gray-600 font-medium">{doctor.specialty}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-yellow-500 text-lg font-semibold">{doctor.rating}</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>
        <button className="ml-auto bg-[#3f6212] hover:bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg transition-all">
          Book an Appointment
        </button>
      </div>
      <div className="flex justify-around mt-6 border-t border-gray-200 pt-4">
        <div className="text-center">
          <p className="text-2xl font-extrabold text-gray-800">{doctor.followers}</p>
          <p className="text-sm text-gray-500 font-medium">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold text-gray-800">{doctor.following}</p>
          <p className="text-sm text-gray-500 font-medium">Following</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-extrabold text-gray-800">{doctor.posts}</p>
          <p className="text-sm text-gray-500 font-medium">Posts</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileHeader;
