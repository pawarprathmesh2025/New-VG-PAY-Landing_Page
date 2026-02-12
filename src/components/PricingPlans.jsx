import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Rocket, Building2 } from 'lucide-react';
import './PricingPlans.css';

const plans = [
  {
    name: 'Starter',
    icon: Sparkles,
    price: '0',
    period: 'month',
    description: 'Perfect for small businesses just getting started',
    gradient: 'gradient-slate',
    features: [
      'Up to 100 transactions/month',
      'Basic payment methods',
      'Standard support',
      'Basic analytics',
      '2.9% + $0.30 per transaction',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    icon: Rocket,
    price: '49',
    period: 'month',
    description: 'Ideal for growing businesses with higher volume',
    gradient: 'gradient-emerald',
    features: [
      'Unlimited transactions',
      'All payment methods',
      'Priority support',
      'Advanced analytics',
      '2.5% + $0.25 per transaction',
      'Custom checkout',
      'Fraud protection',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large-scale operations',
    gradient: 'gradient-indigo',
    features: [
      'Unlimited everything',
      'Custom pricing',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Advanced fraud prevention',
      'White-label options',
    ],
    popular: false,
  },
];

export default function PricingPlans() {
  return (
    <section className="pricing-section">
      <div className="bg-grid-pattern" />
      <div className="bg-blur blur-emerald" />
      <div className="bg-blur blur-blue" />

      <div className="main-container relative-z">
        <header className="section-header">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="top-badge"
          >
            Flexible Pricing
          </motion.div>
          <h2 className="main-title">Choose Your Perfect Plan</h2>
          <p className="main-subtitle">
            Transparent pricing that scales with your business needs
          </p>
        </header>

        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`pricing-card-wrapper ${plan.popular ? 'popular-pull-up' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-ribbon-container">
                    <div className="popular-ribbon">Most Popular</div>
                  </div>
                )}

                <div className={`pricing-card ${plan.popular ? 'popular-border' : ''}`}>
                  <div className={`pricing-icon-box ${plan.gradient}`}>
                    <Icon className="text-white" size={32} />
                    <div className="shine-effect" />
                  </div>

                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>

                  <div className="price-container">
                    {plan.price !== 'Custom' && <span className="currency">$</span>}
                    <span className="amount">{plan.price}</span>
                    {plan.period && <span className="period">/{plan.period}</span>}
                  </div>

                  <ul className="features-list">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="feature-item">
                        <div className={`check-badge ${plan.gradient}`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`cta-btn ${plan.popular ? 'btn-emerald' : 'btn-slate'}`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bottom-note"
        >
          <p>
            All plans include SSL encryption, PCI compliance, and instant settlements.
            <br />
            <span className="highlight">No setup fees • No hidden charges</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}