import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import {
  selectSelectedYear,
  setSelectedYear,
} from "../../app/slices/selectedYearSlice";
import { selectCity } from "../../app/slices/citySlice";

const Header = ({ list }) => {
  // const number = 2345678;

  const dispatch = useDispatch();

  const selectedYear = useSelector(selectSelectedYear);

  const selectedCity = useSelector(selectCity);

  let digits = list.list
    ? list.list.length.toString().split("").map(Number)
    : [];

  let message = "";

  if (list.list.some((item) => item.yil || item.search)) {
    digits = [];
    message = "";
  }

  const { kategori } = list?.list?.[0] || {};

  if (selectedYear === "all-years") {
    dispatch(setSelectedYear("all-years"));
  }


  if (selectedYear !== "yil-sec" && selectedYear !== "all-years") {
    // Seçilen yılın "yil-sec" veya "all-years" olmadığı durum
    if (selectedCity !== "sehir-sec") {
      // Seçilen şehrin "sehir-sec" olmadığı durum
      switch (kategori) {
        case "yolsuzluklar":
          message = `${selectedYear} yılında ${selectedCity.toLowerCase()} ilinde meydana gelen yolsuzluklar`;
          break;
  
        case "isciler":
          message = `${selectedYear} yılında ${selectedCity.toLowerCase()} ilinde meydana gelen işçi cinayetleri`;
          break;
  
        case "kopekler":
          message = `${selectedYear} yılında ${selectedCity.toLowerCase()} ilinde meydana gelen köpek saldırıları`;
          break;
  
        case "intihar":
          message = `${selectedYear} yılında ${selectedCity.toLowerCase()} ilinde meydana gelen intiharlar`;
          break;
  
        default:
          break;
      }
    } else {
      // Seçilen şehrin "sehir-sec" olduğu durum
      switch (kategori) {
        case "yolsuzluklar":
          message = `${selectedYear} yılında meydana gelen yolsuzluklar`;
          break;
  
        case "isciler":
          message = `${selectedYear} yılında meydana gelen işçi cinayetleri`;
          break;
  
        case "kopekler":
          message = `${selectedYear} yılında meydana gelen köpek saldırıları`;
          break;
  
        case "intihar":
          message = `${selectedYear} yılında meydana gelen intiharlar`;
          break;
  
        default:
          break;
      }
    }
  } else if (selectedCity !== "sehir-sec" && selectedYear !== "all-city") {
    // Seçilen yılın "yil-sec" veya "all-years" olduğu, ancak seçilen şehrin "sehir-sec" olmadığı durum
    switch (kategori) {
      case "yolsuzluklar":
        message = `${selectedCity} ilinde meydana gelen yolsuzluklar`;
        break;
  
      case "isciler":
        message = `${selectedCity} ilinde meydana gelen işçi cinayetleri`;
        break;
  
      case "kopekler":
        message = `${selectedCity} ilinde meydana gelen köpek saldırıları`;
        break;
  
      case "intihar":
        message = `${selectedCity} ilinde meydana gelen intiharlar`;
        break;
  
      default:
        break;
    }
  } else {
    // Seçilen yılın "yil-sec" veya "all-years" olduğu ve seçilen şehrin de "sehir-sec" olduğu durum
    switch (kategori) {
      case "yolsuzluklar":
        message = `Şimdiye kadar meydana gelen yolsuzlukların toplam sayısı`;
        break;
  
      case "isciler":
        message = `Şimdiye kadar meydana gelen işçi cinayetlerinin toplam sayısı`;
        break;
  
      case "kopekler":
        message = `Şimdiye kadar meydana gelen köpek saldırılarının toplam sayısı`;
        break;
  
      case "intihar":
        message = `Şimdiye kadar meydana gelen intiharların toplam sayısı`;
        break;
  
      default:
        break;
    }
  }
  
  return (
    <>
      <header>Toplumsal olaylarla alakalı dijital anıt</header>
      {list.list.length === 0 ? null : (
        <>
          <p className="sub-title">{message}</p>
          <div className="sayilar">
            {digits.map((digit, index) => (
              <img
                key={index}
                src={`src/assets/numbers/${digit}.png`}
                alt={digit}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
