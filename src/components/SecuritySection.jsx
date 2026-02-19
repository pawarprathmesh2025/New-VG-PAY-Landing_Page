import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Zap, ShieldCheck, Globe2 } from "lucide-react";
import "./SecuritySection.css";

const SecurityItem = ({ icon: Icon, title, text, delay }) => (
  <motion.div
    className="sec-item"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="sec-icon-inner">
      <Icon size={20} strokeWidth={2} />
    </div>
    <div className="sec-text-content">
      <h3 className="sec-item-title">{title}</h3>
      <p className="sec-item-desc">{text}</p>
    </div>
  </motion.div>
);

export default function SecuritySection() {
  return (
    <section className="sec-wrapper">
      <div className="sec-noise-overlay" />
      
      <div className="sec-container">
        <header className="sec-header">
          <div className="sec-badge">
            <Shield size={14} />
            <span>Bank-Grade Security</span>
          </div>
          <h2 className="sec-title">Your Trust is Our Priority</h2>
          <p className="sec-lead">
            Industry-leading protocols designed to protect your global operations.
          </p>
        </header>

        <div className="sec-grid">
          <SecurityItem
            icon={Shield}
            title="PCI DSS Level 1"
            text="The highest global standard for payment security compliance."
            delay={0.1}
          />
          <SecurityItem
            icon={Lock}
            title="256-bit AES"
            text="Military-grade encryption for every data byte transferred."
            delay={0.15}
          />
          <SecurityItem
            icon={FileCheck}
            title="GDPR Compliant"
            text="Strict adherence to international data privacy regulations."
            delay={0.2}
          />
          <SecurityItem
            icon={Globe2}
            title="ISO 27001"
            text="Certified information security management systems."
            delay={0.25}
          />
          <SecurityItem
            icon={ShieldCheck}
            title="Secure Infra"
            text="Multi-region cloud architecture with 99.99% durability."
            delay={0.3}
          />
          <SecurityItem
            icon={Zap}
            title="AI Protection"
            text="Real-time fraud detection powered by machine learning."
            delay={0.35}
          />
        </div>
      </div>
    </section>
  );
}