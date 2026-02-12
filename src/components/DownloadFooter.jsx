import React from "react";
import "./DownloadFooter.css";
import vgPayLogo from "../assets/app-logo 1.png";

const FooterCTA = () => {
  return (
    <footer className="footer-wrapper">
      {/* ================= CTA CARD ================= */}
      <section className="cta-section">
        <div className="cta-card">
          <h2 className="cta-heading">
            <span className="cta-heading-green">Ready to Transform</span>{" "}
            <span className="cta-heading-white">Your Payments?</span>
          </h2>

          <div className="cta-divider"></div>

          <h3 className="cta-subtitle">Download VGPAY Today</h3>

          <p className="cta-description">
            Get started in minutes. Download the VGPAY app and start managing your
            payment business from anywhere.
          </p>

          <div className="cta-buttons">
            <button className="cta-btn apple-btn">
              <span className="store-icon apple"></span>
              App Store
            </button>

            <button className="cta-btn google-btn">
  <span className="store-icon">
    <svg
      width="18"
      height="18"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="#ffffff"
        d="M325.3 234.3L104.7 13.7C99.2 8.2 92.1 6.2 86 7.5l247.1 247.1z"
      />
      <path
        fill="#ffffff"
        d="M392.6 301.6L325.3 234.3 86 475.6c6.1 1.3 13.2-.7 18.7-6.2l287.9-287.8z"
      />
      <path
        fill="#ffffff"
        d="M450.6 256l-58-58-67.3 67.3 67.3 67.3z"
      />
    </svg>
  </span>
  Google Play
</button>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <section className="footer-content">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <img src={vgPayLogo} alt="VG Pay" className="footer-logo" />
            <p className="brand-text">
              Next-generation POS technology designed for hospitality, retail,
              and enterprise environments. Secure. Scalable. Seamless.
            </p>
          </div>

          {/* Columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Services</a>
              <a href="#">Security</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#">Home</a>
              <a href="#">Services</a>
              <a href="#">Security</a>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom-row">
          <span>© 2026 VishwaGuru Infotech. All rights reserved.</span>

          <div className="social-icons">
             <a href="#" className="social-btn" aria-label="Twitter">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.47c0 .35.04.7.11 1.03A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  </a>

  <a href="#" className="social-btn" aria-label="LinkedIn">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.1c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.15V24H8z"/>
    </svg>
  </a>

  <a href="#" className="social-btn" aria-label="Instagram">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.8-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z"/>
    </svg>
  </a>
          </div>
        </div>

      


      </section>
    </footer>
  );
};

export default FooterCTA;
