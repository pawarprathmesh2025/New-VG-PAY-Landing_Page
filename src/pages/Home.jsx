import React from "react";

import Hero from "../components/Hero";
import TrustedClients from "../components/TrustedClients";
import StatsSection from "../components/StatsSection";
import DevicesSection from "../components/DeviceSection";
import HowItWorks from "../components/HowItWorks";
import PricingPlans from "../components/PricingPlans";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import SecuritySection from "../components/SecuritySection";
import CertificationSection from "../components/CertificationSection";
import FAQ from "../components/FAQ";
import AiAssistant from "../components/AiAssistant/AiAssistant";
import Footer from "../components/Footer";

import "../index.css";

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedClients />
      <StatsSection />
      <DevicesSection/>
      <Features />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />

      <div className="page-dark-bg">
        <SecuritySection />
        <CertificationSection />
      </div>

      <FAQ />
      <AiAssistant />
      <Footer />
    </>
  );
};

export default Home;
