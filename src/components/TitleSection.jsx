import React, { useEffect, useState } from "react";
import logo from "../assets/center-logo.png";

const TitleSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="page page-1">
      <h1 className="title">VishwaGuru Infotech</h1>

      <p className="tagline">
        Empowering Innovation Through Technology and Trust.
      </p>

      <img
        src={logo}
        alt="VishwaGuru Logo"
        className={`center-logo ${animate ? "popup-animation" : ""}`}
      />

      <div className="specialization">
        <h2>Specialization Areas:</h2>
        <ul>
          <li>Financial IT Solutions</li>
          <li>Application Design</li>
          <li>Web Security</li>
          <li>Corporate Training</li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="mission">
        <h2>Mission:</h2>
        <p>To provide world-class technology solutions that empower clients.</p>
      </div>

      <div className="value">
        <h2>Value Proposition:</h2>
        <p>
          Transforming business challenges into opportunities for growth and
          innovation.
        </p>
      </div>
    </section>
  );
};

export default TitleSection;
