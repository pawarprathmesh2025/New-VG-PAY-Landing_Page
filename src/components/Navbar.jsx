import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setActive(id);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="navbar"
    >
      {/* LOGO */}
      <div className="logo">
        <img src="/devices/app-logo 1.png" alt="VG PAY Logo" />
      </div>

      {/* MENU */}
      <ul>
        <li
          className={active === "home" ? "active" : ""}
          onClick={() => scrollTo("home")}
        >
          Home
        </li>
        <li
          className={active === "features" ? "active" : ""}
          onClick={() => scrollTo("features")}
        >
          Features
        </li>
        <li
          className={active === "OurDevices" ? "active" : ""}
          onClick={() => scrollTo("OurDevices")}
        >
          Our Devices
        </li>
        <li
          className={active === "About" ? "active" : ""}
          onClick={() => scrollTo("About")}
        >
          About Us
        </li>
        <li
          className={active === "Contact" ? "active" : ""}
          onClick={() => scrollTo("Contact")}
        >
          Contact Us
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
