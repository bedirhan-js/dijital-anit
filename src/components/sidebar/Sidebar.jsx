import "./sidebar.css";
import Years from "../yıllar/Years";
import useToggleSidebar from "../../hooks/useToggleSidebar";
import { motion, AnimatePresence } from "framer-motion";
import Categories from "../categories/Categories";
import Search from "../search/Search";
import Sehirler from "../sehirler/Sehirler";
const Sidebar = ({ onCategoryClick, selectedCategory }) => {
  const { isSidebarOpen } = useToggleSidebar();

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <button className="sidebar-off">
              M + L tuşlarına basarak sidebarı kapat/aç
            </button>
            <Search selectedCategory={selectedCategory} />
            <Categories
              onCategoryClick={onCategoryClick}
              selectedCategory={selectedCategory}
            />
            <Years selectedCategory={selectedCategory} />
            <Sehirler selectedCategory={selectedCategory} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
