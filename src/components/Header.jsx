import React from "react";
import logo from "../assets/images/amr-removebg-preview.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-lightpeach text-sapgreen p-4">
      <div className="flex items-center">
        <img className="h-16 w-26 rounded-full ml-10" src={logo} alt="Logo" />
        <nav className="ml-20 hidden md:block">
          <ul className="flex space-x-7 font-bold font-sans">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/find-doctors" className="hover:underline">
                Find Doctors
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-200 font-bold">
          Login
        </button>
        <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800 font-bold">
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-600 hover:text-green-700" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
