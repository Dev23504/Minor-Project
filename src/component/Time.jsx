import React from "react";
import guruji from "../image/m1.jpg"; // अपनी फोटो import करो
import './about.css';

function Time({ language }) {
  // Hindi और English के लिए content object
  const content = {
    hi: {
      title: "मंदिर बंद होने एवं खुलने का समय",
      timings: [
        "🕉 आरती समय: प्रातः 6:00 बजे मंगलाआरती",
        "🕉 संध्या आरती: संध्या आरती समय 7:30 बजे",
        "🔸 दर्शन: प्रातः 6:00 बजे से रात्रि 9:30 बजे तक होते हैं।",
        "🔸 हवन पूजन का समय: नवरात्रि में सुबह, शाम की आरती को छोड़कर संपूर्ण समय।",
        "🔸 नवरात्रि एवं विशेष पर्व पर: दर्शन प्रातः 06:00 बजे से रात 11:00 बजे तक होते हैं।"
      ]
    },
    en: {
      title: "Temple Opening and Closing Timings",
      timings: [
        "🕉 Aarti Timing: Morning Aarti at 6:00 AM",
        "🕉 Evening Aarti: Evening Aarti at 7:30 PM",
        "🔸 Darshan: From 6:00 AM to 9:30 PM",
        "🔸 Havan Poojan Timing: During Navratri, except morning & evening Aarti, all time available",
        "🔸 On Navratri and special occasions: Darshan from 6:00 AM to 11:00 PM"
      ]
    }
  };

  const selected = content[language] || content.hi; // Default Hindi

  return (
    <div className="about-container ">
      
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={guruji}
          alt="Mandir"
          className=""
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-justify">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          {selected.title}
        </h2>

        <div className="mb-4 text-lg leading-relaxed">
          {selected.timings.map((line, index) => (
            <p className="mb-2" key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Time;
