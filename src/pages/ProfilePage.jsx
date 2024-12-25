import React from "react";
import DoctorProfileHeader from "../components/DoctorProfileHeader";
import AboutDoctor from "../components/AboutDoctor";
import AppointmentSection from "../components/AppointmentSection";
import SpecializationBadges from "../components/SpecializationBadges";
import WorkExperience from "../components/WorkExperience";
import ReviewSection from "../components/ReviewSection";

const ProfilePage = () => {
  const doctor = {
    name: " Prerna Narang",
    specialty: "Gynecologist",
    rating: 4.2,
    followers: 850,
    following: 18000,
    posts: 250,
    appointmentFee: 800,
    languages: ["English", "Hindi", "Telugu"],
    socialLinks: {
      instagram: "#",
      facebook: "#",
      youtube: "#",
      twitter: "#",
    },
    about:
      "Hello! I am Dr. Prerana Narang, a Gynecologist at Sanjivni Hospital in Surat. I love to work with hospital staff and senior doctors. Completed my graduation in Gynecology Medicine from the University of Health Sciences.",
    specializations: ["Women’s Health", "Skin Care", "Immunity", "Hair Care"],
    timeSlots: {
      "10 Oct": ["9:30 AM", "10:00 AM", "10:15 AM"],
      "11 Oct": ["2:00 PM"],
      "12 Oct": ["11:00 AM", "1:00 PM", "3:30 PM"],
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <DoctorProfileHeader doctor={doctor} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2 space-y-6">
            <AboutDoctor doctor={doctor} />
            <SpecializationBadges />
            <WorkExperience />
            <ReviewSection />
          </div>
          <div className="lg:col-span-1">
            <AppointmentSection
              fee={doctor.appointmentFee}
              timeSlots={doctor.timeSlots}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
