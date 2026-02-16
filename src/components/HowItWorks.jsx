import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, Smartphone, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your account in minutes with our simple onboarding process. No credit card required to get started.',
    gradientClass: 'gradient-emerald',
    step: '01',
    position: 'left',
    delay: 0.2,
  },
  {
    icon: Settings,
    title: 'Configure',
    description: 'Set up your payment preferences, customize checkout, and configure your business settings with our intuitive dashboard.',
    gradientClass: 'gradient-blue',
    step: '02',
    position: 'right',
    delay: 0.4,
  },
  {
    icon: Smartphone,
    title: 'Integrate',
    description: 'Connect VGPAY using our powerful APIs, SDKs, or pre-built plugins. Integration takes less than 5 minutes.',
    gradientClass: 'gradient-purple',
    step: '03',
    position: 'left',
    delay: 0.6,
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Start accepting payments globally and watch your business scale. Access real-time analytics and insights.',
    gradientClass: 'gradient-amber',
    step: '04',
    position: 'right',
    delay: 0.8,
  },
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  const pathD = "M 400 50 Q 250 150 400 250 T 400 450 Q 550 550 400 650 T 400 850 Q 250 950 400 1050 T 400 1250";

  return (
    <section ref={containerRef} className="how-it-works-section">
      {/* Background Decor */}
      <div className="bg-blur blur-emerald" />
      <div className="bg-blur blur-blue" />
      <div className="bg-grid-overlay" />

      <div className="main-container">
        <header className="section-header">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="top-badge"
          >
            Your Journey to Success
          </motion.div>
          <h2 className="main-title">Get Started in 4 Easy Steps</h2>
          <p className="main-subtitle">
            Follow our simple path from signup to your first payment in less than 10 minutes
          </p>
        </header>

        <div className="journey-wrapper">
          {/* THE TRACK (SVG) */}
          <svg className="track-svg" viewBox="0 0 800 1400" fill="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="33%" stopColor="#3b82f6" />
                <stop offset="66%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            <path d={pathD} className="track-bg" strokeWidth="4" />
            
            <motion.path
              d={pathD}
              className="track-progress"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />

            {/* MOVING DOTS */}
            {[0, 1.3, 2.6].map((delay, i) => (
              <motion.circle
                key={i}
                r="6"
                fill="#10b981"
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: delay }}
                style={{ offsetPath: `path("${pathD}")` }}
                className="moving-dot"
              />
            ))}
          </svg>

          {/* THE STEPS */}
          <div className="steps-container">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.position === 'left';
              return (
                <div key={index} className={`step-row ${isLeft ? 'row-left' : 'row-right'}`}>
                  <motion.div 
                    className="step-card"
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: step.delay }}
                  >
                    <div className={`step-number-badge ${step.gradientClass}`}>
                      {step.step}
                    </div>

                    <div className={`icon-box ${step.gradientClass}`}>
                      <Icon className="lucide-icon" size={36} />
                      <div className="shine-effect" />
                    </div>

                    <h3 className="card-title">{step.title}</h3>
                    <p className="card-description">{step.description}</p>

                    <div className="card-footer">
                      <CheckCircle size={18} className="check-icon" />
                      <span>Step {step.step} of 04</span>
                    </div>

                    {index < steps.length - 1 && (
                      <div className={`mobile-arrow-container ${step.gradientClass}`}>
                        <ArrowRight className="arrow-down" size={24} />
                      </div>
                    )}
                  </motion.div>

                  <div className={`center-node ${step.gradientClass}`}>
                    <CheckCircle size={28} color="white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </section>
  );
}