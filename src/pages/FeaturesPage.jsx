import { motion } from "framer-motion";
import {
  LayoutDashboard,
  History,
  Headphones,
  User,
  Smartphone,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import "./FeaturesPage.css";

const features = [
  {
    icon: LayoutDashboard,
    title: "Real-time Dashboard",
    description:
      "Monitor your sales, transactions, and business performance with our intuitive real-time dashboard that updates instantly.",
    gradient: "purple",
    details: [
      "Live transaction monitoring",
      "Sales analytics at a glance",
      "Performance metrics tracking",
      "Instant notifications",
    ],
  },
  {
    icon: History,
    title: "Transaction History",
    description:
      "Detailed records of all transactions with search, filter and export capabilities for easy reconciliation.",
    gradient: "emerald",
    details: [
      "Advanced search filters",
      "Export to CSV/PDF",
      "Transaction categorization",
      "Quick reconciliation tools",
    ],
  },
  {
    icon: Headphones,
    title: "Support Tickets",
    description:
      "Raise and track support tickets directly from your dashboard with priority response for business accounts.",
    gradient: "blue",
    details: [
      "Priority ticket handling",
      "Real-time status updates",
      "24/7 support availability",
      "Multi-channel support",
    ],
  },
  {
    icon: User,
    title: "Profile Management",
    description:
      "Complete control over your business profile, settings, and user permissions with multi-level access.",
    gradient: "green",
    details: [
      "Multi-user access control",
      "Role-based permissions",
      "Secure profile updates",
      "Activity audit logs",
    ],
  },
  {
    icon: Smartphone,
    title: "Device Management",
    description:
      "View and manage all devices connected to your account with security alerts for suspicious activity.",
    gradient: "indigo",
    details: [
      "Device registration",
      "Security monitoring",
      "Remote device control",
      "Suspicious activity alerts",
    ],
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Powerful reporting tools to analyze sales trends, customer behavior, and business growth opportunities.",
    gradient: "orange",
    details: [
      "Sales trend analysis",
      "Customer insights",
      "Growth metrics",
      "Custom report generation",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="features-page">
      <div className="features-wrapper">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="features-header"
        >
          <div className="features-badge">FEATURES</div>

          <h1>
            Everything You Need to <br />
            <span>Grow Your Business</span>
          </h1>

          <p>
            VGPAY provides a comprehensive suite of tools to streamline your
            payment processing and business operations.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                className="feature-card"   
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* ✅ Gradient only applied to icon */}
                <div className={`feature-icon ${feature.gradient}`}>
                  <Icon size={28} color="#fff" />
                </div>

                <h3>{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>

                <ul>
                  {feature.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>

                <a href="#" className="learn-more">
                  Learn more <ArrowRight size={16} />
                </a>

                <div className="decorative-line"></div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="cta-section">
          <div className="cta-content">
            <h3>Ready to Get Started?</h3>
            <p>
              Experience all these powerful features and more. Start your free
              trial today and transform how you manage payments.
            </p>

            <div className="cta-buttons">
              <button className="btn-primary">Start Free Trial</button>
              <button className="btn-secondary">View Pricing</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
