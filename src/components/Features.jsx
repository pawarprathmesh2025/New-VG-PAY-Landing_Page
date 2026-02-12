import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, CreditCard, BarChart3, Headphones } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and PCI DSS Level 1 compliance to protect every transaction',
    gradient: 'grad-blue',
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Get your funds faster with our instant settlement feature and real-time processing',
    gradient: 'grad-amber',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Accept payments in 150+ countries with multi-currency support',
    gradient: 'grad-emerald',
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Support for cards, UPI, wallets, net banking, and more payment options',
    gradient: 'grad-purple',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights with detailed reports, dashboards, and transaction analytics',
    gradient: 'grad-cyan',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock expert support to help you whenever you need assistance',
    gradient: 'grad-rose',
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <div className="max-w-7xl mx-auto relative-z">
        <header className="section-header">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="top-badge"
          >
            Why Choose VGPAY
          </motion.div>
          <h2 className="main-title">Everything You Need to Succeed</h2>
          <p className="main-subtitle">
            Powerful features designed to help your business grow and streamline payment operations
          </p>
        </header>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card-wrapper"
              >
                <div className="feature-card">
                  {/* Refined Icon Box */}
                  <div className={`feature-icon-box ${feature.gradient}`}>
                    <Icon className="icon-svg" size={28} />
                    <div className="icon-shine" />
                  </div>

                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  
                  <div className="card-decoration-line" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="cta-container"
        >
          {/* <div className="cta-box">
            <div className="cta-content">
              <h3>Ready to Transform Your Payments?</h3>
              <p>Join thousands of businesses already using VGPAY to power their growth</p>
              <div className="cta-buttons">
                <button className="btn-primary">Get Started Now</button>
                <button className="btn-secondary">Schedule a Demo</button>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}