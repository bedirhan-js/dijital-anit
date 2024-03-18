import { Route, Routes } from "react-router-dom";
import İscidetay from "./pages/isciler/İscidetay";
import Yolsuzlukdetay from "./pages/yolsuzluklar/Yolsuzlukdetay";
import Kopekler from "./pages/kopekler/Kopekler";
import Deneme2 from "./pages/deneme/Deneme2";
import Suicide from "./pages/intihar/Suicide";
import Home from "./pages/home/Home";
import Contact from "./pages/iletisim/Contact";
import GeneralForm from "./pages/formlar/GeneralForm";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/isciler/:id" element={<İscidetay />} />
      <Route path="/yolsuzluklar/:id" element={<Yolsuzlukdetay />} />
      <Route path="/kopekler/:id" element={<Kopekler />} />
      <Route path="/intihar/:id" element={<Suicide />} />
      <Route path="/deneme" element={<Deneme2 />} />
      <Route path="/iletisim" element={<Contact />} />
      <Route path="/form" element={<GeneralForm />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
