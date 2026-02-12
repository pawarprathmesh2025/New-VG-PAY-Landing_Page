import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "support@vgpay.com",
      subContent: "sales@vgpay.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subContent: "Mon-Fri 9am-6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Payment Street",
      subContent: "San Francisco, CA 94102",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      subContent: "9:00 AM - 6:00 PM PST",
    },
  ];

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <div className="contact-badge">Contact Us</div>

          <h1>
            Get in Touch <br />
            <span>We're Here to Help</span>
          </h1>

          <p>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="contact-cards">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="contact-card"
              >
                <div className="contact-icon">
                  <Icon size={22} />
                </div>
                <h3>{info.title}</h3>
                <p className="primary">{info.content}</p>
                <p className="secondary">{info.subContent}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Form + Side */}
        <div className="contact-main">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-form-box"
          >
            <div className="form-header">
              <div className="form-icon">
                <MessageSquare size={22} />
              </div>
              <div>
                <h2>Send us a message</h2>
                <p>Fill out the form below</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="submit-btn"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-side"
          >
            <div className="map-box">
              <MapPin size={50} />
              <h3>Visit Our Office</h3>
              <p>
                123 Payment Street <br />
                San Francisco, CA 94102
              </p>
            </div>

            <div className="urgent-box">
              <h3>Need Immediate Help?</h3>
              <p>
                Our support team is available 24/7 to assist you with urgent
                matters.
              </p>
              <div>
                <Phone size={18} /> +1 (555) 911-HELP
              </div>
              <div>
                <Mail size={18} /> urgent@vgpay.com
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Box */}
        <div className="faq-box">
          <h3>Looking for Quick Answers?</h3>
          <p>
            Check out our FAQ section for instant answers to common questions
          </p>
          <button>Visit FAQ</button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
