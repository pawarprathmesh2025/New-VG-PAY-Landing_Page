import React from "react";
import {
  FaTrophy,
  FaStar,
  FaLightbulb,
  FaHandsHelping,
  FaRibbon,
} from "react-icons/fa";

const AwardIcon = ({ type }) => {
  const iconStyle = { color: "#10891E", fontSize: "36px" };

  switch (type) {
    case "leadership":
      return <FaTrophy style={iconStyle} />;
    case "it":
      return <FaStar style={iconStyle} />;
    case "innovation":
      return <FaLightbulb style={iconStyle} />;
    case "csr":
      return <FaHandsHelping style={iconStyle} />;
    case "annual":
      return <FaRibbon style={iconStyle} />;
    default:
      return <FaStar style={iconStyle} />;
  }
};

export default AwardIcon;
