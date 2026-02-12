import { useState } from "react";
import "./DeviceSection.css";

import staticImg from "../assets/static-soundbox.png";
import dynamicImg from "../assets/dynamic-soundbox.png";
import pocketImg from "../assets/VG-smart pocket soundbox.png";
import hubImg from "../assets/VG Smart Ordering & Checkout Hub.png";

const devices = [
  {
    category: "MOBILE COMMERCE",
    title: "VG Smart\nPocket Soundbox",
    description:
      "Compact soundbox with GPS tracking. Built for merchants on the move.",
    features: ["QR Code", "GPS", "Broadcast", "CUG Call"],
    image: pocketImg,
    theme: "green",
  },
  {
    category: "ENTERPRISE SOLUTION",
    title: "VG Smart\nOrdering Hub",
    description:
      "All-in-one ordering and checkout hub for high-volume businesses.",
    features: ["Ordering", "Members", "Payments", "Connected"],
    image: hubImg,
    theme: "peach",
  },
  {
    category: "SMALL BUSINESS",
    title: "VG Static\nPayment Soundbox",
    description:
      "Reliable voice alerts for every successful payment. Simple and dependable.",
    features: ["QR Code", "Voice Alert", "Real-time", "Compact"],
    image: staticImg,
    theme: "mint",
  },
  {
    category: "PREMIUM DEVICE",
    title: "VG Dynamic\nPayment Soundbox",
    description:
      "Smart payment intelligence with amount display and flexible connectivity.",
    features: ["Dynamic", "Broadcast", "NFC", "Display"],
    image: dynamicImg,
    theme: "teal",
  },
];

export default function DevicesSection() {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % devices.length);
  const prev = () =>
    setActive((p) => (p - 1 + devices.length) % devices.length);

  return (
    <section className="devices-section">
      {/* HEADER */}
      <div className="devices-header">
        <span className="devices-pill">OUR DEVICES</span>
        <h2>Payment Solutions for Every Business</h2>
        <p>Premium hardware designed for reliability, speed, and trust</p>
      </div>

      {/* SLIDER */}
      <div className="devices-slider">
        {devices.map((device, index) => {
          let state = "hidden";
          if (index === active) state = "active";
          if (index === (active - 1 + devices.length) % devices.length)
            state = "prev";

          return (
            <div
              key={index}
              className={`device-card ${device.theme} ${state}`}
            >
              {/* LEFT */}
              <div className="device-content">
                <span className={`device-category ${device.theme}`}>
                  {device.category}
                </span>

                <h3>
                  {device.title.split("\n").map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </h3>

                <p className="device-description">{device.description}</p>

                <div className="feature-pills">
                  {device.features.map((feature, i) => (
                    <span
                      key={feature}
                      className="feature-pill"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT */}
              <div className="device-image">
                <img src={device.image} alt={device.title} />
              </div>
            </div>
          );
        })}

        {/* CONTROLS – INSIDE SLIDER */}
        <div className="slider-controls">
          <button onClick={prev}>&larr;</button>

          <div className="dots">
            {devices.map((_, i) => (
              <span
                key={i}
                className={i === active ? "dot active" : "dot"}
              />
            ))}
          </div>

          <button onClick={next}>&rarr;</button>
        </div>
      </div>
    </section>
  );
}
