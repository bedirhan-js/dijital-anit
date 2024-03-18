import { FaChevronDown } from "react-icons/fa";
import cityData from "../../assets/data/iller.json"; // JSON dosyasını import et
import "./sehirler.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityContent } from "../../app/slices/contentSlice";
import { showAlert } from "../../app/slices/alertSlice";
import { selectCity, setSelectedCity } from "../../app/slices/citySlice";
import { selectSelectedYear } from "../../app/slices/selectedYearSlice";
const Sehirler = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const selectedCity = useSelector(selectCity);

  const selectedYear = useSelector(selectSelectedYear); // Redux'tan selectedYear state'ini al

  const handleCityChange = (e) => {
    const { value } = e.target;
  
    dispatch(setSelectedCity(value));
  
    if (!selectedCategory) {
      dispatch(showAlert("Kategori seçilmedi!"));
      dispatch(setSelectedCity("sehir-sec"));
      return;
    }
  
    const contentParams = {
      category: selectedCategory,
      sehir: value,
    };
  
    if (selectedYear !== "yil-sec") {
      contentParams.yil = selectedYear;
    }
  
    dispatch(fetchCityContent(contentParams));
  };
  

  // console.log("sehirler => ", selectedCity);
  return (
    <div className="select-city">
      <h3>Şehir seç</h3>

      <select
        className="sehirler"
        required
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="sehir-sec" disabled>
          Şehir seç
        </option>
        <option value="all-city">Tüm şehirler</option>

        {cityData.map((item) => (
          <option key={item.id} value={item.sehir}>
            {item.sehir}
          </option>
        ))}
      </select>

      <div className="select-arrow-down-city">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Sehirler;
