import { motion } from "framer-motion";
import Cart from "../cart/Cart";
import { WVList } from "virtua";
import { getMessage } from "../../hooks/useGetMessage";
import { showAlert } from "../../app/slices/alertSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Carts = ({ list }) => {
  const message = getMessage(list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list.list.some((item) => item.yil || item.search || item.message)) {
      dispatch(showAlert(message));
    }
  }, [dispatch, list, message]);

  if (list.list.some((item) => item.yil || item.search || item.message)) {
    return null;
  }

  return (
    <WVList>
      {list.list.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 * 0.1 }}
        >
          <Cart item={item} />
        </motion.div>
      ))}
    </WVList>
  );
};

export default Carts;
