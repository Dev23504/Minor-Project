import React, { useState } from "react";
import "./contact.css";

function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔹 Local backend URL
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          language: language || "hi",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(
          data.message ||
          (language === "en"
            ? "Message sent successfully!"
            : "संदेश सफलतापूर्वक भेजा गया!")
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(
          data.error ||
          (language === "en"
            ? "Failed to send message."
            : "संदेश भेजने में समस्या हुई।")
        );
      }
    } catch (err) {
      console.error("Contact form error:", err);
      alert(language === "en" ? "Failed to send" : "संदेश भेजने में समस्या");
    }
  };

  const content = {
    hi: {
      title: "संपर्क करें",
      name: "आपका नाम",
      email: "आपका ईमेल",
      message: "आपका संदेश",
      button: "भेजें",
    },
    en: {
      title: "Contact Us",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      button: "Send",
    },
  };

  const selected = language === "en" ? content.en : content.hi;

  return (
    <div className="contact-container">
      <h2 className="contact-title">{selected.title}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={selected.name}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={selected.email}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder={selected.message}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">{selected.button}</button>
      </form>
    </div>
  );
}

export default Contact;
