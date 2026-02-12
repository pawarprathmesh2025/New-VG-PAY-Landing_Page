import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
