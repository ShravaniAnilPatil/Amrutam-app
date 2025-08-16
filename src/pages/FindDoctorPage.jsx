import React, { useMemo, useState } from "react";

const DOCTORS = [
  {
    id: 1,
    name: "Dr. Prerna Narang",
    rating: 4.5,
    specialty: "Male–Female Infertility",
    years: 7,
    gender: "Female",
    fee: 600,
    languages: ["English", "Hindi"],
    city: "Pune",
    avatar: "https://i.pravatar.cc/240?img=47",
  },
  {
    id: 2,
    name: "Dr. Riya Sharma",
    rating: 4.8,
    specialty: "Cardiologist",
    years: 10,
    gender: "Female",
    fee: 900,
    languages: ["English", "Hindi", "Marathi"],
    city: "Mumbai",
    avatar: "https://i.pravatar.cc/240?img=65",
  },
  {
    id: 3,
    name: "Dr. Alisha Verma",
    rating: 4.6,
    specialty: "Dermatologist",
    years: 5,
    gender: "Female",
    fee: 700,
    languages: ["English"],
    city: "Delhi",
    avatar: "https://i.pravatar.cc/240?img=20",
  },
  {
    id: 4,
    name: "Dr. Arjun Mehta",
    rating: 4.4,
    specialty: "Orthopedic",
    years: 12,
    gender: "Male",
    fee: 800,
    languages: ["English", "Hindi", "Gujarati"],
    city: "Ahmedabad",
    avatar: "https://i.pravatar.cc/240?img=12",
  },
  {
    id: 5,
    name: "Dr. Neha Kulkarni",
    rating: 4.7,
    specialty: "Gynecologist",
    years: 9,
    gender: "Female",
    fee: 1000,
    languages: ["English", "Marathi"],
    city: "Pune",
    avatar: "https://i.pravatar.cc/240?img=32",
  },
];

const expertiseOptions = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "Gynecologist",
  "Orthopedic",
  "Male–Female Infertility",
];

const genderOptions = ["All", "Female", "Male"];

const feeOptions = [
  { label: "All", range: [0, 100000] },
  { label: "≤ ₹600", range: [0, 600] },
  { label: "₹601–₹800", range: [601, 800] },
  { label: "₹801–₹1000", range: [801, 1000] },
  { label: "₹1000+", range: [1001, 100000] },
];

const languageOptions = ["All", "English", "Hindi", "Marathi", "Gujarati"];

export default function FindDoctors() {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [expertise, setExpertise] = useState("All");
  const [gender, setGender] = useState("All");
  const [feeLabel, setFeeLabel] = useState("All");
  const [language, setLanguage] = useState("All");
  const [applyKey, setApplyKey] = useState(0);

  const filtered = useMemo(() => {
    const feeRange =
      feeOptions.find((f) => f.label === feeLabel)?.range || [0, 100000];

    return DOCTORS.filter((d) => {
      const matchesLocation = location ? d.city === location : true;
      const matchesSearch =
        !applyKey || search.trim() === ""
          ? true
          : d.name.toLowerCase().includes(search.toLowerCase()) ||
            d.specialty.toLowerCase().includes(search.toLowerCase());
      const matchesExpertise =
        expertise === "All" ? true : d.specialty === expertise;
      const matchesGender = gender === "All" ? true : d.gender === gender;
      const matchesFee = d.fee >= feeRange[0] && d.fee <= feeRange[1];
      const matchesLanguage =
        language === "All" ? true : d.languages.includes(language);

      return (
        matchesLocation &&
        matchesSearch &&
        matchesExpertise &&
        matchesGender &&
        matchesFee &&
        matchesLanguage
      );
    });
  }, [location, search, expertise, gender, feeLabel, language, applyKey]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Hero Section with gradient */}
      <section className="bg-gradient-to-r from-[#fdeedc] to-[#fffaf2] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900">
            Find Your Doctor
          </h1>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            Search and book appointments with the best doctors across cities.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              className="w-full rounded-full border px-4 py-3 outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Location</option>
              {["Mumbai", "Pune", "Delhi", "Ahmedabad"].map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <input
              type="text"
              className="w-full rounded-full border px-4 py-3 outline-none"
              placeholder="Search doctors by name or specialty…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={() => setApplyKey((k) => k + 1)}
              className="w-full rounded-full bg-green-900 text-white font-semibold px-4 py-3"
            >
              Apply Filters
            </button>
          </div>

          {/* More Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            <select
              className="rounded-full border px-3 py-2"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            >
              {expertiseOptions.map((e1) => (
                <option key={e1} value={e1}>
                  {e1 === "All" ? "Expertise" : e1}
                </option>
              ))}
            </select>

            <select
              className="rounded-full border px-3 py-2"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              {genderOptions.map((g) => (
                <option key={g} value={g}>
                  {g === "All" ? "Gender" : g}
                </option>
              ))}
            </select>

            <select
              className="rounded-full border px-3 py-2"
              value={feeLabel}
              onChange={(e) => setFeeLabel(e.target.value)}
            >
              {feeOptions.map((f) => (
                <option key={f.label} value={f.label}>
                  {f.label === "All" ? "Fees" : f.label}
                </option>
              ))}
            </select>

            <select
              className="rounded-full border px-3 py-2"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languageOptions.map((l) => (
                <option key={l} value={l}>
                  {l === "All" ? "Languages" : l}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                setLocation("");
                setSearch("");
                setExpertise("All");
                setGender("All");
                setFeeLabel("All");
                setLanguage("All");
                setApplyKey((k) => k + 1);
              }}
              className="rounded-full border px-3 py-2 bg-gray-100 font-medium"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-600 py-16">
            No doctors match your filters.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((d) => (
              <DoctorCard key={d.id} d={d} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

/** --- Doctor Card --- */
function DoctorCard({ d }) {
  return (
    <article className="rounded-2xl bg-white border p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
      <div className="flex flex-col items-center text-center">
        <img
          src={d.avatar}
          alt={d.name}
          className="w-28 h-28 object-cover rounded-full shadow-md"
        />
        <span className="mt-2 text-sm font-medium bg-yellow-100 px-2 py-0.5 rounded-full">
          ⭐ {d.rating.toFixed(1)}
        </span>
        <h3 className="mt-3 text-lg font-bold text-green-900">{d.name}</h3>
        <p className="text-gray-700">{d.specialty}</p>

        <ul className="mt-3 space-y-1 text-gray-600 text-sm">
          <li>📍 {d.city}</li>
          <li>🗓️ {d.years} yrs experience</li>
          <li>💬 {d.languages.join(", ")}</li>
          <li>💳 ₹{d.fee} fee</li>
        </ul>

        <button className="mt-5 w-full rounded-lg bg-green-900 text-white py-2 font-semibold">
          Book Visit
        </button>
      </div>
    </article>
  );
}
