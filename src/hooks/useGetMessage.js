import { useSelector } from "react-redux";
import { selectSelectedYear } from "../app/slices/selectedYearSlice";

export const getMessage = (list) => {
  const selectedYear = useSelector(selectSelectedYear);

  let category = "";

  const { kategori, yil, search, message } = list.list[0];

  if (list?.list[0]) {
    if (kategori === "kopekler") {
      category = "Köpekler";
    } else if (kategori === "isciler") {
      category = "İşçi cinayetleri";
    } else if (kategori === "yolsuzluklar") {
      category = "Yolsuzluklar";
    } else if (kategori === "intihar") {
      category = "İntihar";
    }
  }

  if (search) {
    return `${category} kategorisine ait "${search}" aramasında  veri bulunamadı farklı bir arama yapın`;
  }

  if (yil) {
    return `${category} kategorisine ait ${yil} yılında veri bulunamadı farklı bir yıl seçin`;
  }

  if (message) {
    if (selectedYear !== "yil-sec" && selectedYear !== "all-years") {
      return `${message} iliyle ilgili ${category.toLowerCase()} kategorisine ait ${selectedYear} yılında veri bulunamadı.`;
    }
    return `${message} iliyle ilgili ${category.toLowerCase()} kategorisine ait veri bulunamadı.`;
  }
};
