import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import FindDoctorPage from './pages/FindDoctorPage';

const App = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
                        <Route path="/about-us" element={<AboutPage />} />
                        <Route path="/find-doctors" element={<FindDoctorPage />} />

                        

          </Routes>
        </div>
    </Router>
  );
};

export default App;
