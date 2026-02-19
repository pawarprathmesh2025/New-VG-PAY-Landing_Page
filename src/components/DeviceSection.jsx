import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // <-- import useNavigate
import "./DeviceSection.css";

// Ensure these image paths match your actual assets folder
import device1 from "../assets/device1.png";
import device2 from "../assets/device2.png";
import device3 from "../assets/device3.png";
import device4 from "../assets/device4.png";

const devices = [
  {
    title: "S Box 1",
    img: device2,
    desc: "Instant audio alerts for every successful payment in your preferred language.",
    tag: "Most Popular",
    path: "/devices/sbox1", // <-- corresponding route
  },
  {
    title: "X-Box",
    img: device1,
    desc: "Accept all major cards and UPI payments with a sleek, portable terminal.",
    tag: "Enterprise Grade",
    path: "/devices/qr",
  },
  {
    title: "S Box Pocket",
    img: device3,
    desc: "Premium acrylic standees and QR stickers for seamless counter payments.",
    tag: "Instant Setup",
    path: "/devices/pos",
  },
  {
    title: "D Box 1",
    img: device4,
    desc: "Next-gen audio with dual speakers and ultra-long 7-day battery life.",
    tag: "Coming Soon",
    path: "/devices/printer",
  }
];

export default function DeviceSection() {
  const navigate = useNavigate(); // <-- initialize navigate

  return (
    <section className="vg-hardware-section">
      {/* Background soft glow for premium depth */}
      <div className="bg-decor-blur" />

      <div className="vg-container">
        <header className="vg-hardware-header">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="premium-chip"
          >
            <span>OUR DEVICES</span>
          </motion.div>
          
          <h2 className="vg-hardware-title">
            Designed for <span>Retail Excellence</span>
          </h2>
          
          <p className="vg-hardware-subtitle">
            Reliable hardware meets intelligent software. Boost trust and speed at your checkout counter.
          </p>
        </header>

        <div className="vg-hardware-grid">
          {devices.map((device, i) => (
            <motion.div 
              key={i}
              className="vg-hardware-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ cursor: "pointer" }} // <-- shows it's clickable
              onClick={() => navigate(device.path)} // <-- navigate to device page
            >
              <div className="card-inner">
                {/* Status Badge */}
                <div className="device-status-tag">{device.tag}</div>
                
                {/* Image Section with Glow */}
                <div className="device-visual-container">
                  <div className="aura-glow" />
                  <motion.img 
                    src={device.img} 
                    alt={device.title}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Content Section */}
                <div className="device-content">
                  <div className="title-flex">
                    <h3>{device.title}</h3>
                    <div className="arrow-icon-wrap">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  <p>{device.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
