import { motion } from "framer-motion";

const clients = [
  "/devices/drdo.png",
  "/devices/Govt-of-Haryana-Commons.avif",
  "/devices/India Government-01.jpg",
  "/devices/aquigen_logo.jpg",
  "/devices/icici.jpg",
  "/devices/lokmangal1.jpg",
  
];

const TrustedClients = () => {
  return (
    <section className="trusted-clients">
      <h2>Our Trusted Clients</h2>

      <div className="logo-marquee">
        <div className="logo-track">
          {clients.map((logo, i) => (
            <div className="logo-card" key={i}>
              <img src={logo} alt="Client" />
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default TrustedClients;