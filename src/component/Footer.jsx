import React from "react";
import "./Footer.css";

function Footer({ language }) {
    const content = {
        hi: {
            address: "पता: Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, MP – 465445",
            phone: "फोन: +91 9179592151",
            whatsapp: "व्हाट्सएप: +91 9179592151",
            instagram: "इंस्टाग्राम:  baglamukhi_matarani",
            mapTitle: "हमारा स्थान",
            copyright: "© 2025 मंदिर. सर्वाधिकार सुरक्षित।",
        },
        en: {
            address: "Address: Maa Baglamukhi Mandir, Nalkheda, Agar Malwa, MP – 465445",
            phone: "Phone: +91 9179592151",
            whatsapp: "WhatsApp: +91 9179592151",
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0000000000!2d76.041414!3d23.607414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3971f0e0c0d0c0b1%3A0x1234567890abcdef!2sMaa%20Baglamukhi%20Mandir%2C%20Nalkheda!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
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
                    Developed by Devraj Singh 
                    Contact:- 9098987675 <br />
                   <a href="https://www.instagram.com/im_.dev._9/">Instagram</a>
                </p></div>

        </footer>
    );
}

export default Footer;
