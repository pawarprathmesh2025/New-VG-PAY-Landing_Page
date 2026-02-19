import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, Smartphone, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  { icon: UserPlus, title: 'Sign Up', desc: 'Create your account in minutes with our simple onboarding process.', pos: 'top', color: '#10b981' },
  { icon: Settings, title: 'Configure', desc: 'Set up payment preferences and customize your checkout experience.', pos: 'bottom', color: '#3b82f6' },
  { icon: Smartphone, title: 'Integrate', desc: 'Connect VGPAY using APIs, SDKs, or pre-built plugins.', pos: 'top', color: '#8b5cf6' },
  { icon: TrendingUp, title: 'Grow', desc: 'Start accepting payments and watch your business scale.', pos: 'bottom', color: '#f59e0b' },
];

// This manages the "One-by-One" timing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4, // Delays each child card by 0.4s
    },
  },
};

const cardVariants = {
  hidden: (pos) => ({
    opacity: 0,
    y: pos === 'top' ? -60 : 60, // Slides from top or bottom based on position
    scale: 0.9
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="hiw-map-section">
      <div className="hiw-map-container">
        
        <header className="hiw-map-header">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="hiw-map-tag"
          >
           START YOUR JOURNEY 
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="hiw-map-title"
          >
            Get Started in <span>4 Steps</span>
          </motion.h2>
        </header>

        {/* The Animated Wrapper */}
        <motion.div 
          className="hiw-map-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Central Connecting Track Line */}
          <div className="hiw-map-track">
            <motion.div 
              className="hiw-map-progress"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: false }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="hiw-map-grid">
            {steps.map((step, index) => (
              <div key={index} className={`hiw-map-node ${step.pos}`}>
                
                {/* One-by-One Card Reveal */}
                <motion.div 
                  className="hiw-map-card"
                  custom={step.pos}
                  variants={cardVariants}
                >
                  <div className="hiw-card-header">
                      <div className="hiw-card-icon" style={{ backgroundColor: step.color }}>
                          <step.icon size={22} color="#fff" />
                      </div>
                      <span className="hiw-card-num">Step 0{index + 1}</span>
                  </div>
                  <div className="hiw-card-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>

                {/* The Map Marker Node */}
                <motion.div 
                  className="hiw-map-stop"
                  initial={{ scale: 0, opacity: 0 }}
                  variants={{
                    visible: { scale: 1, opacity: 1 }
                  }}
                >
                  <div className="stop-outer" style={{ borderColor: step.color }}>
                      <div className="stop-inner" style={{ backgroundColor: step.color }} />
                  </div>
                  <div className="stop-stem" />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}