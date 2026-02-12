import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import "./CertificationSection.css";

const certifications = [
  {
    title: "PCI DSS",
    subtitle: "Level 1",
    gradient: "linear-gradient(135deg, #4f46e5, #4338ca)"
  },
  {
    title: "ISO 27001",
    subtitle: "Certified",
    gradient: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    title: "SOC 2",
    subtitle: "Type II",
    gradient: "linear-gradient(135deg, #a855f7, #db2777)"
  },
  {
    title: "GDPR",
    subtitle: "Compliant",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)"
  }
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "0", label: "Data Breaches" },
  { value: "<100ms", label: "Response Time" },
  { value: "24/7", label: "Monitoring" }
];

export default function CertificationSection() {
  return (
    <section className="cert-section">
      <div className="cert-container">

        <motion.h2
          className="cert-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Compliance
        </motion.h2>

        {/* Top Certification Cards */}
        <div className="cert-grid">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              className="cert-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="cert-icon-box"
                style={{ background: item.gradient }}
              >
                <Shield size={32} color="white" />
              </div>

              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cert-divider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Bottom Stats */}
        <div className="cert-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="cert-stat-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
