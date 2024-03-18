import { Link } from "react-router-dom";
import "./carts.css";

const Card = ({ item }) => {
  // const img = "https://api.slingacademy.com/public/sample-photos/";
  // const imgg = ".jpeg";
  // img + item.id + imgg




  return (
    <div className="custom-card">
      <div className="image-container">
        <img src={import.meta.env.VITE_API_URL + item.resim_1} alt="Card Image" />
      </div>
      <div className="content-container">
        <h3 className="card-title">{item.baslik}</h3>
        <p className="card-description">{item.detaylar} </p>
        <Link className="button-10" to={`/${item.kategori}/${item.id}`}>
          Detaylar
        </Link>
      </div>
    </div>
  );
};

export default Card;
