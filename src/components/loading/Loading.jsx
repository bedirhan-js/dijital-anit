import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="custom-card">
        <div className="image-container">
          <img src={`src/assets/${"yükleniyor.png"}`} alt="Card Image" />
        </div>
        <div className="content-container">
          <h3 className="card-title">Yükleniyor......</h3>
          <p className="card-description">Yükleniyor......</p>
          <a className="button-10" to={`wsertrty`}>
            Detaylar
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
