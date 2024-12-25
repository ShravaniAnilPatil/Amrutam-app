import React from "react";
import ss1 from "../assets/images/salon/ss1.png";
import ss2 from "../assets/images/salon/ss2.png";
import ss3 from "../assets/images/salon/ss3.png";
import ss4 from "../assets/images/salon/ss4.png";

const SpecializationBadges = () => {
  const badges = [
    { name: "Women’s Health", icon: ss4 },
    { name: "Skin Care", icon: ss1 },
    { name: "Immunity", icon: ss3},
    { name: "Hair Care", icon: ss2 },
  ];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">I Specialize In</h3>
      <div className="flex gap-6 mt-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-50 border border-gray-200 rounded-lg p-4 text-center"
          >
            <div className="w-16 h-16 mb-2 bg-green-100 rounded-full flex items-center justify-center">
              <img src={badge.icon} alt={badge.name} className="w-12 h-12 object-cover" />
            </div>
            <span className="text-sm font-medium text-gray-700">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationBadges;
