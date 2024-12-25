import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutDoctor = ({ doctor }) => {
  return (
    <div className="mt-6 bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">A Little About Me</h2>
        <button className="text-sm text-green-600 border border-green-600 rounded-full px-4 py-1">
          Follow +
        </button>
      </div>

      <p className="text-sm text-gray-700 mt-4 line-clamp-3">
        {doctor.about}
      </p>
      <button className="text-sm text-green-600 mt-2">Read More</button>

      <div className="mt-6">
        <h3 className="text-sm font-bold text-gray-800">Language Spoken</h3>
        <div className="flex gap-2 mt-2">
          {doctor.languages.map((lang, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-gray-100 text-gray-700 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {doctor.socialLinks.facebook && (
          <a
            href={doctor.socialLinks.facebook}
            className="text-gray-600 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        )}
        {doctor.socialLinks.twitter && (
          <a
            href={doctor.socialLinks.twitter}
            className="text-gray-600 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        )}
        {doctor.socialLinks.instagram && (
          <a
            href={doctor.socialLinks.instagram}
            className="text-gray-600 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        )}
        {doctor.socialLinks.linkedin && (
          <a
            href={doctor.socialLinks.linkedin}
            className="text-gray-600 text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </div>
  );
};

export default AboutDoctor;
