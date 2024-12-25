import React from "react";

const AppointmentSection = ({ fee, timeSlots }) => {
  return (
    <div className="mt-6 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-600">Appointment Fee</h2>
        <p className="text-[#365314] text-lg font-bold">₹{fee.toFixed(2)}</p>
      </div>
      <h3 className="text-md font-semibold text-gray-700 mb-2">
        Select your mode of session
      </h3>
      <div className="flex justify-between gap-2 mb-6">
        <button className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg text-center shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-[#365314]">
          In-Clinic
          <p className="text-sm text-gray-500">45 Mins</p>
        </button>
        <button className="w-full px-4 py-2 text-[#365314] bg-[#f0f8eb] border border-[#c4e2c2] rounded-lg text-center shadow-sm hover:bg-[#d9edce] focus:ring-2 focus:ring-[#365314]">
          Video ✅
          <p className="text-sm text-[#365314]">45 Mins</p>
        </button>
        <button className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg text-center shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-[#365314]">
          Chat
          <p className="text-sm text-gray-500">10 Mins</p>
        </button>
      </div>

      <h3 className="text-md font-semibold text-gray-700 mb-4">
        Pick a time slot
      </h3>
      <div className="flex items-center gap-2 mb-4">
        <button className="px-2 py-1 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">
          ◀
        </button>
        {Object.keys(timeSlots).map((date, index) => (
          <div
            key={index}
            className={`px-4 py-2 border ${
              index === 0
                ? "border-[#365314] text-[#365314]"
                : "border-gray-300 text-gray-500"
            } rounded-lg text-center bg-gray-50 hover:bg-gray-100`}
          >
            <p className="font-semibold">{date}</p>
            <p className="text-sm">
              {index === 0 ? "10 slots" : index === 1 ? "2 slots" : "5 slots"}
            </p>
          </div>
        ))}
        <button className="px-2 py-1 bg-gray-100 rounded-full shadow-sm hover:bg-gray-200">
          ▶
        </button>
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-2">Morning</h4>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {["09:00 AM", "09:30 AM", "10:00 AM", "10:15 AM", "10:45 AM", "11:00 AM"].map(
            (slot, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-center border rounded-lg ${
                  slot === "11:00 AM"
                    ? "bg-[#365314] text-white"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {slot}
              </button>
            )
          )}
        </div>

        <h4 className="text-md font-semibold text-gray-700 mb-2">Evening</h4>
        <div className="grid grid-cols-4 gap-2">
          {["04:00 PM", "04:15 PM", "04:30 PM", "04:45 PM", "05:15 PM"].map(
            (slot, i) => (
              <button
                key={i}
                className="px-4 py-2 text-center border rounded-lg bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                {slot}
              </button>
            )
          )}
        </div>
      </div>
      <button className="w-full mt-6 px-4 py-3 text-white bg-[#365314] rounded-lg shadow-md hover:bg-[#2b4510] focus:ring-2 focus:ring-[#365314]">
        Make An Appointment
      </button>
    </div>
  );
};

export default AppointmentSection;
