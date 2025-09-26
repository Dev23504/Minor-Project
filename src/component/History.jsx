import React from "react";

function History({ language }) {
  return (
    <div className="history-container" >
      <h2 className="">
        {language === "en"
          ? "History of Maa Baglamukhi"
          : "माँ बगलामुखी का इतिहास"}
      </h2>

      <div className="">
        {language === "en" ? (
          <>
            <p>
              The Maa Baglamukhi Temple is located in Nalkheda, Agar Malwa
              district, about 100 kilometers from Ujjain. It is situated on the
              banks of the Lakhundar River and holds great religious and tantric
              significance. The idol of Maa Baglamukhi in the temple dates back
              to the Pandava era, as mentioned in the Kalika Purana. The temple
              features three main deities: Maa Baglamukhi in the center,
              Goddess Mahalakshmi on the right, and Goddess Saraswati on the
              left, all in the form of sacred stones (pindis).
            </p>
            <p>
              During their exile in the Dwapara Yuga, Lord Krishna advised the
              Pandavas to worship Maa Baglamukhi. Maa Baglamukhi is the eighth
              of the ten Mahavidyas, and her worship is considered infallible.
              The temple is over 5,000 years old and is a principal Siddha Peeth
              (sacred site) in India.
            </p>
            <p>
              Several sacred trees, including Bel Patra, Champa, White Ankde,
              Amla, Neem, and Peepal, are found together here. Behind the temple
              flows the Lakhundar River, historically called Lakshmana, which
              has water year-round, adding to the natural beauty of the site.
            </p>
            <p>
              Inside the temple, there is a Sabha Mandap (assembly hall) with 16
              pillars, built 266 years ago in 1815 AD by Pandit Ibuji and
              southern artisan Shri Tularam. In front of the temple stands a
              32-foot-high Deepmala (lamp tower), believed to have been built by
              Maharaja Vikramaditya.
            </p>
            <p>
              Within the complex, there is a south-facing Hanuman temple, a
              north-facing Radha-Krishna temple, and an east-facing Bhairav
              temple. The temple’s lion-faced entrance gate is especially
              famous.
            </p>
            <p>
              Devotees from all over India and abroad visit this sacred site to
              perform pujas, havans, and anushthans dedicated to Maa Baglamukhi.
            </p>
          </>
        ) : (
          <>
            <p>
              इतिहास – उज्जैन से लगभग 100 किलोमीटर दूर आगर मालवा जिले के
              नलखेड़ा में माँ बगलामुखी मंदिर स्थित है। यह मंदिर लखुंदर नदी के
              तट पर बसा हुआ है और धार्मिक व तांत्रिक दृष्टि से अत्यंत
              महत्त्वपूर्ण है। मंदिर में स्थित माँ बगलामुखी की मूर्ति पांडव
              कालीन मानी जाती है, जिसका प्रमाण कालिका पुराण में भी मिलता है।
            </p>
            <p>
              मंदिर में तीन प्रमुख देवियाँ स्थापित हैं – बीच में माँ बगलामुखी,
              दाएँ महालक्ष्मी और बाएँ माँ सरस्वती, जो पींडियों के रूप में
              विराजमान हैं। द्वापर युग में अज्ञातवास के दौरान भगवान श्रीकृष्ण ने
              पांडवों को माँ बगलामुखी की साधना करने का उपदेश दिया था।
            </p>
            <p>
              यह मंदिर भारत का प्रधान सिद्ध पीठ माना जाता है और लगभग 5000 वर्ष
              पुराना है। यहाँ बेल पत्र, चंपा, आँवला, नीम और पीपल जैसे पवित्र
              वृक्ष एक साथ पाए जाते हैं। मंदिर के पीछे लखुंदर नदी (प्राचीन नाम
              – लक्ष्मणा) निरंतर बहती है।
            </p>
            <p>
              मंदिर में 16 खंभों वाला सभा मंडप है, जिसे संवत 1815 में पंडित
              ईबूजी और दक्षिणी कारीगर श्री तुलाराम ने बनवाया था। मंदिर के सामने
              32 फीट ऊँची दीपमाला है, जिसके बारे में मान्यता है कि महाराजा
              विक्रमादित्य ने इसका निर्माण करवाया था।
            </p>
            <p>
              मंदिर परिसर में दक्षिणमुखी हनुमान मंदिर, उत्तरमुखी राधा-कृष्ण
              मंदिर और पूर्वमुखी भैरव मंदिर स्थित हैं। इस मंदिर का सिंहमुखी द्वार
              अत्यंत प्रसिद्ध है।
            </p>
            <p>
              यहाँ दूर-दराज़ से भक्त विशेष पूजा, हवन और अनुष्ठान करने आते हैं और
              माँ का आशीर्वाद प्राप्त करते हैं।
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default History;
