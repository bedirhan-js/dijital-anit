import React, { useState, useEffect } from "react";
import { FaRegHandPointUp } from "react-icons/fa";
import "./ScrollButton.css"; // Stil dosyanızı ekleyebilirsiniz.

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kullanıcı sayfayı aşağı kaydırdıkça butonu görünür kıl
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Scroll olayını dinle
    window.addEventListener("scroll", handleScroll);

    // Temizleme
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // console.log(window.scrollY);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Düzgün bir animasyon ile kaydırma
    });
  };

  return (
    <div
      className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaRegHandPointUp />
    </div>
  );
};

export default ScrollButton;
