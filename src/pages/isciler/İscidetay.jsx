import { useParams } from "react-router-dom";
import "./isci-detay.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../../components/slider/page";
import { fetchContentDetail } from "../../app/slices/contentSlice";

const İscidetay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Detay verisini Redux store'dan çekme
  const detail = useSelector((state) => state.content.details["isciler"]); // işçi sayfası
  const detailStatus = useSelector((state) => state.content.detailStatus);

  useEffect(() => {
    // Detay verisini getirme
    dispatch(fetchContentDetail({ id, category: "isciler" }));
  }, [dispatch, id]);

  document.title = detail?.baslik;

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
    isci_adi_soyadi_json: { ad, soyad, dogum_tarihi, olum_tarihi },
    olay_yeri: { is_yeri_adi, is_yeri_turu, sokak, mahalle, ilce, sehir },
    olum_nedeni,
    detaylar,
    haberler_json,
  } = detail;

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
              <p className="dateInfo">{tarih}</p>
            </div>

            <div className="border">
              <h2>İşçinin Adı ve Soyadı</h2>
              <p className="dateInfo">
                <b>Ad: </b>
                {ad}
              </p>
              <p className="dateInfo">
                <b>Soyad: </b>
                {soyad}
              </p>
              <p className="dateInfo">
                <b>Doğum tarihi: </b>
                {dogum_tarihi}
              </p>
              <p className="dateInfo">
                <b>Ölüm tarihi: </b>
                {olum_tarihi}
              </p>
            </div>

            <div className="border">
              <h2>İş yeri adresi</h2>
              <div>
                <p className="dateInfo">
                  <b>İş Yeri Adı:</b> {is_yeri_adi}
                </p>
                <p className="dateInfo">
                  <b>İş Yeri Türü:</b> {is_yeri_turu}
                </p>
                <p className="dateInfo">
                  <b>Şehir:</b> {sehir}
                </p>
                <p className="dateInfo">
                  <b>İlçe:</b> {ilce}
                </p>
                <p className="dateInfo">
                  <b>Semt/Mahalle:</b> {mahalle}
                </p>
                <p className="dateInfo">
                  <b>Sokak:</b> {sokak}
                </p>
              </div>
            </div>

            <div className="border">
              <h2>Ölüm nedeni</h2>
              <p className="event-details">{olum_nedeni} </p>
            </div>

            <div className="border">
              <h2>Olayın Detayları</h2>
              <p className="event-details">{detaylar} </p>
            </div>

            <div className="border">
              <h2>İlgili Haber ve Medya Bağlantıları</h2>
              <ol className="haber-baglantilari">
                {haberler_json.map((item, index) => (
                  <li key={index}>
                    <a href={item.haber_baglantisi}>{item.haber_kaynagi}</a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <div className="awarenessInfo">
                <blockquote>
                  <p>
                    <q>Önce işci güvenliği</q>
                  </p>
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

export default İscidetay;
