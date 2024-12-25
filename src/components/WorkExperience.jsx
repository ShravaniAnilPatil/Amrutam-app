import React from "react";
import logo1 from "../assets/images/logo1.png";

const WorkExperience = () => {
  const experiences = [
    {
      hospital: "Midtown Medical Clinic",
      position: "Senior Doctor",
      years: "2016-PRESENT",
      logo: logo1,
    },
    {
      hospital: "Midtown Medical Clinic",
      position: "Senior Doctor",
      years: "2010-2015",
      logo: logo1,
    },
  ];

  return (
    <section className="mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Work Experience</h2>
      <p className="text-[#365314] font-semibold text-lg mb-6">
        I HAVE BEEN IN PRACTICE FOR: 7+ YEARS
      </p>
      <ul className="space-y-6">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center">
              <img
                src={exp.logo}
                alt={`${exp.hospital} logo`}
                className="w-10 h-10 rounded-md mr-4"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-800">{exp.hospital}</h4>
                <p className="text-sm text-gray-600">{exp.position}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm font-semibold">{exp.years}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WorkExperience;
