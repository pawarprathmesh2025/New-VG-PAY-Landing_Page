import { motion } from "framer-motion";
import { Users, DollarSign, Globe } from "lucide-react";

const stats = [
  {
    title: "10K+",
    text: "Active Merchants",
    icon: <Users size={22} />,
    bg: "#EEF2FF",
    color: "#6366F1",
  },
  {
    title: "$1B+",
    text: "Processed Monthly",
    icon: <DollarSign size={22} />,
    bg: "#ECFDF3",
    color: "#22C55E",
  },
  {
    title: "150+",
    text: "Countries Supported",
    icon: <Globe size={22} />,
    bg: "#FFF7ED",
    color: "#F59E0B",
  },
];

const Stats = () => {
  return (
    <section className="stats-section" id="Stats">
      {/* TITLE */}
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Powering Businesses at Scale</h2>
        <p>Trusted by merchants worldwide to process payments securely</p>
      </motion.div>

      {/* STATS CARDS */}
      <div className="stats">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            className="stat-card"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              delay: i * 0.2,
            }}
          >
            <div
              className="stat-icon"
              style={{ background: item.bg, color: item.color }}
            >
              {item.icon}
            </div>

            <div className="stat-text">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
