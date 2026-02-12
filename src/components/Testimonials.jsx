import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    company: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5,
    text: 'VGPAY transformed our payment processing. The integration was seamless, and our conversion rate increased by 35% in just 3 months.',
    gradient: 'grad-emerald',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, CloudSaaS',
    company: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    rating: 5,
    text: 'The analytics dashboard is incredible. We can track every transaction in real-time and the fraud protection has saved us thousands.',
    gradient: 'grad-blue',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CFO, RetailPro',
    company: 'Retail Chain',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5,
    text: 'Instant settlements are a game-changer for our cash flow. The 24/7 support team is always there when we need them.',
    gradient: 'grad-purple',
  },
  {
    name: 'David Kumar',
    role: 'Director, GlobalMart',
    company: 'Marketplace',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    rating: 5,
    text: 'Supporting multiple currencies and payment methods was crucial for our international expansion. VGPAY made it effortless.',
    gradient: 'grad-amber',
  },
  {
    name: 'Lisa Thompson',
    role: 'Owner, Boutique Store',
    company: 'Retail',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    rating: 5,
    text: 'As a small business owner, I needed something simple yet powerful. VGPAY delivers on both fronts with excellent pricing.',
    gradient: 'grad-rose',
  },
  {
    name: 'James Park',
    role: 'CTO, FintechX',
    company: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
    rating: 5,
    text: 'The API documentation is top-notch, and the integration process was the smoothest I\'ve experienced. Highly recommended!',
    gradient: 'grad-cyan',
  },
];

const stats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '10,000+', label: 'Happy Customers' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '24/7', label: 'Support Available' },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="max-w-7xl mx-auto relative-z">
        <header className="section-header">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="top-badge"
          >
            Customer Stories
          </motion.div>
          <h2 className="main-title">Trusted by Thousands of Businesses</h2>
          <p className="main-subtitle">
            See what our customers have to say about their experience with VGPAY
          </p>
        </header>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="testimonial-card-wrapper"
            >
              <div className="testimonial-card">
                <div className={`quote-icon-box ${testimonial.gradient}`}>
                  <Quote size={20} />
                </div>

                <div className="stars-row">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" size={18} />
                  ))}
                </div>

                <p className="testimonial-text">"{testimonial.text}"</p>

                <div className="author-box">
                  <div className={`author-img-wrapper ${testimonial.gradient}`}>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="author-details">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-role">{testimonial.role}</span>
                    <span className="author-company">{testimonial.company}</span>
                  </div>
                </div>
                
                <div className={`bottom-line ${testimonial.gradient}`} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="stats-container">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="stat-item"
            >
              <h4 className="stat-value">{stat.value}</h4>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}