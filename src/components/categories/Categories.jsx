import { useDispatch } from "react-redux";
import categoriesData from "../../assets/data/categories.json"; // JSON dosyasını import et
import "./categories.css";
import { setSelectedYear } from "../../app/slices/selectedYearSlice";
import { setSelectedCity } from "../../app/slices/citySlice";
import { setSearchValue } from "../../app/slices/searchSlice";
const Categories = ({ onCategoryClick, selectedCategory }) => {

  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    onCategoryClick(category);
    dispatch(setSelectedYear("yil-sec"));
    dispatch(setSelectedCity("sehir-sec"));
    dispatch(setSearchValue(""));
  };

  
  return (
    <div className="categories">
      <h3>Kategoriler</h3>
      <ul>
        {categoriesData.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration:
                selectedCategory === item.category ? "underline" : "",
            }}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
