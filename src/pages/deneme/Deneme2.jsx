import React, { useState, useRef } from "react";

const Slider = () => {
  const items = [
    "http://backend.test/../../resimler/kopekler-resimler/65dae92a2897f.mp4",
    "http://backend.test/../../resimler/kopekler-resimler/65daeb5c28567.jpeg",
    "http://backend.test/../../resimler/kopekler-resimler/65db12e0846db.webp",
    "http://backend.test/../../resimler/kopekler-resimler/65db140568e66.mp4"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
    if (items[currentIndex].endsWith(".mp4")) {
      videoRef.current.load(); // Videoyu yeniden yükle
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
    if (items[currentIndex].endsWith(".mp4")) {
      videoRef.current.load(); // Videoyu yeniden yükle
    }
  };

  return (
    <div className="">
      <button onClick={prevSlide}>Previous</button>
      <div className="">
        {items[currentIndex].endsWith(".jpeg") || items[currentIndex].endsWith(".webp") ? (
          <img src={items[currentIndex]} alt={`Slide ${currentIndex}`} />
        ) : (
          <video controls ref={videoRef}>
            <source src={items[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Slider;
