import React from "react";
import { Users, DollarSign, Globe, ShieldCheck } from "lucide-react";
import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    { icon: <Users size={22} />, number: "10K+", label: "Active Merchants", color: "#10b981", radius: 160, speed: 25 },
    { icon: <DollarSign size={22} />, number: "$1B+", label: "Monthly Volume", color: "#6366f1", radius: 240, speed: 35 },
    { icon: <Globe size={22} />, number: "150+", label: "Countries", color: "#f59e0b", radius: 320, speed: 45 },
    { icon: <ShieldCheck size={22} />, number: "Lvl 1", label: "PCI Security", color: "#0ea5e9", radius: 400, speed: 55 },
  ];

  return (
    <section className="solar-root">
      {/* Soft background accents */}
      <div className="bg-blur-circle-1"></div>
      <div className="bg-blur-circle-2"></div>

      <div className="solar-container">
        {/* Orbit Rings */}
        {stats.map((stat, idx) => (
          <div
            key={`ring-${idx}`}
            className="orbit-ring"
            style={{ 
              width: `${stat.radius * 2}px`, 
              height: `${stat.radius * 2}px`,
            }}
          >
            <div className="orbit-path" style={{ animationDuration: `${stat.speed}s` }}>
              <div 
                className="orbit-card" 
                style={{ 
                  "--accent": stat.color,
                  transform: `translateX(${stat.radius}px)` 
                }}
              >
                {/* Keeps text upright while orbiting */}
                <div className="card-inner" style={{ animationDuration: `${stat.speed}s` }}>
                  <div className="icon-wrapper" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className="text-content">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Hero Text */}
        <div className="center-content">
          <div className="live-status">
            <span className="ping-dot"></span>
            System Live
          </div>
          <h2 className="hero-title">Global Commerce <br/><span>Intelligence</span></h2>
          <p className="hero-desc">Scaling performance across our secure, integrated financial perimeter.</p>
        </div>
      </div>
    </section>
  );
}