import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "./what.css";

function Whatsapp() {
  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919179592151"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp />
      </a>

      {/* Call */}
      <a href="tel:+919179592151" className="call">
        <FaPhoneAlt />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/baglamukhi_matarani?utm_source=ig_web_button_share_sheet&igsh=MXdnazN3aGs2bXN0OQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="instagram"
      >
        <FaInstagram />
      </a>
    </div>
  );
}

export default Whatsapp;
