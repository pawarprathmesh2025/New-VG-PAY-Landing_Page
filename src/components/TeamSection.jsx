import React, { useEffect, useRef } from "react";

// Import your local images
import rajendraImg from "../assets/member1 (2).png";
import vikasImg from "../assets/member2 (2).png";
import ravindraImg from "../assets/member3 (2).png";
import deepakImg from "../assets/member4 (2).png";

const TeamSection = () => {
  const cardsRef = useRef([]);

  const teamMembers = [
    { name: "Mr. Rajendra Gangarde", role: "Founder & CEO", img: rajendraImg },
    { name: "Mr. Vikas Modha", role: "CTO", img: vikasImg },
    { name: "Mr. Ravindra Kulkarni", role: "GM HR", img: ravindraImg },
    { name: "Mr. Deepak Desai", role: "Delivery Director", img: deepakImg },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      setTimeout(() => card.classList.add("show"), i * 200); // staggered delay
    });
  }, []);

  return (
    <section className="page page-3 team-section">
      <div className="team-icon-text">U</div>
      <div className="team-title">Our Team</div>
      <div className="team-subtitle">Meet the Experts</div>

      <div className="team-cards">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className={`team-card card-${i + 1}`}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="team-img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team-name">{member.name}</div>
            <div className="team-role">{member.role}</div> {/* <-- added role */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
