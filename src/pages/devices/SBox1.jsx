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


      {/* HERO */}
      <section className="hero-monolith">

        <h1 className="hero-display">
          The Standard of <span className="mint-text">Audio Commerce</span>
        </h1>

        <div className="hero-visual-center">
          <img src={device} className="hardware-hero-img" />
        </div>


        <div className="boutique-function-grid">

          <div className="function-cell">
            <span className="cell-num">I</span>
            <h4>QR PAYMENTS</h4>
            <p>Static high-precision scanning interface.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">II</span>
            <h4>REAL-TIME BROADCAST</h4>
            <p>Instantaneous audio confirmation.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">III</span>
            <h4>VOLUME CONTROL</h4>
            <p>Stepless acoustic adjustment.</p>
          </div>

          <div className="function-cell">
            <span className="cell-num">IV</span>
            <h4>COMPACT FORM</h4>
            <p>Minimal premium footprint.</p>
          </div>

        </div>

      </section>



      {/* WHAT IS SBOX */}

      <section className="about-sbox">

        <div className="about-container">


          <div className="about-left">

            <h2>What is <span>S-BOX S1?</span></h2>

            <p>
              S-BOX S1 is a QR payment soundbox engineered specifically for banks and financial institutions.
              It delivers instant audio confirmation of UPI transactions, eliminating payment uncertainty.
            </p>

            <p>
              Built with enterprise-grade security and cloud connectivity, it integrates seamlessly into
              banking infrastructure while providing real-time alerts.
            </p>

          </div>


          <div className="about-right">

            <div className="feature-item">
              <div className="icon-circle">🔊</div>
              Real-time audio confirmation
            </div>

            <div className="feature-item">
              <div className="icon-circle">📱</div>
              Static QR integration
            </div>

            <div className="feature-item">
              <div className="icon-circle">☁</div>
              Cloud-connected
            </div>

            <div className="feature-item">
              <div className="icon-circle">⚡</div>
              Sub-2 second trigger
            </div>

            <div className="feature-item">
              <div className="icon-circle">📡</div>
              24/7 connectivity
            </div>

          </div>

        </div>

      </section>



      {/* ============================ */}
      {/* WHERE IT CAN BE USED */}
      {/* ============================ */}

      <section className="usage-section">

        <h2 className="usage-title">
          Where It Can Be <span>Used</span>
        </h2>

        <p className="usage-sub">
          Deployed across diverse merchant segments with consistent reliability
        </p>



        <div className="usage-grid">


          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1604719312566-8912e9c8a213" />

            <div className="usage-content">
              <h4>Kirana Stores</h4>
              <p>Instant confirmation for daily neighborhood transactions</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88" />

            <div className="usage-content">
              <h4>Pharmacies</h4>
              <p>Healthcare payment certainty at point of sale</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1542838132-92c53300491e" />

            <div className="usage-content">
              <h4>Supermarkets</h4>
              <p>High-volume checkout efficiency</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6" />

            <div className="usage-content">
              <h4>Petrol Pumps</h4>
              <p>Fast fuel payment confirmations</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1556742031-c6961e8560b0" />

            <div className="usage-content">
              <h4>Retail Counters</h4>
              <p>Improved retail checkout experience</p>
            </div>

          </div>



          <div className="usage-card">

            <img src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a" />

            <div className="usage-content">
              <h4>Government QR Programs</h4>
              <p>Secure public payment infrastructure</p>
            </div>

          </div>


        </div>

      </section>

      {/* ============================ */
/* HOW IT WORKS - PREMIUM STYLE */
/* ============================ */}

<section className="works2-section">

  <div className="works2-header">

    <h2>
      How The <span>Magic Happens</span>
    </h2>

    <p>
      Lightning-fast confirmation powered by secure banking infrastructure
    </p>

  </div>


  <div className="works2-timeline">

    <div className="works2-item">

      <div className="works2-icon">📷</div>

      <h4>Scan</h4>

      <p>Customer scans merchant QR code</p>

    </div>


    <div className="works2-item">

      <div className="works2-icon">✔</div>

      <h4>Process</h4>

      <p>Bank verifies payment securely</p>

    </div>


    <div className="works2-item">

      <div className="works2-icon">☁</div>

      <h4>Transmit</h4>

      <p>Cloud sends signal to soundbox</p>

    </div>


    <div className="works2-item">

      <div className="works2-icon">🔊</div>

      <h4>Confirm</h4>

      <p>Device plays audio instantly</p>

    </div>

  </div>


</section>

{/* THE HIGHLIGHTED SECURITY BLOCK */}
<section className="enterprise-security-highlight">
  <div className="security-content-limiter">
    
    <div className="security-header-block">
      <h2>Enterprise-Grade Security</h2>
      <p>Built to meet banking compliance standards and regulatory requirements</p>
    </div>

    <div className="security-feature-wall">
      {/* Row 1 */}
      <div className="sec-feature-card">
        <div className="sec-feature-icon">🛡️</div>
        <h4>NPCI compliant workflow</h4>
      </div>
      <div className="sec-feature-card">
        <div className="sec-feature-icon">🔑</div>
        <h4>JWT authentication</h4>
      </div>
      <div className="sec-feature-card">
        <div className="sec-feature-icon">🔒</div>
        <h4>TLS encryption</h4>
      </div>
      <div className="sec-feature-card">
        <div className="sec-feature-icon">📱</div>
        <h4>Unique device IMEI</h4>
      </div>
      
      {/* Row 2 */}
      <div className="sec-feature-card">
        <div className="sec-feature-icon">👤</div>
        <h4>Role-based access</h4>
      </div>
      <div className="sec-feature-card">
        <div className="sec-feature-icon">📄</div>
        <h4>Audit logs</h4>
      </div>
      <div className="sec-feature-card">
        <div className="sec-feature-icon">🇮🇳</div>
        <h4>India data residency</h4>
      </div>
    </div>

    <div className="security-footer-statement">
      <p>
        All data transmission is encrypted end-to-end. Device authentication is verified at every connection. 
        Complete audit trail maintained for regulatory compliance.
      </p>
    </div>

  </div>
</section>

{/* CENTRALIZED DEVICE MANAGEMENT - EXACT LAYOUT */}
<section className="mgmt-section-exact">
  <div className="mgmt-container-exact">
    
    <div className="mgmt-text-header">
      <h2>Centralized Device <span>Management</span></h2>
      <p>Complete control and visibility across your device fleet</p>
    </div>

    <div className="mgmt-grid-exact">
      
      {/* LEFT: THE TALL VERTICAL IMAGE */}
      <div className="mgmt-visual-left">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" 
          alt="Dashboard Terminal" 
        />
      </div>

      {/* RIGHT: THE FEATURE CARDS */}
      <div className="mgmt-cards-right">
        {[
          { title: "Device health monitoring", sub: "Real-time status tracking", icon: "📈" },
          { title: "Merchant-device mapping", sub: "Easy deployment management", icon: "👥" },
          { title: "Firmware control", sub: "Centralized version control", icon: "⚙️" },
          { title: "Real-time logs", sub: "Complete transaction history", icon: "📄" },
          { title: "OTA updates", sub: "Remote software updates", icon: "🔄" }
        ].map((item, index) => (
          <div className="mgmt-single-card" key={index}>
            <div className="card-left-group">
              <div className="card-icon-square">{item.icon}</div>
              <div className="card-info">
                <h4>{item.title}</h4>
                <p>{item.sub}</p>
              </div>
            </div>
            <div className="card-check-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#45c496" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


{/* BUSINESS IMPACT SECTION */}
<section className="business-impact">
  <div className="impact-container">
    
    <div className="impact-header">
      <h2>Business <span>Impact</span></h2>
      <p>Value delivered to both banks and merchants</p>
    </div>

    <div className="impact-grid">
      
      {/* LEFT COLUMN: FOR BANKS */}
      <div className="impact-card-column">
        <div className="column-title">
          <div className="title-icon green-bg">🛡️</div>
          <h3>For Banks</h3>
        </div>
        
        <div className="impact-list">
          <div className="impact-item">
            <div className="item-icon-box">📈</div>
            <div className="item-text">
              <h4>Faster QR adoption</h4>
              <p>Drive merchant onboarding</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">📄</div>
            <div className="item-text">
              <h4>Reduced disputes</h4>
              <p>Audio proof of payment</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">👥</div>
            <div className="item-text">
              <h4>Stronger merchant retention</h4>
              <p>Value-added service</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">🏪</div>
            <div className="item-text">
              <h4>Brand presence at counter</h4>
              <p>Physical banking touchpoint</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: FOR MERCHANTS */}
      <div className="impact-card-column">
        <div className="column-title">
          <div className="title-icon orange-bg">👤</div>
          <h3>For Merchants</h3>
        </div>

        <div className="impact-list">
          <div className="impact-item">
            <div className="item-icon-box">⚡</div>
            <div className="item-text">
              <h4>Instant clarity</h4>
              <p>No more guessing</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">📶</div>
            <div className="item-text">
              <h4>No app dependency</h4>
              <p>Works independently</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">✅</div>
            <div className="item-text">
              <h4>Payment confidence</h4>
              <p>Real-time validation</p>
            </div>
          </div>
          <div className="impact-item">
            <div className="item-icon-box">💬</div>
            <div className="item-text">
              <h4>Dispute reduction</h4>
              <p>Clear transaction log</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* SECTION 4: FINAL CTA */}
<section className="commerce-final-cta-root">
  <div className="commerce-final-cta-container">
    <h2>The Standard of <span>Audio Commerce</span></h2>
    <p className="commerce-final-cta-subtitle">Engineered for Scale. Designed for Trust.</p>
    
    <div className="commerce-final-cta-button-group">
      <button className="commerce-final-btn-primary">
        Start Deployment Discussion →
      </button>
      <button className="commerce-final-btn-secondary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download Technical Specs
      </button>
    </div>

    <div className="commerce-final-trust-footer">
      <p>Trusted by leading banks and financial institutions</p>
      <div className="commerce-final-logo-grid">
        <span>BANK LOGO</span>
        <span>BANK LOGO</span>
        <span>BANK LOGO</span>
        <span>BANK LOGO</span>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}

      <footer className="exclusive-footer">

        <button className="mint-cta">
          INQUIRE FOR INSTALLATION
        </button>

      </footer>


    </div>
  );
};

export default SBox1;