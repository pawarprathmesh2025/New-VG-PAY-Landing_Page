import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import device1 from "/src/assets/device1.png";
import device2 from "/src/assets/device2.png";
import device3 from "/src/assets/device3.png";
import device4 from "/src/assets/device4.png";

/* PAGE ENTRANCE */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* LEFT ENTER */
const leftEnter = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* RIGHT ENTER */
const rightEnter = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.1 },
  },
};

const Hero = () => {
  const devices = [device1, device2, device3, device4];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % devices.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="section container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "3rem",
      }}
    >
      {/* LEFT CONTENT */}
      <motion.div style={{ flex: 1 }} variants={leftEnter}>
        <div
          style={{
            background: "#d1fae5",
            color: "#065f46",
            padding: "0.3rem 0.8rem",
            borderRadius: "1rem",
            display: "inline-block",
            marginBottom: "1rem",
            fontWeight: 600,
          }}
        >
          Trusted by 10,000+ merchants
        </div>

        <h1 style={{ marginBottom: "1rem", fontWeight: 800 }}>
          Power Your Business{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #16a34a, #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
            }}
          >
            with VGPAY
          </span>
        </h1>

        <p style={{ marginBottom: "1.5rem", color: "#334155" }}>
          The most advanced payment platform designed to accelerate your business
          growth and streamline operations.
        </p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <button className="btn cta-primary">Start Free Trial</button>
          <button className="btn btn-outline">Watch Demo</button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={rightEnter}
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* FLOATING WRAPPER */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "relative" }}
        >
          {/* BACKGROUND BOX */}
          <div
            style={{
              width: "520px",
              height: "520px",
              background: "#f8fafc",
              borderRadius: "1.5rem",
              boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={devices[active]}
                alt="Payment Device"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  inset: 0,
                  margin: "auto",
                  height: "480px",
                }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        {/* SECURE CARD */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: "-10%",
            top: "26%",
            background: "linear-gradient(135deg, #ecfdf5, #d1fae5)",
            padding: "0.9rem 1.2rem",
            borderRadius: "1rem",
            boxShadow:
              "0 12px 30px rgba(16,185,129,0.25), inset 0 0 0 1px rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontWeight: 700,
            color: "#065f46",
          }}
        >
          <span
            style={{
              background: "#10b981",
              color: "#fff",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ✓
          </span>
          Secure
        </motion.div>

        {/* FAST PAYMENTS CARD */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            right: "-10%",
            bottom: "20%",
            background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
            padding: "0.9rem 1.3rem",
            borderRadius: "1rem",
            boxShadow:
              "0 12px 30px rgba(59,130,246,0.25), inset 0 0 0 1px rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontWeight: 700,
            color: "#1e40af",
          }}
        >
          <span
            style={{
              background: "#3b82f6",
              color: "#fff",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ⚡
          </span>
          Fast Payments
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
