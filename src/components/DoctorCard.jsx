import React from "react";
import { FaUserMd, FaClock, FaLanguage, FaVideo, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/profile/1");
  };

  return (
    <div className="bg-[#fffbeb] rounded-2xl shadow-lg shadow-gray-200 p-6 hover:shadow-xl hover:shadow-gray-300 transition-shadow duration-300 max-w-md mx-auto">
      <div className="flex justify-center flex-col items-center">
        <img
          className="h-32 w-32 rounded-full object-cover"
          src={doctor.image}
          alt={doctor.name}
        />
        <div className="flex items-center justify-center mt-2">
          <span className="bg-black text-white text-sm px-1 py-1 rounded-full font-medium flex items-center gap-1">
            {doctor.rating} <span className="text-yellow-400">★</span>
          </span>
        </div>
      </div>
      <h3 className="text-3xl font-semibold text-black text-center mt-4">
        {doctor.name}
      </h3>
      <div className="flex items-center mt-4 text-gray-500 text-sm">
        <FaUserMd className="mr-2" />
        <span>{doctor.specialization}</span>
      </div>
      <div className="flex items-center mt-2 text-gray-500 text-sm">
        <FaClock className="mr-2" />
        <span>{doctor.experience} years of Experience</span>
      </div>
      <div className="flex items-center mt-2 text-gray-500 text-sm">
        <FaLanguage className="mr-2" />
        <span>Speaks: {doctor.languages.join(", ")}</span>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
          <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-gray-50">
            <p className="flex items-center justify-center text-gray-500 text-sm mb-2">
              <FaVideo className="mr-2" /> Video Consultation
            </p>
            <p className="text-gray-800 font-semibold">₹{doctor.videoFee}</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-gray-50">
            <p className="flex items-center justify-center text-gray-500 text-sm mb-2">
              <FaComments className="mr-2" /> Chat Consultation
            </p>
            <p className="text-gray-800 font-semibold">Free</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <button
          className="border border-huegreen text-huegreen font-medium px-4 py-2 rounded-lg"
          onClick={handleClick}
        >
          View Profile
        </button>
        <button className="bg-[#065f46] text-white font-medium px-4 py-2 rounded-lg">
          Book a consultation
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
