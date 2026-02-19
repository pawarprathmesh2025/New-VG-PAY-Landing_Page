import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sparkles, Rocket, Building2, ShieldCheck } from 'lucide-react';
import './PricingPlans.css';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for small businesses starting out.',
    features: ['100 transactions/mo', 'Basic analytics', 'Standard support', 'Mobile App access'],
    popular: false,
    theme: 'light'
  },
  {
    name: 'Professional',
    icon: Rocket,
    priceMonthly: 49,
    priceYearly: 39,
    description: 'Ideal for growing startups.',
    features: ['Unlimited transactions', 'Priority support', 'Advanced Fraud protection', 'Custom Checkout UI', 'Team access'],
    popular: true,
    theme: 'dark'
  },
  {
    name: 'Enterprise',
    icon: Building2,
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    description: 'Tailored for large operations.',
    features: ['Dedicated Manager', 'Custom integrations', 'SLA Guarantee', 'White-labeling', '24/7 Phone Support'],
    popular: false,
    theme: 'light'
  }
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="vg-pricing-section">
      {/* Mesh Glows - Subtle against the white background */}
      <div className="vg-bg-mesh">
        <div className="mesh-blob mesh-1" />
        <div className="mesh-blob mesh-2" />
      </div>

      <div className="vg-container">
        <header className="vg-header">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="vg-badge"
          >
            <ShieldCheck size={14} /> <span>Secure Pricing</span>
          </motion.div>
          <h2 className="vg-title">Choose the <span>Best Plan</span></h2>
          
          <div className="vg-toggle-container">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <div 
              className={`vg-switch ${isYearly ? 'on' : ''}`} 
              onClick={() => setIsYearly(!isYearly)}
            >
              <motion.div 
                className="vg-switch-handle" 
                animate={{ x: isYearly ? 24 : 0 }} 
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </div>
            <span className={isYearly ? 'active' : ''}>Yearly <small className="vg-discount">-20%</small></span>
          </div>
        </header>

        <div className="vg-pricing-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`vg-card ${plan.theme} ${plan.popular ? 'featured' : ''}`}
            >
              <div className="vg-card-content">
                <div className={`vg-icon-box ${plan.theme}`}>
                  <plan.icon size={22} />
                </div>
                <h3 className="vg-plan-name">{plan.name}</h3>
                <p className="vg-plan-desc">{plan.description}</p>

                <div className="vg-price-wrap">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="vg-price-flex"
                    >
                      {typeof plan.priceMonthly === 'number' ? (
                        <>
                          <span className="vg-currency">$</span>
                          <span className="vg-amount">{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                          <span className="vg-period">/mo</span>
                        </>
                      ) : (
                        <span className="vg-custom">Custom</span>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <ul className="vg-features">
                  {plan.features.map((f, i) => (
                    <li key={i}><Check size={16} className="vg-check" /> {f}</li>
                  ))}
                </ul>

                <button className={`vg-cta ${plan.theme}`}>
                  {plan.priceMonthly === 'Custom' ? 'Contact Us' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}