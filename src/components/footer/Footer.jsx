import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="copyright">&copy; 2024 Tüm Hakları Saklıdır</div>
      <div className="social-icons">
        <Link to="/iletisim">İletişim</Link>
      </div>
    </footer>
  );
};

export default Footer;
