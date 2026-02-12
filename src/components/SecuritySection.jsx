import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Zap, ShieldCheck, Globe2 } from "lucide-react";
import "./SecuritySection.css";

const Card = ({ icon, title, text, delay }) => (
  <motion.div
    className="sec-stat-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="sec-icon-wrapper">
      {icon}
    </div>

    <h3 className="sec-stat-value">{title}</h3>
    <p className="sec-stat-label">{text}</p>
  </motion.div>
);

export default function SecuritySection() {
  return (
    <section className="sec-wrapper">
      <div className="sec-dots-overlay" />

      <div className="sec-container">
        <div className="sec-badge">
          <Shield size={16} />
          Enterprise-Grade Security
        </div>

        <h2 className="sec-title">
          Your Trust is Our Priority
        </h2>

        <p className="sec-description">
          Industry-leading security measures to protect your business and customers
        </p>

        <div className="sec-grid-visual">
          <Card
            icon={<Shield size={26} color="white" />}
            title="PCI DSS Level 1"
            text="Highest level of payment card industry compliance"
            delay={0.1}
          />

          <Card
            icon={<Lock size={26} color="white" />}
            title="256-bit SSL"
            text="Bank-grade encryption for all transactions"
            delay={0.2}
          />

          <Card
            icon={<FileCheck size={26} color="white" />}
            title="GDPR Compliant"
            text="Full compliance with data protection regulations"
            delay={0.3}
          />

          <Card
            icon={<Globe2 size={26} color="white" />}
            title="Global Standards"
            text="ISO 27001 certified security management"
            delay={0.4}
          />

          <Card
            icon={<ShieldCheck size={26} color="white" />}
            title="Secure Infrastructure"
            text="Multi-region data centers with 99.99% uptime"
            delay={0.5}
          />

          <Card
            icon={<Zap size={26} color="white" />}
            title="Fraud Detection"
            text="AI-powered real-time fraud prevention"
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
