import "../../App.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchContentByCategory } from "../../app/slices/contentSlice";
import { motion } from "framer-motion";
// import CartsOld from "../carts/CartsOld";
import Carts from "../../components/carts/Carts";
import Loading from "../../components/loading/Loading";
import ScrollButton from "../../components/scroll-button/ScrollButton";
import Alert from "../../components/alert/Alert";
import Footer from "../../components/footer/Footer";

const Home = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.content);

  const handleCategoryClick = (category) => {
    dispatch(fetchContentByCategory(category));
  };

  document.title = "Dijital anıt ana sayfa";


  const searchValue = useSelector((state) => state.search.value);

  return (
    <>
      <Header list={list} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container"
      >
        <Sidebar
          selectedCategory={list?.list[0]?.kategori}
          onCategoryClick={handleCategoryClick}
        />
        <div className="cart-container">
          {list.listStatus === "loading" && <Loading />}

          {list.listStatus === "failed" && <p>Hata: {list.error}</p>}

          {searchValue !== "" && !list.list.some((item) => item.search) ? (
            <h1 className="search-results">"{searchValue}" araması sonuçları;</h1>
          ) : null}

          {/* {list.listStatus === "succeeded" && <CartsOld list={list} />} */}

          {list.listStatus === "succeeded" && <Carts list={list} />}
        </div>
        <Alert />
        <ScrollButton />
       
      </motion.div>
      <Footer/>
    </>
  );
};

export default Home;
