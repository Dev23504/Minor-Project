import React, { useState } from "react";
import './contact.css'
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
      const res = await fetch("https://minor-backend-2.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message); // backend से response दिखाएगा
      setFormData({ name: "", email: "", message: "" });

    } catch (err) {
      console.error(err);
      alert(language === "en" ? "Failed to send" : "संदेश भेजने में समस्या");
    }
  };

  // Language content
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
