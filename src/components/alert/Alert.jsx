import { useDispatch, useSelector } from "react-redux";
import "./alert.css";
import { ImExit } from "react-icons/im";
import { hideAlert, selectAlert } from "../../app/slices/alertSlice";
const Alert = () => {
  const dispatch = useDispatch();
  const { message, isOpen } = useSelector(selectAlert);

  const closeAlert = () => {
    document.querySelector(".popup-box").classList.add("closing");
    setTimeout(() => {
      dispatch(hideAlert());
    }, 500);
  };

  return (
    <>
      {isOpen === true && (
        <div className="popup">
          <div className="popup-box">
            <h1>Dijital Anıt</h1>
            <p>{message}</p>
            <span className="close-btn" onClick={closeAlert}>
              <ImExit />
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
