const strategi = {
  category: "",
  story_penyebab: "",
  story_tujuan: "",
  activities: [],
  fear_level: []
};

const strategi_sample = {
  category: "binatang",
  story_penyebab: "ini sample story penyebab",
  story_tujuan: "ini sample story tujuan",
  activities: ["Memperhatikan kucing oren", "Kucing sunda"],
  fear_level: [1, 7]
};

const EMPTY_STRATEGI = {
  category: null,
  story_penyebab: {
    title: null,
    detail: null
  },
  story_tujuan: null,
  activities: [],
  fear_level: []
};

const TRIGGER_IMG = [
  "/img/trigger_option_a.svg",
  "/img/trigger_option_b.svg",
  "/img/trigger_option_c.svg",
  "/img/trigger_option_d.svg"
];

const TRIGGER_CATEGORY = [
  {
    img: "/img/trigger_option_a.svg",
    title: "Tanggung Jawab"
  },
  {
    img: "/img/trigger_option_b.svg",
    title: "Situasi"
  },
  {
    img: "/img/trigger_option_c.svg",
    title: "Binatang"
  },
  {
    img: "/img/trigger_option_d.svg",
    title: "Orang Lain"
  }
];

export { EMPTY_STRATEGI, TRIGGER_IMG, TRIGGER_CATEGORY };
