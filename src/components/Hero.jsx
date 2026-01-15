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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const heading = "Power Your Business with VGPAY";

  // Container for staggered letters
  const sentenceVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  // Letter animation: pop-in + rotation + slight wave
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotate: (Math.random() - 0.5) * 20 },
    visible: {
      opacity: 1,
      y: [0, -4, 2, 0], // gentle wave
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
        duration: 1.2,
      },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        {/* HERO HEADING */}
        <motion.h1
          style={{ display: "inline-block", overflow: "hidden" }} // clip reveal effect
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          {heading.split(" ").map((word, wi) => (
            <span key={wi} style={{ display: "inline-block", marginRight: "6px" }}>
              {word.split("").map((letter, li) => (
                <motion.span
                  key={li}
                  variants={letterVariants}
                  style={{
                    display: "inline-block",
                    color: word === "VGPAY" ? "#4caf50" : undefined,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* PARAGRAPH */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          The most advanced payment platform designed to accelerate your
          business growth and streamline operations.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
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
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
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
        transition={{ delay: 1.2 }}
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
