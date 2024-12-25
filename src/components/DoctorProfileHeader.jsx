import React from "react";
import img1 from "../assets/images/image.png";

const DoctorProfileHeader = ({ doctor }) => {
  return (
    <div className="bg-green-100 p-6">
      <div className="flex items-center">
        <img
          src={img1}
          alt={doctor.name}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div className="ml-4">
          <h1 className="text-xl font-bold">{doctor.name}</h1>
          <p className="text-sm text-gray-500">{doctor.specialty}</p>
          <p className="text-yellow-500 font-bold">{doctor.rating} ★</p>
        </div>
        <div className="ml-auto">
        <button className="bg-[#365314] text-white px-4 py-2 rounded-md border border-white">
             Book an Appointment
         </button>
        </div>
      </div>

      <div className="flex justify-around mt-4">
        <div className="text-center">
          <p className="text-lg font-bold">{doctor.followers}</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">{doctor.following}</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold">{doctor.posts}</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfileHeader;
