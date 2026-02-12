import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, DollarSign, Globe } from 'lucide-react';
import './StatsSection.css';

/**
 * Individual Stat Card Component
 */
function StatCard({ icon, value, label, delay, gradientClass }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  // Extract number for the scroll animation
  const targetNumber = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 2000;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing function for smooth numeric count
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(targetNumber * easeOutExpo));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(targetNumber);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="gs-impact-card-anchor"
    >
      <div className={`gs-impact-glow-layer ${gradientClass}`} />
      
      <div className="gs-impact-card-shell">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          className={`gs-impact-icon-sphere ${gradientClass}`}
        >
          {icon}
        </motion.div>

        <div className="gs-impact-data-group">
          <div className="gs-impact-numeric-display">
            {value.includes('$') && '$'}
            {count}
            {value.includes('K') && 'K'}
            {value.includes('B') && 'B'}+
          </div>
          <div className="gs-impact-tagline">{label}</div>
        </div>

        <div className="gs-impact-track-bg">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.4, duration: 1 }}
            className={`gs-impact-track-fill ${gradientClass}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Main Export Component
 */
export default function StatsSection() {
  return (
    <section className="gs-impact-master-wrapper">
      {/* Visual Background Layers */}
      <div className="gs-impact-void-gradient" />
      <div className="gs-impact-mesh-overlay" />

      <div className="gs-impact-central-bound">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gs-impact-heading-block"
        >
          <div className="gs-impact-status-pill">
            <span>Our Impact</span>
          </div>
          <h2 className="gs-impact-hero-text">Powering Global Commerce</h2>
          <p className="gs-impact-lead-para">
            Join thousands of businesses processing billions in payments across the world
          </p>
        </motion.div>

        {/* Primary Stats Grid */}
        <div className="gs-impact-primary-grid">
          <StatCard
            icon={<Users size={32} />}
            value="10K"
            label="Active Merchants"
            delay={0.2}
            gradientClass="gs-grad-violet"
          />
          <StatCard
            icon={<DollarSign size={32} />}
            value="1B"
            label="Processed Monthly"
            delay={0.4}
            gradientClass="gs-grad-mint"
          />
          <StatCard
            icon={<Globe size={32} />}
            value="150"
            label="Countries Supported"
            delay={0.6}
            gradientClass="gs-grad-sun"
          />
        </div>

        {/* Feature Highlights spread */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="gs-impact-secondary-spread"
        >
          <div className="gs-impact-highlight-box gs-grad-mint">
            <div className="gs-impact-highlight-head">
              <div className="gs-impact-highlight-icon">⚡</div>
              <h3>Lightning Fast</h3>
            </div>
            <p>Process transactions in milliseconds with our global network infrastructure.</p>
          </div>

          <div className="gs-impact-highlight-box gs-grad-ocean">
            <div className="gs-impact-highlight-head">
              <div className="gs-impact-highlight-icon">🛡️</div>
              <h3>Secure & Compliant</h3>
            </div>
            <p>Bank-level encryption and PCI DSS compliance to protect every single dollar.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}