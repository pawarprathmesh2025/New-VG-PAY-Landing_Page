import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, FileKey } from "lucide-react";
import "./CertificationSection.css";

const certifications = [
  { title: "PCI DSS", subtitle: "Level 1 Compliant", icon: ShieldCheck },
  { title: "ISO 27001", subtitle: "Certified Standard", icon: Award },
  { title: "SOC 2", subtitle: "Type II Certified", icon: Lock },
  { title: "GDPR", subtitle: "Data Protection", icon: FileKey }
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "0", label: "Security Breaches" },
  { value: "<100ms", label: "Latency" },
  { value: "24/7", label: "Live Monitoring" }
];

export default function CertificationSection() {
  return (
    <section className="cert-section">
      <div className="cert-container">
        
        <header className="cert-header">
          <motion.h2 
            className="cert-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Global Compliance & Performance
          </motion.h2>
        </header>

        {/* Minimalist Grid */}
        <div className="cert-grid">
          {certifications.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="cert-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="cert-badge-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="cert-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="cert-divider" />

        {/* Sharp Stats */}
        <div className="cert-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="cert-stat-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}