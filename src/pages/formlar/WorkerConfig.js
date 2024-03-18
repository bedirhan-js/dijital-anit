const WorkerConfig = {
  initialState: {
    baslik: "",
    olayin_tarihi: "",
    isci_adi_soyadi_json: "",
    is_yeri_adresi_json: "",
    olum_nedeni: "",
    detaylar: "",
    haberler_json: "",
  },
  inputConfig: [
    { label: "Başlık", name: "baslik" },
    { label: "Olayın Tarihi", name: "olayin_tarihi" },
    { label: "İşçinin Adı ve Soyadı", name: "isci_adi_soyadi_json" },
    { label: "İş yeri adresi", name: "is_yeri_adresi_json" },
    { label: "Ölüm nedeni", name: "olum_nedeni" },
    { label: "Olayın Detayları", name: "detaylar" },
    { label: "İlgili Haber ve Medya Bağlantıları", name: "haberler_json" },
  ],
  emailSubject: "İşci cinayetleri kategorisi için veri",
  categoryTitle: "İşci cinayetleri kategorisi form",
};

export default WorkerConfig;
