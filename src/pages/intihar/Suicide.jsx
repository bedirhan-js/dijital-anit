import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "../../components/slider/page";
import { fetchContentDetail } from "../../app/slices/contentSlice";

const Suicide = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Detay verisini Redux store'dan çekme
  const detail = useSelector((state) => state.content.details["intihar"]); // yolsuzluk sayfası
  const detailStatus = useSelector((state) => state.content.detailStatus);

  useEffect(() => {
    // Detay verisini getirme
    dispatch(fetchContentDetail({ id, category: "intihar" }));
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
            <Slider items={detail?.resimler} />
          </div>

          <div className="info-section">
            <h1 className="baslik">{detail?.baslik} </h1>

            <div className="border">
              <h2>Olayın Tarihi </h2>
              <p className="event-details">{detail?.tarih}</p>
            </div>

            <div className="border">
              <h2>Olayın Yeri</h2>
              <p className="event-details">Şehir: {detail?.olay_yeri?.sehir}</p>
              <p className="event-details">İlçe: {detail?.olay_yeri?.ilce} </p>
              <p className="event-details">
                Mahalle: {detail?.olay_yeri?.mahalle}
              </p>
              <p className="event-details">Sokak: {detail?.olay_yeri?.sokak}</p>
            </div>

            <div className="border">
              <h2>Kişi bilgisi</h2>
              <p className="dateInfo">
                <b>Ad: </b>
                {detail?.kisi_bilgisi_json?.ad}
              </p>
              <p className="dateInfo">
                <b>Soyad: </b>
                {detail?.kisi_bilgisi_json?.soyad}
              </p>
              <p className="dateInfo">
                <b>Doğum tarihi: </b>
                {detail?.kisi_bilgisi_json?.dogum_tarihi}
              </p>
              <p className="dateInfo">
                <b>Ölüm tarihi: </b>
                {detail?.kisi_bilgisi_json?.olum_tarihi}
              </p>
            </div>

            <div className="border">
              <h2>İntihar sebepi</h2>
              <p className="event-details">{detail?.intihar_sebepi} </p>
            </div>

            <div className="border">
              <h2>Detaylar</h2>
              <p className="event-details">{detail?.detaylar} </p>
            </div>

            <div className="border">
              <h2>Ailenin görüşü ve açıklamaları</h2>
              <p className="event-details">{detail?.aile_gorus} </p>
            </div>

            <div className="border">
              <h2>İlgili Haber ve Medya Bağlantıları</h2>

              <ol className="haber-baglantilari">
                {detail?.medya_baglantilari?.map((item, index) => (
                  <li key={index}>
                    <a href={item.haber_baglantisi}>{item.haber_kaynagi}</a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>Hukuki Süreç ve Gelişmeler</h2>
              <p className="event-details">{detail?.hukuki_surec} </p>
            </div>

            <div className="border">
              <h2>Kamuoyu Tepkisi</h2>

              <ol className="kamuoyu-tepkisi">
                {detail?.kamuoyu_tepkisi?.map((item, index) => (
                  <li key={index}>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="border">
              <h2>Güncel Durum</h2>
              <p className="event-details">{detail?.guncel_durum} </p>
            </div>

            <div className="border">
              <div className="awareness-info">
                <blockquote>
                  <p>
                    <q>
                      İntiharların çoğunda gerçek olan şu ki, Aslında tetiği
                      çekmeden çok önce zaten intihar etmiş oluyorlar
                    </q>
                  </p>
                  <cite>- Charles Bukowski</cite>
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

export default Suicide;
