import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

/* =====================================
   MAIN MENU
===================================== */
function getMainMenu() {
  return [
    { label: "Small Shop / Kirana", value: "small_shop" },
    { label: "Restaurant / Cafe", value: "restaurant" },
    { label: "Mobile Vendor", value: "mobile_vendor" },
    { label: "Enterprise Business", value: "enterprise" }
  ];
}

/* =====================================
   FLOW MAP
===================================== */

const flowMap = {

  /* ================= INITIAL ================= */

  initial: {

    /* ---------- SMALL SHOP (S-BOX S1) ---------- */
    small_shop: {
      reply:
        "For small shops, I recommend the VG S-BOX S1 Static QR Soundbox.",
      options: [
        { label: "Core Features", value: "features_static" },
        { label: "Payment Flow", value: "payment_flow_static" },
        { label: "Security & Compliance", value: "security_static" },
        { label: "Device Monitoring", value: "heartbeat_static" },
        { label: "Firmware Updates (FOTA)", value: "fota_static" },
        { label: "Talk to sales", value: "talk_sales" }
      ]
    },

    /* ---------- RESTAURANT / POS DEVICE ---------- */
    restaurant: {
      reply:
        "For restaurants and hospitality businesses, I recommend the VG Pay Smart POS Device.",
      options: [
        { label: "POS Features", value: "features_pos" },
        { label: "Guest Experience Flow", value: "guest_flow_pos" },
        { label: "Technical Specifications", value: "tech_pos" },
        { label: "Security Protocols", value: "security_pos" },
        { label: "Talk to sales", value: "talk_sales" }
      ]
    },

    /* ---------- MOBILE VENDOR ---------- */
    mobile_vendor: {
      reply:
        "For mobile vendors and small kiosks, I recommend the VG Smart Pocket Soundbox.",
      options: [
        { label: "Key Features", value: "features_mobile" },
        { label: "Connectivity & Battery", value: "connectivity_mobile" },
        { label: "Security & Authentication", value: "security_mobile" },
        { label: "Talk to sales", value: "talk_sales" }
      ]
    },

    /* ---------- ENTERPRISE ---------- */
    enterprise: {
      reply:
        "For enterprise businesses and multi-location merchants, I recommend the VG Dynamic Payment & Cloud-Managed Device Ecosystem.",
      options: [
        { label: "Enterprise Architecture", value: "architecture_enterprise" },
        { label: "Scalability & Performance", value: "scalability_enterprise" },
        { label: "Compliance & SLA", value: "compliance_enterprise" },
        { label: "Admin Portal & Reporting", value: "admin_enterprise" },
        { label: "Talk to sales", value: "talk_sales" }
      ]
    }
  },

  /* ================= FOLLOWUP ================= */

  followup: {

    /* ===== S-BOX S1 ===== */

    features_static: {
      reply:
        "VG S-BOX S1 Features:\n\n" +
        "• Static QR-based UPI support\n" +
        "• <2 second audio confirmation\n" +
        "• 2W (~90dB) loud speaker\n" +
        "• Multilingual announcements\n" +
        "• Dual SIM 4G connectivity\n" +
        "• USB-C powered\n" +
        "• LED payment indicator\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    payment_flow_static: {
      reply:
        "Payment Flow:\n\n" +
        "1️⃣ Customer scans QR\n" +
        "2️⃣ Bank sends secure webhook\n" +
        "3️⃣ Backend validates transaction\n" +
        "4️⃣ MQTT command pushed to device\n" +
        "5️⃣ Device announces payment via speaker + LED\n\n" +
        "All transactions are logged in admin portal.\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    security_static: {
      reply:
        "Security & Compliance:\n\n" +
        "• NPCI static QR compliant\n" +
        "• TLS 1.2+ encryption\n" +
        "• JWT device authentication\n" +
        "• PCI DSS aligned security\n" +
        "• Unique IMEI-based device identity\n" +
        "• Anti-spoofing validation\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    heartbeat_static: {
      reply:
        "Device Monitoring:\n\n" +
        "• Heartbeat every 30–60 seconds\n" +
        "• Reports battery level\n" +
        "• Reports signal strength\n" +
        "• Reports SIM status\n" +
        "• Logged in admin dashboard\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    fota_static: {
      reply:
        "Firmware Updates (FOTA):\n\n" +
        "• OTA firmware updates supported\n" +
        "• HTTP URL delivery\n" +
        "• Checksum validation\n" +
        "• Retry logic\n" +
        "• Update acknowledgment to server\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    /* ===== POS DEVICE (RESTAURANT) ===== */

    features_pos: {
      reply:
        "VG Pay POS Device Features:\n\n" +
        "• 10\" HD Touchscreen\n" +
        "• NFC, Tap-to-Pay, QR, UPI support\n" +
        "• Lightning-fast billing\n" +
        "• Customizable menus\n" +
        "• In-room dining & service billing\n" +
        "• Loyalty & analytics integration\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    guest_flow_pos: {
      reply:
        "End-to-End Guest Experience:\n\n" +
        "• Digital check-in via tablet\n" +
        "• Instant billing & ordering\n" +
        "• Tap-n-Pay support\n" +
        "• Conference & event POS billing\n" +
        "• One-tap checkout without reception\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    tech_pos: {
      reply:
        "Technical Specifications:\n\n" +
        "• 10\" HD Touchscreen\n" +
        "• Wi-Fi + 4G LTE + NFC + Bluetooth\n" +
        "• 5000mAh battery\n" +
        "• Thermal printer optional\n" +
        "• AES 256-bit encryption\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    security_pos: {
      reply:
        "POS Security Protocols:\n\n" +
        "• End-to-end encryption\n" +
        "• Role-based access control (RBAC)\n" +
        "• Real-time threat monitoring\n" +
        "• Device-level lockdown\n" +
        "• PCI DSS compliance\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    /* ===== MOBILE VENDOR ===== */

    features_mobile: {
      reply:
        "VG Smart Pocket Soundbox:\n\n" +
        "• Lightweight & portable\n" +
        "• 12+ hour battery backup\n" +
        "• 4G persistent connectivity\n" +
        "• Dynamic QR supported\n" +
        "• Loud payment announcements\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    connectivity_mobile: {
      reply:
        "Connectivity & Power:\n\n" +
        "• Dual SIM support\n" +
        "• Persistent 4G network\n" +
        "• Battery monitoring system\n" +
        "• GSM reset handling for low coverage\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    security_mobile: {
      reply:
        "Security & Authentication:\n\n" +
        "• JWT-based authentication\n" +
        "• IMEI validation\n" +
        "• Secure onboarding via /device/onboard\n" +
        "• TLS encrypted communication\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    /* ===== ENTERPRISE ===== */

    architecture_enterprise: {
      reply:
        "Enterprise Architecture:\n\n" +
        "• Central cloud backend\n" +
        "• MQTT broker for real-time device messaging\n" +
        "• REST APIs for bank integration\n" +
        "• Redis cache for device status\n" +
        "• Scalable multi-bank integration\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    scalability_enterprise: {
      reply:
        "Scalability & Performance:\n\n" +
        "• Supports 1M+ active devices\n" +
        "• Sub-2 second announcements\n" +
        "• ≥99.95% uptime SLA\n" +
        "• Load-balanced backend\n" +
        "• Auto-scaling cloud infra\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    compliance_enterprise: {
      reply:
        "Compliance & SLA:\n\n" +
        "• NPCI QR compliant\n" +
        "• RBI data residency (India hosted)\n" +
        "• TLS 1.2+ encryption\n" +
        "• Audit logging & traceability\n" +
        "• Disaster recovery support\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    admin_enterprise: {
      reply:
        "Admin Portal Capabilities:\n\n" +
        "• Device health dashboard\n" +
        "• Transaction logs & reports\n" +
        "• Merchant mapping & provisioning\n" +
        "• Role-based access control\n" +
        "• Alert & anomaly monitoring\n\n" +
        "Thank you. How else can I help you?",
      options: getMainMenu()
    },

    /* ===== SALES ===== */

    talk_sales: {
      reply:
        "For that, our team can guide you better. Would you like me to connect you?",
      options: [
        { label: "Yes connect me", value: "connect_yes" },
        { label: "Back to main menu", value: "main_menu" }
      ]
    },

    connect_yes: {
      reply:
        "Our sales team will reach out shortly. Thank you. How else can I help you?",
      options: getMainMenu()
    },

    main_menu: {
      reply: "Welcome back 👋 What type of business do you operate?",
      options: getMainMenu()
    }
  }
};

/* =====================================
   API
===================================== */

app.post("/ai/chat", (req, res) => {
  const { action, stage } = req.body;

  try {
    if (stage === "initial" && flowMap.initial[action]) {
      return res.json(flowMap.initial[action]);
    }

    if (stage === "followup" && flowMap.followup[action]) {
      return res.json(flowMap.followup[action]);
    }

    return res.json({
      reply:
        "For that, our team can guide you better. Would you like me to connect you?",
      options: [
        { label: "Yes connect me", value: "connect_yes" },
        { label: "Back to main menu", value: "main_menu" }
      ]
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      reply:
        "For that, our team can guide you better. Would you like me to connect you?",
      options: [
        { label: "Yes connect me", value: "connect_yes" }
      ]
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ VGPAY AI backend running on port ${PORT}`);
});
