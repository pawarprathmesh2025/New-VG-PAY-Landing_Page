import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import phone from "/src/assets/dashboard_1.png"; 

import './HomeDashboardSection.css';

const featureData = [
  { title: 'Instant Transfers', desc: 'Experience lightning-fast settlements with our real-time processing engine.' },
  { title: '24/7 Security', desc: 'Enterprise-grade protection with PCI DSS Level 1 compliance.' },
  { title: 'Reliable Payments', desc: 'Industry-leading uptime and smart routing for every transaction.' },
  { title: 'Track Payments', desc: 'Real-time visibility into every transaction across your network.' },
  { title: 'Amazing Rewards', desc: 'Exclusive merchant benefits integrated into your processing volume.' }
];

export default function HomeDashboardSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-vpay-section">
      <div className="home-vpay-wrapper">
        
        {/* Left Side: Fixed Image Area */}
        <div className="home-vpay-visual">
          <div className="home-vpay-phone-frame">
            <motion.img 
              key={openIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={phone}
              alt="VG-Pay Dashboard" 
              className="home-vpay-dashboard-img"
            />
          </div>
          <div className="home-vpay-shape vpay-cube-green" />
          <div className="home-vpay-shape vpay-cube-purple" />
        </div>

        {/* Right Side: Content */}
        <div className="home-vpay-content">
          <h2 className="home-vpay-title">
          Why <span style={{ color: "#1a8a5a" }}>Us ?</span>
          </h2>
          <div className="home-vpay-accordion">
            {featureData.map((item, index) => (
              <div 
                key={index} 
                className={`home-vpay-acc-item ${openIndex === index ? 'vpay-active' : ''}`}
                onClick={() => setOpenIndex(index)}
              >
                <div className="home-vpay-acc-header">
                  <h3>{item.title}</h3>
                  <ChevronDown className="home-vpay-chevron" size={20} />
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="home-vpay-acc-body"
                    >
                      <p>{item.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}