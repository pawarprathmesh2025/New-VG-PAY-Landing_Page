import React from "react";
import "./SBox1.css";
import device from "/src/assets/device2.png";

const SBox1 = () => {
  return (
    <div className="premium-viewport">
      {/* HEADER */}
      <header className="exclusive-nav">
        <div className="nav-line"></div>
        <span className="brand-identifier">S-BOX 1 // SIGNATURE EDITION</span>
        <div className="nav-line"></div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-monolith">
        <div className="hero-text-top">
          <h1 className="hero-display">
            The Standard of <span className="mint-text">Audio Commerce</span>
          </h1>
        </div>

        {/* IMAGE AT CENTRE */}
        <div className="hero-visual-center">
          <img src={device} alt="S-Box 1 Hardware" className="hardware-hero-img" />
        </div>

        {/* THE 4 FUNCTIONS - BOUTIQUE GRID DESIGN */}
        <div className="boutique-function-grid">
          <div className="function-cell">
            <span className="cell-num">I</span>
            <h4>QR PAYMENTS</h4>
            <p>Static high-precision scanning interface.</p>
          </div>
          <div className="function-cell">
            <span className="cell-num">II</span>
            <h4>REAL-TIME BROADCAST</h4>
            <p>Instantaneous 0.1s vocal confirmation.</p>
          </div>
          <div className="function-cell">
            <span className="cell-num">III</span>
            <h4>VOLUME CONTROL</h4>
            <p>Stepless adjustment for refined acoustics.</p>
          </div>
          <div className="function-cell">
            <span className="cell-num">IV</span>
            <h4>COMPACT FORM</h4>
            <p>Masterful engineering in a minimal footprint.</p>
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="scenario-gallery-premium">
        <div className="gallery-header">
          <h2>ENVIRONMENTAL INTEGRATION</h2>
        </div>
        <div className="gallery-layout">
          <div className="gallery-main">
             <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d" alt="Retail" />
             <span>RETAIL & BOUTIQUES</span>
          </div>
          <div className="gallery-side">
            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5" alt="Dining" />
              <span>FINE DINING</span>
            </div>
            <div className="side-item">
              <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="Logistics" />
              <span>TRANSIT HUBS</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="exclusive-footer">
        <button className="mint-cta">INQUIRE FOR INSTALLATION</button>
      </footer>
    </div>
  );
};

export default SBox1;