import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const devices = [
  "/devices/device1.png",
  "/devices/device2.png",
  "/devices/device3.png",
  "/devices/device4.png",
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Auto change device image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % devices.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const heading = "Power Your Business with";

  return (
    <section className="hero" id="home">
      {/* LEFT TEXT */}
      <div className="hero-text">
        
        {/* HERO HEADING (word by word animation) */}
        <motion.h1
  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
>
  Power Your Business with{" "}
  <span style={{ color: "#4caf50" }}>VGPAY</span>
</motion.h1>


        {/* PARAGRAPH */}
        <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  The most advanced payment platform designed to accelerate your
  business growth and streamline operations.
</motion.p>


        {/* BUTTONS */}
        <motion.div
  className="hero-buttons"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  <motion.button
    className="primary"
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Start Free Trial
  </motion.button>

  <motion.button
    className="secondary"
    whileHover={{ y: -3, scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    ▶ Watch Demo
  </motion.button>
</motion.div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <AnimatePresence mode="wait">
          <motion.img
  key={current}
  src={devices[current]}
  alt={`VG Pay Device ${current + 1}`}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -10, 0], // floating
  }}
  transition={{
    opacity: { duration: 0.6 },
    scale: { duration: 0.6 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  exit={{ opacity: 0, scale: 0.9 }}
  style={{ width: "100%", height: "100%", objectFit: "contain" }}
/>

        </AnimatePresence>

        {imgError && (
          <div className="device-fallback">Device image failed to load</div>
        )}
      </div>
        {/* TRUSTED BY */}
<motion.div
  className="hero-trust"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
>
  <div className="avatar-group">
    <img src="/devices/drdo.png" alt="User 1" />
    <img src="/devices/Govt-of-Haryana-Commons.avif" alt="User 2" />
    <img src="/devices/India Government-01.jpg" alt="User 3" />
  </div>

  <p>
    Trusted by <strong>10,000+</strong> merchants worldwide
  </p>
</motion.div>


    </section>
  );
}

export default Hero;
