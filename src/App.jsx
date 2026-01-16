import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Services from "./components/Services";
import TitleSection from "./components/TitleSection";
import AwardsRecognition from "./components/AwardsRecognition";
import TeamSection from "./components/TeamSection";
import DevicesSection from "./components/DevicesSection";


import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedClients />
      <Stats />
      <DevicesSection />
      <Features />
      <Services />
      <TitleSection />
      <AwardsRecognition />
      <TeamSection />
      
    </>
  );
}

export default App;
