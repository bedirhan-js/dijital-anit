const YolsuzlukConfig = {
  initialState: {
    baslik: "",
    olayin_tarihi: "",
    olay_yeri: "",
    yolsuzluga_karisanlar: "",
    yolsuzluk_turu: "",
    detaylar: "",
    deliller: "",
    medya_baglantilari: "",
    hukuki_surec: "",
    kamuoyu_tepkisi: "",
    guncel_durum: "",
    etkilenen_taraflar: "",
  },
  inputConfig: [
    { label: "Başlık", name: "baslik" },
    { label: "Olayın Tarihi", name: "olayin_tarihi" },
    { label: "Olay Yeri", name: "olay_yeri" },
    { label: "Yolsuzluğa Karışanlar", name: "yolsuzluga_karisanlar" },
    { label: "Yolsuzluğun Türü", name: "yolsuzluk_turu" },
    { label: "Olayın Açıklaması", name: "detaylar" },
    { label: "Deliller ve Kanıtlar", name: "deliller" },
    { label: "İlgili Haber ve Medya Bağlantıları", name: "medya_baglantilari" },
    { label: "Hukuki Süreç ve Gelişmeler", name: "hukuki_surec" },
    { label: "Kamuoyu Tepkisi", name: "kamuoyu_tepkisi" },
    { label: "Güncel Durum", name: "guncel_durum" },
    { label: "Etkilenen Taraflar", name: "etkilenen_taraflar" },
  ],
  emailSubject: "Yolsuzluk kategorisi için veri",
  categoryTitle: "Yolsuzluk kategorisi form",
};

export default YolsuzlukConfig;
