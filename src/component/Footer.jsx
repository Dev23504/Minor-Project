import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import "./what.css";
function Footer({ language }) {
    const content = {
        hi: {
            address: "पता: Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, MP – 465445",
            phone: "फोन: +91 77250 37722",
            whatsapp: "व्हाट्सएप: +91 77250 37722",
            instagram: "इंस्टाग्राम:  baglamukhi_matarani",
            mapTitle: "हमारा स्थान",
            copyright: "© 2025 मंदिर. सर्वाधिकार सुरक्षित।",
        },
        en: {
            address: "Address: Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, MP – 465445",
            phone: "Phone: +91 77250 37722",
            whatsapp: "WhatsApp: +91 77250 37722",
            instagram: "Instagram: baglamukhi_matarani",
            mapTitle: "Our Location",
            copyright: "© 2025 Mandir. All rights reserved.",
        },
    };

    const selected = language === "en" ? content.en : content.hi;

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="contact-info">
                    <p>{selected.address}</p>
                    <p>{selected.phone}</p>
                    <p>{selected.whatsapp}</p>
                    <p>{selected.instagram}</p>
                </div>

                <div className="map-container">
                    <h4>{selected.mapTitle}</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14597.516361014335!2d76.2346770837189!3d23.840668757738122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964b909cb7ea03b%3A0x801ae9acaf742e38!2sNalkheda%2C%20Madhya%20Pradesh%20465445!5e0!3m2!1sen!2sin!4v1702402314343!5m2!1sen!2sin"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Maa Baglamukhi Mandir Map"
                    ></iframe>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{selected.copyright}</p>
            </div>
            <div className="footer-bottom">
                <p style={{ fontSize: '0.8rem', marginTop: '5px', color: '#fff7f7ff' }}>
                     <h4> Developed by :- Devraj Singh</h4>
                    
                    <div className="floating-button">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919098987675"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whats"
                        >
                            <FaWhatsapp />
                        </a>

                        {/* Call */}
                        <a href="tel:+919098987675" className="calling">
                            <FaPhoneAlt />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/im_.dev._9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="insta"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </p></div>

        </footer>
    );
}

export default Footer;
