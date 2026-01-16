import React, { useEffect, useRef } from "react";
import AwardIcon from "./AwardIcon";

const AwardsRecognition = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="page page-2 awards-section">
      <div className="awards-title">Awards & Recognition</div>
      <div className="awards-tagline">
        Honors That Inspire Us to Keep Innovating.
      </div>

      {[
        ["leadership", "Indo American Leadership Award 2022\nIndo American Chamber of Commerce, USA"],
        ["it", "Indian Achievers Award 2020–21\nFor Excellence in IT – New Delhi"],
        ["innovation", "Sakal Excellence Award\nInnovation in Technology"],
        ["csr", "National CSR Award 2022\nCSR Times, New Delhi"],
        ["annual", "CSR Annual Award 2022\nMCCIA, Pune"],
      ].map((item, i) => (
        <div
          key={i}
          className={`award-card card-${i + 1}`}
          ref={el => (cardsRef.current[i] = el)}
        >
          <div className="award-icon">
            <AwardIcon type={item[0]} />
          </div>
          <div className="award-text">{item[1]}</div>
        </div>
      ))}
    </section>
  );
};

export default AwardsRecognition;
