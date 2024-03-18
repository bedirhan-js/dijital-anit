import "./slider.css";

import { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Slider = ({ items }) => {
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
    <>
      <div
        className={
          currentIndex % 2 === 0
            ? "slider slide-in-left"
            : "slider slide-in-right"
        }
      >
        {items[currentIndex].endsWith(".jpeg") ||
        items[currentIndex].endsWith(".webp") ||
        items[currentIndex].endsWith(".png") ||
        items[currentIndex].endsWith(".jpg") ? (
          <img
            src={import.meta.env.VITE_API_URL + items[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        ) : (
          <video controls ref={videoRef}>
            <source src={import.meta.env.VITE_API_URL + items[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {items?.length > 1 && (
        <>
          <p className="image-count">
            Resim {currentIndex + 1} / {items.length}
          </p>
          <nav className="slider-nav">
            <ul>
              <li className="arrow">
                <button className="previous" onClick={prevSlide}>
                  <span>
                    <FaArrowLeft />
                  </span>
                </button>
              </li>
              <li className="arrow">
                <button className="next" onClick={nextSlide}>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
};

export default Slider;
