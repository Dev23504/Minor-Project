import React from "react";
import guruji from "../image/Nitish.jpg"; 
import './about.css';

function About({ language }) {
  return (
    <div className="about-container flex flex-col md:flex-row items-center gap-8 p-6">
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={guruji}
          alt="Guruji"
          className="rounded-2xl shadow-lg border-4 border-red-500 w-80 h-auto"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 text-justify">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          {language === "en" ? "Maa Baglamukhi Sadhak" : "माँ बगलामुखी साधक"}
        </h2>
        <h3 className="text-2xl font-semibold mb-3">
          {language === "en"
            ? "Acharya Pt. Nitish Ji Shrama"
            : "आचार्य पं नितीश जी शर्मा"}
        </h3>
        <h6>Phone: +91 77250 37722</h6>
        <p className="mb-4 leading-relaxed">
          {language === "en"
            ? "Acharya Ji’s purpose is to guide devotees in Maa Baglamukhi worship, rituals, and the deep knowledge of Vedas and Puranas. Through his experience and devotion, he has helped many solve their life problems."
            : "आचार्य जी का उद्देश्य भक्तों को माँ बगलामुखी की साधना, अनुष्ठान और वेद-पुराणों की गहराई से जानकारी देना है। अपने अनुभव और साधना से इन्होंने कई भक्तों की जीवन समस्याओं का समाधान किया है।"}
        </p>

        <h3 className="text-xl font-bold text-red-500 mb-2">
          {language === "en"
            ? "Baglamukhi Anushthan"
            : "बगलामुखी अनुष्ठान"}
        </h3>
        <p className="leading-relaxed">
          {language === "en"
            ? "Baglamukhi Anushthan is performed for victory over enemies, court cases, debt relief, political stability, business success, and peace of mind."
            : "शत्रु पर विजय प्राप्त करने, कोर्ट कचहरी के मामले, कर्ज मुक्ति, राजनैतिक स्थिरता, व्यवसाय में सफलता एवं मानसिक शांति हेतु बगलामुखी अनुष्ठान का महत्व है।"}
        </p>
      </div>
    </div>
  );
}

export default About;
