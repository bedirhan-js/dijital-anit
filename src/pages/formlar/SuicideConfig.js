const SuicideConfig = {
  initialState: {
    baslik: "",
    tarih: "",
    olay_yeri: "",
    kisi_bilgisi: "",
    intihar_sebepi: "",
    detaylar: "",
    aile_gorus: "",
    hukuki_surec: "",
    medya_baglantilari: "",
    kamuoyu_tepkisi: "",
    guncel_durum: "",
  },
  inputConfig: [
    { label: "BAŞLIK", name: "baslik" },
    { label: "OLAYIN TARİHİ", name: "tarih" },
    { label: "OLAY YERİ", name: "olay_yeri" },
    { label: "KİŞİ BİLGİSİ", name: "kisi_bilgisi" },
    { label: "İNTİHAR SEBEPİ", name: "intihar_sebepi" },
    { label: "DETAYLAR", name: "detaylar" },
    { label: "AİLE GÖRÜŞÜ", name: "aile_gorus" },
    { label: "HUKUKİ SÜREÇ", name: "hukuki_surec" },
    { label: "İLGİLİ HABER VE MEDYA BAĞLANTILARI", name: "medya_baglantilari" },
    { label: "KAMUOYU TEPKİSİ", name: "kamuoyu_tepkisi" },
    { label: "GÜNCEL DURUM", name: "guncel_durum" },
  ],
  emailSubject: "İntihar eden insanlar için veri",
  categoryTitle: "İntihar eden insanlar kategorisi formu",
};

export default SuicideConfig;
