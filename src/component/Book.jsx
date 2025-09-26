import React, { useState } from "react";
import axios from "axios";
import "./book.css";

function Book({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    havanType: "",
    message: ""
  });

  const havanOptions = [
    "अकर्षण हवन",
    "धन हवन",
    "सफलता हवन",
    "शांति हवन",
    "अनुष्ठान हवन"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/book-havan", formData);
      alert(language === "en"
        ? `Thank you ${formData.name}, your Havan has been booked!`
        : `धन्यवाद ${formData.name}, आपका हवन बुकिंग हो गया है!`);
      setFormData({ name: "", phone: "", havanType: "", message: "" });
    } catch (err) {
      alert(language === "en"
        ? "Error booking Havan. Please try again."
        : "हवन बुकिंग में त्रुटि हुई। कृपया पुनः प्रयास करें।");
      console.error(err);
    }
  };

  const content = {
    hi: {
      title: "ऑनलाइन हवन बुक करें",
      name: "आपका नाम",
      phone: "आपका फ़ोन नंबर",
      havanType: "हवन का प्रकार चुनें",
      message: "संदेश (यदि कोई)",
      button: "हवन बुक करें"
    },
    en: {
      title: "Book Havan Online",
      name: "Your Name",
      phone: "Your Phone",
      havanType: "Select Havan Type",
      message: "Your Message (optional)",
      button: "Book Havan"
    }
  };

  const selected = language === "en" ? content.en : content.hi;

  return (
    <div className="havan-container">
      <h2>{selected.title}</h2>
      <form onSubmit={handleSubmit} className="havan-form">
        <input
          type="text"
          name="name"
          placeholder={selected.name}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder={selected.phone}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="havanType"
          value={formData.havanType}
          onChange={handleChange}
          required
        >
          <option value="">{selected.havanType}</option>
          {havanOptions.map((type, idx) => (
            <option key={idx} value={type}>{type}</option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder={selected.message}
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">{selected.button}</button>
      </form>
    </div>
  );
}

export default Book;
