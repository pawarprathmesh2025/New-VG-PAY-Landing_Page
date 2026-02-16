import { motion } from "framer-motion";
import device4 from "/src/assets/device4.png";
import {
  Volume2,
  QrCode,
  Smartphone,
  BarChart3,
  Shield,
  CheckCircle,
} from "lucide-react";
import "./ServicesPage.css";

const services = [
  {
    icon: Volume2,
    title: "Smart Soundbox",
    description:
      "Get instant voice alerts for every successful payment. No confusion. No missed transactions.",
    gradient: "emerald",
    features: [
      "Real-time voice confirmation",
      "Multiple language support",
      "Clear audio quality",
      "Battery backup included",
      "Easy setup & activation",
    ],
    image:device4,
     imageClass: "soundbox-image",
  },
  {
    icon: QrCode,
    title: "Easy Payments",
    description:
      "Accept payments from any UPI app with a simple QR scan. Fast, secure, and hassle-free.",
    gradient: "blue",
    features: [
      "Universal UPI compatibility",
      "Instant payment confirmation",
      "Dynamic QR generation",
      "Multiple payment modes",
      "Zero transaction failures",
    ],
    image:
      "https://images.unsplash.com/photo-1706759755767-526cdaa02109?auto=format&fit=crop&w=1080&q=80",
  },
  {
    icon: Smartphone,
    title: "VG PAY Dashboard",
    description:
      "Manage your business with ease. Track sales, monitor transactions, and grow your revenue.",
    gradient: "purple",
    features: [
      "Real-time business insights",
      "Transaction management",
      "Sales analytics",
      "Multi-device access",
      "Downloadable reports",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Track and grow your sales with powerful analytics. Make data-driven decisions for your business.",
    gradient: "orange",
    features: [
      "Sales trend analysis",
      "Customer insights",
      "Revenue forecasting",
      "Performance metrics",
      "Custom report builder",
    ],
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?auto=format&fit=crop&w=1080&q=80",
  },
  {
    icon: Shield,
    title: "Secure & Compliant Payments",
    description:
      "Secure payments powered by advanced encryption to keep every transaction safe and reliable.",
    gradient: "cyan",
    features: [
      "Bank-level encryption",
      "PCI DSS compliance",
      "Fraud detection",
      "Secure data storage",
      "Regular security audits",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1080&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <div className="services-wrapper">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <div className="services-badge">Our Services</div>

          <h1>
            Everything You Need to <br />
            <span>Accept Payments Smarter</span>
          </h1>

          <p>
            VG Pay offers secure, fast, and reliable payment solutions with
            instant sound alerts and real-time business tracking for merchants.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="services-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                className={`service-item ${!isEven ? "reverse" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Image */}
<div className={`service-image ${service.gradient}`}>
  <img
    src={service.image}
    alt={service.title}
    style={
      service.imageClass === "soundbox-image"
        ? {
            objectFit: "contain",
            padding: "30px",
            height: "320px",
            width: "100%",
          }
        : undefined
    }
  />

  <div className="image-icon">
    <Icon size={30} color="#fff" />
  </div>
</div>


                {/* Content */}
                <div className="service-content">
                  <div className={`content-icon ${service.gradient}`}>
                    <Icon size={26} color="#fff" />
                  </div>

                  <h2>{service.title}</h2>
                  <p>{service.description}</p>

                  <ul>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <CheckCircle size={18} className="check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`service-btn ${service.gradient}`}>
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bottom-cta">
          <h3>Ready to Transform Your Business?</h3>
          <p>
            Join thousands of merchants already using VGPAY services to grow
            their business
          </p>
          <div className="cta-buttons">
            <button className="cta-primary">Get Started Now</button>
            <button className="cta-secondary">Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
}
