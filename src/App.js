import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen">
        <Header />
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
