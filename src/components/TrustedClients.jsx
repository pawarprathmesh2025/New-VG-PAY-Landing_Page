import React from "react";
import { motion } from "framer-motion";
import Aqui from "/src/assets/aquigen_logo.jpg";
import Lokmangal from "/src/assets/lokmangal1.jpg";
import icici from "/src/assets/icici.jpg";
import drdo from "/src/assets/drdo.png";
import Govt from "/src/assets/India Government-01.jpg";
import Haryana from "/src/assets/Govt-of-Haryana-Commons.avif";




const clients = [
  { name: "Lokmanya", image: Lokmangal },
  { name: "DRDO", image: drdo },
  { name: "Govt India", image: Govt },
//   { name: "Municipal", image: Haryana },
  { name: "ICICI Bank", image: icici },
  { name: "Haryana", image: Haryana },
  { name: "Aquigen", image: Aqui },
];


// Duplicate for seamless loop
const loopClients = [...clients, ...clients];

const TrustedClients = () => {
  return (
    <section
      className="section"
      style={{
       padding: "16px 0px 30px 0px",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(6px)",
      }}
    >
      <div className="container">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a" }}>
         Our <span style={{ color: "#1a8a5a" }}>Clients</span>
          </h2>
          <p style={{ color: "#475569", marginTop: "0.5rem" }}>
            Powering payments for government bodies, banks, and enterprises
          </p>
        </motion.div>

        {/* LOGO CAROUSEL */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* LEFT FADE */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.9), transparent)",
              zIndex: 2,
            }}
          />

          {/* RIGHT FADE */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "120px",
              background:
                "linear-gradient(to left, rgba(255,255,255,0.9), transparent)",
              zIndex: 2,
            }}
          />

          <motion.div
            animate={{ x: [0, -1600] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "flex",
              gap: "2rem",
            }}
          >
            {loopClients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -6 }}
                style={{
                  flexShrink: 0,
                  width: "190px",
                  height: "130px",
                  background: "#ffffff",
                  borderRadius: "1.2rem",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                src={client.image}
                alt={client.name}
                style={{
                  maxWidth: "100px",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* TRUST BADGES */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {[
            { icon: "🔒", text: "Bank-level Security" },
            { icon: "⚡", text: "Instant Processing" },
            { icon: "🌍", text: "Global Reach" },
            { icon: "✓", text: "PCI DSS Compliant" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.6rem 1rem",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                border: "1px solid #e2e8f0",
                fontWeight: 600,
                color: "#334155",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              {item.text}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClients;
