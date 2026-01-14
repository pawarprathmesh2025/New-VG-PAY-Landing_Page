import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedClients from "./components/TrustedClients";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Services from "./components/Services";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedClients />
      <Stats />
      <Features />
      <Services />
    </>
  );
}

export default App;
