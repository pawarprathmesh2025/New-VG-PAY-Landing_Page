import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "How quickly can I start accepting payments?",
    answer:
      "You can start accepting payments within minutes! Our streamlined onboarding process takes less than 10 minutes. Once your account is verified, you can immediately integrate VGPAY and begin processing transactions.",
    category: "Getting Started",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "VGPAY supports all major payment methods including credit/debit cards (Visa, Mastercard, Amex), UPI, digital wallets (Google Pay, Apple Pay, PayPal), net banking, and buy-now-pay-later options. We continuously add new payment methods based on market demand.",
    category: "Features",
  },
  {
    question: "Are there any setup or hidden fees?",
    answer:
      "No! We believe in transparent pricing. There are no setup fees, monthly minimums, or hidden charges. You only pay a small percentage per transaction, which varies based on your plan. Everything is clearly outlined in our pricing section.",
    category: "Pricing",
  },
  {
    question: "How secure is VGPAY?",
    answer:
      "Security is our top priority. VGPAY is PCI DSS Level 1 certified, uses 256-bit SSL encryption, and is compliant with GDPR and SOC 2 standards. We employ AI-powered fraud detection and maintain a 99.99% uptime SLA with zero data breaches to date.",
    category: "Security",
  },
  {
    question: "When do I receive my funds?",
    answer:
      "With our instant settlement feature (available on Professional and Enterprise plans), you can receive funds within minutes. Standard settlements are processed within 24-48 hours. Settlement times may vary based on your bank and location.",
    category: "Features",
  },
  {
    question: "Can I use VGPAY for international transactions?",
    answer:
      "Absolutely! VGPAY supports transactions in 150+ countries with multi-currency support. We handle currency conversion automatically and offer competitive exchange rates. International transactions are subject to the same security standards.",
    category: "Global",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support via email, chat, and phone. Professional and Enterprise plan customers get priority support with faster response times. Enterprise customers also receive a dedicated account manager for personalized assistance.",
    category: "Support",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 30-day free trial on our Professional plan with no credit card required. This gives you full access to all features so you can test VGPAY with your business before committing. You can cancel anytime during the trial period.",
    category: "Pricing",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="faq-header"
        >
          <div className="faq-badge">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know about VGPAY. Can't find what you're
            looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="faq-card"
              >
                <button
                  className="faq-question"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <div>
                    <span className="faq-category">
                      {faq.category}
                    </span>
                    <h4>{faq.question}</h4>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <div className="icon-open">
                        <Minus size={18} color="white" />
                      </div>
                    ) : (
                      <div className="icon-closed">
                        <Plus size={18} />
                      </div>
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="faq-answer"
                    >
                      <div className="answer-line"></div>
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="faq-contact"
        >
          <h3>Still have questions?</h3>
          <p>
            Our support team is here to help you 24/7. Get in touch and we'll respond as soon as possible.
          </p>

          <div className="faq-buttons">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="btn-secondary">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
