import React from "react";
import "./gallery.css";
import m1 from "../image/m4.jpg";
import m2 from "../image/m2.jpg";
import m3 from "../image/pan.jpeg";
import m4 from "../image/nihav.jpeg";
import m5 from "../image/rev.jpeg";
import m6 from "../image/m6.jpg";
import m7 from "../image/han.jpeg";
import m8 from "../image/ser.webp";
import m9 from "../image/co.jpg";
import m10 from "../image/coo.jpg";
import m11 from "../image/cooo.jpg";
import m12 from "../image/ag.webp";


const images = [m1, m2, m3, m4, m5, m6,m7, m8,m9,m10,m11,m12];

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
