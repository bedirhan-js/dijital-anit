import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../../components/slider/page";
import { fetchContentDetail } from "../../app/slices/contentSlice";

const Yolsuzlukdetay = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Detay verisini Redux store'dan çekme
  const detail = useSelector((state) => state.content.details["kopekler"]); // yolsuzluk sayfası
  const detailStatus = useSelector((state) => state.content.detailStatus);

  useEffect(() => {
    // Detay verisini getirme
    dispatch(fetchContentDetail({ id, category: "kopekler" }));
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
    belediye_aciklama,
    olay_yeri: { sehir, ilce, mahalle, sokak, belediye, belediye_partisi },
    detaylar,
    medya_baglantilari,
    hukuki_surec,
    kamuoyu_tepkisi,
    guncel_durum,
  } = detail;

console.log(detail);

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
              <p className="event-details">Belediye: {belediye} </p>
              <p className="event-details">
                Belediye Partisi: {belediye_partisi}{" "}
              </p>
            </div>

            <div className="border">
              <h2>Belediye açıklama</h2>
              <p className="event-details">{belediye_aciklama} </p>
            </div>

            <div className="border">
              <h2>Detaylar</h2>
              <p className="event-details">{detaylar} </p>
            </div>

            <div className="border">
              <h2>İlgili Haber ve Medya Bağlantıları</h2>

              <ol className="haber-baglantilari">
                {medya_baglantilari.map((item, index) => (
                  <li key={index}>
                    <Link to={item.haber_baglantisi} target="_blank">{item.haber_kaynagi}</Link>
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
      <br />
    </>
  );
};

export default Yolsuzlukdetay;
