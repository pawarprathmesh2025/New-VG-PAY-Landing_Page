import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'VGPAY transformed our payment processing. Conversion increased by 35%.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
  { name: 'Michael Chen', role: 'Founder, CloudSaaS', text: 'The analytics dashboard is incredible. Tracking every transaction in real-time is a game-changer.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
  { name: 'Emily Rodriguez', role: 'CFO, RetailPro', text: 'Instant settlements are a game-changer for our cash flow. Best support team.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
  { name: 'James Park', role: 'CTO, FintechX', text: 'The API documentation is top-notch. Smoothest integration I’ve experienced.', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150' },
];

export default function Testimonials() {
  return (
    <section className="marquee-section">
      <div className="gallery-header">
        <h2 className="gallery-main-title">Trusted by <span>Global Leaders</span></h2>
      </div>

      <div className="marquee-container">
        {/* The Track that moves */}
        <motion.div 
          className="marquee-track"
          animate={{ x: [0, -1600] }} // Adjust -1600 based on your total content width
          transition={{ 
            duration: 30, // Higher = Slower/More Premium
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {/* We render the list twice for a seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="marquee-card">
              <div className="card-top">
                <div className="stars">
                  {[...Array(5)].map((_, s) => <Star key={s} size={12} fill="#10b981" color="#10b981" />)}
                </div>
                <Quote size={20} className="quote-icon" />
              </div>
              
              <p className="testimonial-quote">{t.text}</p>
              
              <div className="user-profile">
                <img src={t.image} alt={t.name} className="user-avatar" />
                <div className="user-info">
                  <span className="user-name">{t.name}</span>
                  <span className="user-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays for that "Fade-out" edge look */}
        <div className="overlay-left" />
        <div className="overlay-right" />
      </div>
    </section>
  );
}