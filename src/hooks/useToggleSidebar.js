// useToggleSidebar.js
import { useState, useEffect } from "react";

const useToggleSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [pressedKeys, setPressedKeys] = useState([]);

  const handleKey = (e, isKeyDown) => {
    const key = e.key.toLowerCase();

    setPressedKeys((prevKeys) => {
      if (isKeyDown && !prevKeys.includes(key)) {
        return [...prevKeys, key];
      } else if (!isKeyDown) {
        return prevKeys.filter((k) => k !== key);
      }

      return prevKeys;
    });
  };

  const handleKeyDown = (e) => {
    handleKey(e, true);
  };

  const handleKeyUp = (e) => {
    handleKey(e, false);

    // Eğer hem "m" hem de "l" tuşları basılıysa, Sidebar'ı kapat veya aç
    if (pressedKeys.includes("m") && pressedKeys.includes("l")) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  useEffect(() => {
    // Component yüklendiğinde ve kaldırıldığında tuş olaylarını dinlemeye başla ve durdur
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [pressedKeys]);

  return {
    isSidebarOpen,
  };
};

export default useToggleSidebar;
