const KopekConfig = {
  initialState: {
    baslik: "",
    olayin_tarihi: "",
    olay_yeri: "",
    belediye_aciklama: "",
    detaylar: "",
    medya_baglantilari: "",
    hukuki_surec: "",
    kamuoyu_tepkisi: "",
    guncel_durum: "",
  },
  inputConfig: [
    { label: "Başlık", name: "baslik" },
    { label: "Olayın Tarihi", name: "olayin_tarihi" },
    { label: "Olay Yeri", name: "olay_yeri" },
    { label: "Belediye Açıklama", name: "belediye_aciklama" },
    { label: "Detaylar", name: "detaylar" },
    { label: "Medya Bağlantıları", name: "medya_baglantilari" },
    { label: "Hukuki Süreç", name: "hukuki_surec" },
    { label: "Kamuoyu Tepkisi", name: "kamuoyu_tepkisi" },
    { label: "Güncel Durum", name: "guncel_durum" },
  ],
  emailSubject:
    "Başıboş köpekler tarafından saldırıya uğrayan insanlar kategorisi için veri",
  categoryTitle:
    "Başıboş köpekler tarafından saldırıya uğrayan insanlar kategorisi için veri",
};

export default KopekConfig;
