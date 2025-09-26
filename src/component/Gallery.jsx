import React from "react";
import "./gallery.css";
import m1 from "../image/m1.jpg";
import m2 from "../image/m2.jpg";
import m3 from "../image/m3.jpg";
import m4 from "../image/m4.jpg";
import m5 from "../image/m5.jpg";
import m6 from "../image/m6.jpg";

const images = [m1, m2, m3, m4, m5, m6];

function Gallery({ language }) {
  // Language content
  const content = {
    hi: "मंदिर की तस्वीरें",
    en: "Temple Gallery"
  };

  const title = language === "en" ? content.en : content.hi;

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">{title}</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
