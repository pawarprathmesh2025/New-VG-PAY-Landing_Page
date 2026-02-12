import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "../assets/app-logo 1.png";
import "./Footer.css";

export default function Footer() {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API Documentation", "Integrations"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Contact"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <motion.div
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
            <img src={logo} alt="VGPAY Logo" className="footer-logo-img" />
            </div>


            <p className="footer-description">
              Empowering businesses with seamless payment solutions worldwide.
            </p>

            <div className="social-icons">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-icon"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {columns.map((column, i) => (
            <motion.div
              key={column.title}
              className="footer-column"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 3 }}
                      className="footer-link"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>© 2026 VGPAY. All rights reserved.</p>

          <div className="bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
