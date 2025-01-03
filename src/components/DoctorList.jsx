import React from "react";
import DoctorCard from "./DoctorCard";
import prerana from "../assets/images/image.png";
import riya from "../assets/images/image2.png"
import alisha from "../assets/images/image3.png"

const DoctorList = () => {
  const doctors = [
    {
      image: prerana,
      name: "Dr. Prerna Narang",
      specialization: "Male-Female Infertility",
      experience: 7,
      languages: ["English", "Hindi", "Marathi"],
      videoFee: 800,
      rating: 4.5,
    },
    {
      image: riya,
      name: "Dr. Riya Sharma",
      specialization: "Cardiologist",
      experience: 10,
      languages: ["English", "Hindi"],
      videoFee: 1200,
      rating: 4.8,
    },
    {
      image: alisha,
      name: "Dr. Alisha Verma",
      specialization: "Dermatologist",
      experience: 5,
      languages: ["English", "Marathi"],
      videoFee: 700,
      rating: 4.6,
    },
  ];

  return (
    <section className="px-4 py-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default DoctorList;
