import { useParams } from "react-router-dom";
import "./yolsuzluk.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../../components/slider/page";
import { fetchContentDetail } from "../../app/slices/contentSlice";

const Yolsuzlukdetay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Detay verisini Redux store'dan çekme
  const detail = useSelector((state) => state.content.details["yolsuzluklar"]); // yolsuzluk sayfası
  const detailStatus = useSelector((state) => state.content.detailStatus);

  useEffect(() => {
    // Detay verisini getirme
    dispatch(fetchContentDetail({ id, category: "yolsuzluklar" }));
  }, [dispatch, id]);

  if (detailStatus === "loading") {
    return <div></div>;
  }

  if (detailStatus === "failed") {
    return <div>Error: Detay verisi yüklenemedi.</div>;
  }

  if (!detail) {
    return <div></div>;
  }

  const {
    resimler,
    baslik,
    tarih,
    yolsuzluga_karisanlar,
    yolsuzluk_turu,
    olay_yeri: { sehir, ilce, mahalle, sokak },
    detaylar,
    deliller,
    medya_baglantilari,
    hukuki_surec,
    kamuoyu_tepkisi,
    guncel_durum,
    etkilenen_taraflar,
  } = detail || {};
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="detail-page"
      >
        <div className="detail-content">
          <div className="image-section">
            {/* <img src={baseImg + resim} alt="Detail Image" /> */}
            <Slider items={resimler} />
          </div>

          <div className="info-section">
            <h1 className="baslik">{baslik} </h1>

            <div className="border">
              <h2>Olayın Tarihi </h2>
              <p className="event-details">{tarih}</p>
            </div>

            <div className="border">
              <h2>Olayın Yeri</h2>
              <p className="event-details">Şehir: {sehir} </p>
              <p className="event-details">İlçe: {ilce} </p>
              <p className="event-details">Mahalle: {mahalle} </p>
              <p className="event-details">Sokak: {sokak} </p>
            </div>

            <div className="border">
              <h2>Yolsuzluğa Karışanlar</h2>
              <ol className="karisanlar">
                {yolsuzluga_karisanlar.map((item, index) => (
                  <li key={index}>
                    <span>Kişinin pozisyonu:</span> {item.kisi_pozisyonu}
                    <br />
                    <span>Kişi adı soyadı:</span> {item.kisi_adi_soyadi}
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>Yolsuzluğun Türü</h2>
              <p className="event-details">{yolsuzluk_turu} </p>
            </div>

            <div className="border">
              <h2>Olayın Açıklaması</h2>
              <p className="event-details">{detaylar} </p>
            </div>

            <div className="border">
              <h2>Deliller ve Kanıtlar</h2>
              <ol className="deliller">
                {deliller.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>İlgili Haber ve Medya Bağlantıları</h2>

              <ol className="haber-baglantilari">
                {medya_baglantilari.map((item, index) => (
                  <li key={index}>
                    <a href={item.haber_baglantisi}>{item.haber_kaynagi}</a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>Hukuki Süreç ve Gelişmeler</h2>
              <p className="event-details">{hukuki_surec} </p>
            </div>

            <div className="border">
              <h2>Kamuoyu Tepkisi</h2>

              <ol className="kamuoyu-tepkisi">
                {kamuoyu_tepkisi.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>Güncel Durum</h2>
              <p className="event-details">{guncel_durum} </p>
            </div>

            <div className="border">
              <h2>Etkilenen Taraflar</h2>

              <ol className="etkilenenler">
                {etkilenen_taraflar.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <div className="awareness-info">
                <blockquote>
                  <p>
                    <q>Güç yozlaştırır mutlak güç mutlaka yozlaştırır</q>
                  </p>
                  <cite>- Lord Acton</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Yolsuzlukdetay;
