import { Link, useNavigate } from "react-router-dom";
import "./iletisim.css";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import categoriesData from "../../assets/data/categories.json";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      // Yönlendirilen sayfada kullanmak üzere state nesnesi oluştur
      const state = {
        category: selectedCategory,
      };

      navigate(`/form`, { state });
    }
  }, [selectedCategory, navigate]);

  document.title = "Dijital anıt - İletişim";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="iletisim-baslik">İletişim</h2>
      <div className="container-iletisim">
        <div className="contact-section">
          <Link to="https://twitter.com/dijitalanit" target="_blank">
            <div className="sosyal-medya-ikon">
              <div className="iletisim-padding">
                <FaTwitter />
              </div>
            </div>
          </Link>
          <Link to="mailto:dijitalanit@gmail.com" target="_blank">
            <div className="sosyal-medya-ikon">
              <div className="iletisim-padding">
                <TbMail />
              </div>
            </div>
          </Link>
        </div>
        <div className="content-section">
          <p>
            Sitedeki eksik veya hatalı bilgileri düzeltmek için lütfen iletişime
            geçin. Eğer bildiğiniz bir olay varsa, aşağıdaki listeden ilgili
            kategoriyi seçerek (seçim sonrasında ilgili form karşınıza
            çıkacaktır) gerekli bilgileri girebilirsiniz. Bu şekilde daha hızlı
            bir şekilde güncelleme yapabilirim. Ayrıca, form doldurmadan
            doğrudan olayla ilgili bilgileri bana iletmek isterseniz de benimle
            paylaşabilirsiniz. Teşekkür ederim.
          </p>

          <div className="select-iletisim">
            <h3>Kategori seç</h3>

            <select
              className="kategoriler"
              required
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="kategori-sec">Kategori seç</option>
              {categoriesData.map((item) => (
                <option key={item.id} value={item.category}>
                  {item.name}
                </option>
              ))}
            </select>

            <div className="select-arrow-down-iletisim">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
