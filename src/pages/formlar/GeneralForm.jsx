import React from "react";
import Form from "../../components/form/Form";
import { useLocation } from "react-router-dom";
import KopekConfig from "./KopekConfig";
import SuicideConfig from "./SuicideConfig";
// import YolsuzlukConfig from "./YolsuzlukConfig";
import WorkerConfig from "./WorkerConfig";

const GeneralForm = () => {
  const { state } = useLocation();

  const determineConfig = (category) => {
    switch (category) {
      case "isciler": 
        document.title = "İşci cinayetleri kategorisi form";
        return WorkerConfig;
      case "kopekler": 
        document.title =
          "Başıboş köpekler tarafından saldırıya uğrayan insanlar kategorisi form";
        return KopekConfig;
      case "intihar": 
        document.title = "İntihar eden insanlar kategorisi form";
        return SuicideConfig;
      default:
        return SuicideConfig;
    }
  };

  const selectedConfig = determineConfig(state.category);

  return <Form formConfig={selectedConfig} />;
};

export default GeneralForm;
