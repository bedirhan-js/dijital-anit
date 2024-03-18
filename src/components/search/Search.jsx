import "./search.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { fetchSearchContent } from "../../app/slices/contentSlice";
import { showAlert } from "../../app/slices/alertSlice";
import { setSearchValue } from "../../app/slices/searchSlice";
import { useEffect, useState } from "react";

const Search = ({ selectedCategory }) => {

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const searchPost = () => {
    if (!selectedCategory) {
      dispatch(showAlert("Kategori seçmeden arama yapamazsınız!"));
      return;
    }

    if (inputValue.length < 3) {
      dispatch(showAlert("Arama terimi en az 3 karakter içermelidir."));
      return;
    }

    dispatch(
      fetchSearchContent({
        category: selectedCategory,
        search: inputValue,
      })
    );

    dispatch(setSearchValue(inputValue));
  };

  useEffect(() => {
    setInputValue("");
  }, [selectedCategory]);

  return (
    <div className="search-container">
      <input
        type="text"
        id="searchInput"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder=""
      />
      <label className="search-label" htmlFor="searchInput">
        Ara
      </label>
      <FaMagnifyingGlass onClick={searchPost} />
    </div>
  );
};

export default Search;
