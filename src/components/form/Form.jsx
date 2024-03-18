import React, { useState } from "react";
import { motion } from "framer-motion";
import useSubmitForm from "../../hooks/useSubmitForm";
import Alert from "../../components/alert/Alert";
import "./form.css";

const Form = ({ formConfig }) => {
  const [formData, setFormData] = useState(formConfig.initialState);

  const { handleChange, handleSubmit } = useSubmitForm(
    generateEmailContent(),
    formConfig.emailSubject,
    setFormData
  );

  function generateEmailContent() {
    return formConfig.inputConfig
      .map(
        (config) =>
          `- - - -  - - - -  - - - -  - - - -\n${config.label}:\n${
            formData[config.name]
          }`
      )
      .join("\n");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="app-container"
    >
      <div className="form-container">
        <h2 className="form-title">{formConfig.categoryTitle}</h2>
        <form onSubmit={handleSubmit}>
          {formConfig.inputConfig.map((config) => (
            <div key={config.name} className="form-group">
              <label htmlFor={config.name}>{config.label}:</label>
              <input
                className="form-input"
                type="text"
                id={config.name}
                name={config.name}
                value={formData[config.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button className="form-button" type="submit">
            Gönder
          </button>
        </form>
      </div>
      <Alert />
    </motion.div>
  );
};

export default Form;
