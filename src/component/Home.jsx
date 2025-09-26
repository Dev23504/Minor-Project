import React from 'react';
import About from './About';
import History from './History';
import Time from './Time';
import { useState } from 'react';
import './home.css';
import m1 from '../image/m1.jpg';
import m2 from '../image/m2.jpg';
import m3 from '../image/m3.jpg';
import m4 from '../image/m4.jpg';
import m5 from '../image/m5.jpg';
import m6 from '../image/m4.jpg';
import Gallery from './Gallery';
import Contact from './Contact';


const images = [m1, m2, m3, m4, m5, m6];

function Home({language}) {
  
  return (
    <>
      
      <div className="home-container text-center">
        <h1>
          {language === 'en'
            ? '|| You are heartily welcome to the holy city of Maa Baglamukhi ||'
            : '|| माँ बगलामुखी की पावन नगरी में आपका हार्दिक स्वागत है ||'}
        </h1>


      </div>
      <div className='sl'>
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide slide-${index}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>

          ))}

        </div>
      </div>
      <br />

      <section>
        <About language={language} />
      </section>
      <section>
        <History language={language} />
      </section>
        <section>
        <Time language={language} />
      </section>
        <section>
        <Gallery language={language} />
      </section>
       <section>
        <Contact language={language} />
      </section>
      
    </>
  );
}

export default Home;
