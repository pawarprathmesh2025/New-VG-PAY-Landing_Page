import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "../asd/emailjs";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const success = await sendContactEmail(formData);

    if (success) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "vishwaguruinfotech16@gmail.com",
      link: "mailto:vishwaguruinfotech16@gmail.com",
      subContent: "Click to send email",
      gradient: "emerald",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 9876543210",
      link: "tel:+919876543210",
      subContent: "Mon-Fri 9am-6pm",
      gradient: "blue",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Indialand Global Tech Park",
      link:
        "https://www.google.com/maps/search/?api=1&query=Indialand+Global+Tech+Park,+Hinjawadi,+Pune,+Maharashtra+411057",
      subContent: "Hinjawadi, Pune 411057",
      gradient: "purple",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      subContent: "9:00 AM - 6:00 PM",
      gradient: "orange",
    },
  ];

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="contact-header"
        >
          <div className="contact-badge">Contact Us</div>

          <h1>
            Get in Touch <br />
            <span>We're Here to Help</span>
          </h1>

          <p>Have questions? We'd love to hear from you.</p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="contact-cards">
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                whileHover={{ y: -6 }}
                className="contact-card"
              >
                <div className={`card-icon ${info.gradient}`}>
                  <Icon size={22} />
                </div>

                <h3>{info.title}</h3>

                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p>{info.content}</p>
                )}

                <small>{info.subContent}</small>
              </motion.div>
            );
          })}
        </div>

        {/* FORM + MAP GRID */}
        <div className="contact-grid">
          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="contact-form"
          >
            <div className="form-header">
              <h2>Send us a message</h2>
              <p>Fill out the form below</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Subject *"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />

              <textarea
                rows="4"
                placeholder="Your Message *"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button type="submit" disabled={loading}>
                <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* MAP SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="map-section"
          >
            <h2 className="map-title">Our Location</h2>

            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Indialand+Global+Tech+Park,+Hinjawadi,+Pune,+Maharashtra+411057&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>

            <div className="location-info">
              <h3>Indialand Global Tech Park</h3>
              <p>
                Behind Global Highstreet, Phase 1 <br />
                Hinjawadi, Pune, Maharashtra 411057
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Indialand+Global+Tech+Park,+Hinjawadi,+Pune,+Maharashtra+411057"
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="urgent-card">
              <h3>Need Immediate Help?</h3>
              <p>Our support team is available during business hours.</p>

              <div>
                <Phone size={16} />
                <a href="tel:+919876543210"> +91 9876543210</a>
              </div>

              <div>
                <Mail size={16} />
                <a href="mailto:vishwaguruinfotech16@gmail.com">
                  vishwaguruinfotech16@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <FAQ />
    </div>
  );
}
