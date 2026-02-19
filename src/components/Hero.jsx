import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate

// Asset Imports
import device1 from "/src/assets/device1.png";
import device2 from "/src/assets/device2.png";
import device3 from "/src/assets/device3.png";
import device4 from "/src/assets/device4.png";

const Hero = () => {
  const navigate = useNavigate(); // <-- initialize navigate
  const devices = [device1, device2, device3, device4];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % devices.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [devices.length]);

  const colors = {
    brandGreen: "#1a8a5a",
    textMain: "#1a2332",
    textMuted: "#5e6c84",
    bgLight: "#fcfcfd" // Very subtle off-white for the section background
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
        background: colors.bgLight,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          alignItems: "center",
          gap: "60px",
          padding: "0 40px",
          zIndex: 2,
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            style={{
              color: colors.brandGreen,
              fontSize: "13px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "16px",
            }}
          >
            Trusted by 10,000+ merchants
          </div>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "24px",
              color: colors.textMain,
              letterSpacing: "-1.5px",
            }}
          >
            Power Your Business
            <br />
            <span style={{ color: colors.brandGreen }}>with VGPAY</span>
          </h1>

          <p
            style={{
              fontSize: "19px",
              color: colors.textMuted,
              marginBottom: "40px",
              maxWidth: "480px",
              lineHeight: "1.6",
            }}
          >
            The most advanced payment platform designed to accelerate your
            business growth and streamline operations.
          </p>

          <motion.button
            whileHover={{
              y: -2,
              boxShadow: "0 10px 25px rgba(26, 138, 90, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: colors.brandGreen,
              color: "white",
              padding: "16px 40px",
              borderRadius: "8px",
              fontSize: "17px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/contact")} // <-- navigate on click
          >
            Start Free Trial
          </motion.button>
        </motion.div>

        {/* RIGHT VISUAL - SINGLE WHITE BOX */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* THE SINGLE WHITE BOX */}
          <div
            style={{
              width: "500px",
              height: "500px",
              background: "#ffffff",
              borderRadius: "40px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
              border: "1px solid #f1f5f9",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={devices[active]}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  maxHeight: "80%",
                  maxWidth: "80%",
                  objectFit: "contain",
                  zIndex: 2,
                  filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.1))",
                }}
              />
            </AnimatePresence>

            {/* Floaters pinned to the White Box edges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: "-20px",
                top: "20%",
                background: "#ffffff",
                padding: "12px 20px",
                borderRadius: "14px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #f1f5f9",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: colors.brandGreen,
                }}
              />
              <span
                style={{
                  fontWeight: "700",
                  color: colors.textMain,
                  fontSize: "14px",
                }}
              >
                Secure
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                right: "-20px",
                bottom: "20%",
                background: "#ffffff",
                padding: "12px 20px",
                borderRadius: "14px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                border: "1px solid #f1f5f9",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>⚡</span>
              <span
                style={{
                  fontWeight: "700",
                  color: colors.textMain,
                  fontSize: "14px",
                }}
              >
                Fast Payments
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
