import { useEffect, useState } from "react";
import axios from "axios";

const Deneme = () => {
  const [corruptionData, setCorruptionData] = useState([]);

  useEffect(() => {
    // PHP API'nin bulunduğu URL
    const apiUrl = "http://backend.test/indexxxxxx.php"; // PHP dosyanızın doğru URL'sini buraya ekleyin

    // Axios ile veriyi çek
    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setCorruptionData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleWorkerClick = (workerId) => {
    axios
      .get(`http://backend.test/detay.php?id=${workerId}`)
      .then((response) => {
        console.log("detay", response.data);
      })
      .catch((error) => {
        console.error("İstek hatası:", error.message);
      });
  };

  return (
    <div>
      <h1>Corruption Data List</h1>
      <ul>
        {corruptionData.map((corruption) => (
          <li key={corruption.id}>
            Worker: {corruption.worker_name} {corruption.worker_surname} -{" "}
            Workplace: {corruption.workplace_name} - Type:{" "}
            {corruption.workplace_type}
            <button onClick={() => handleWorkerClick(corruption.id)}>
              {corruption.id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deneme;
