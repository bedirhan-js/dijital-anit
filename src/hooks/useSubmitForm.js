import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../app/slices/alertSlice";

const useSubmitForm = (emailContent, emailSubject, setFormData) => {
  const dispatch = useDispatch();

  const alertState = useSelector((state) => state.alert);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      showAlert(
        "Bu formda resimler eklenmediğinden, resimleri doğrudan e-posta ekine ekleyerek gönderin."
      )
    );
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      if (alertState.isOpen === false) {
        const encodedEmailContent = encodeURIComponent(emailContent);
        const mailtoLink = `mailto:dijitalanit@gmail.com?subject=${emailSubject}&body=${encodedEmailContent}`;
        window.open(mailtoLink, "_blank");
        setIsSubmitted(false);
      }
    }
  }, [isSubmitted, emailContent, emailSubject, alertState]);

  return { handleChange, handleSubmit };
};

export default useSubmitForm;
