import { motion } from "framer-motion";
import Cart from "../cart/Cart";

const Carts = ({ list }) => {
  if (list.list.some((item) => item.message)) {
    return (
      <p className="veri-bulunamadi">
        {list?.list[0]?.kategori} kategorisine ait {list?.list[0]?.yil} yılında
        veri bulunamadı
      </p>
    );
  }

  return (
    <>
      {list.list.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: item.id * 0.1 }}
        >
          <Cart item={item} />
        </motion.div>
      ))}
    </>
  );
};

export default Carts;
