import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentByCategoryAndYear } from "../../app/slices/contentSlice";
import "./years.css";
import { showAlert } from "../../app/slices/alertSlice";
import {
  selectSelectedYear,
  setSelectedYear,
} from "../../app/slices/selectedYearSlice";
import { selectCity } from "../../app/slices/citySlice";

const Years = ({ selectedCategory }) => {
  const dispatch = useDispatch();

  const selectedYear = useSelector(selectSelectedYear); // Redux'tan selectedYear state'ini al

  const selectedCity = useSelector(selectCity);

  const [years, setYears] = useState([]);

  useEffect(() => {
    const yearOptions = [];
    for (let year = 2002; year <= 2024; year++) {
      yearOptions.push(year);
    }
    setYears(yearOptions);
  }, []);

  const handleYearChange = (selectedYear) => {
    dispatch(setSelectedYear(selectedYear));
  
    if (!selectedCategory) {
      dispatch(showAlert("Kategori seçilmedi!"));
      return;
    }
  
    const contentParams = {
      category: selectedCategory,
      year: selectedYear,
    };
  
    if (selectedCity !== "sehir-sec") {
      contentParams.sehir = selectedCity;
    }
  
    dispatch(fetchContentByCategoryAndYear(contentParams));
  };
  

  // console.log("yıllar => ", selectedYear);


  return (
    <div className="select">
      <h3>Yıllar</h3>

      <label className="select-label" htmlFor="slct">
        Yıl seç
      </label>

      <select
        className="yillar"
        required
        value={selectedYear}
        onChange={(e) => handleYearChange(e.target.value)}
      >
        <option value="yil-sec" disabled>
          Yıl seç
        </option>
        <option value="all-years">Tüm yıllar</option>

        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <div className="select-arrow-down">
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Years;
