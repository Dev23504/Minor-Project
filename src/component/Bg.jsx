import React from 'react';
import './Bg.css';
import b1 from '../image/b1.jpg';
import b2 from '../image/b2.jpg';
// import b3 from '../image/b3.png';
// import b4 from '../image/b4.png';


const images = [b1, b2];

function Bg() {
    return (
        <div className="slider-container">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`slide slide-${index}`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            
            ))}
            
        </div>
    );
}

export default Bg;
