import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import FeaturesPage from "./pages/FeaturesPage";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import SBox1 from "./pages/devices/SBox1";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/devices/sbox1" element={<SBox1 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
