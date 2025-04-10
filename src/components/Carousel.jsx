import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slides"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div className="carousel-slide" key={index}>
            <div className="carousel-multi-img">
              {Array.isArray(img.url) ? (
                img.url.map((url, i) => (
                  <img key={i} src={url} alt={`Slide ${index} - Img ${i}`} className="cimg" style={{marginRight:80}}/>
                ))
              ) : (
                <img src={img.url} alt={`Slide ${index}`} className="cimg" />
              )}
            </div>
            <p className="carousel-text">{img.caption}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
