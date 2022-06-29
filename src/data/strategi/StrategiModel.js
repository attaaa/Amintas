const strategi = {
  category: "",
  story_penyebab: "",
  story_tujuan: "",
  activites: [],
  fear_level: []
};

const strategi_sample = {
  category: "binatang",
  story_penyebab: "ini sample story penyebab",
  story_tujuan: "ini sample story tujuan",
  activites: ["Memperhatikan kucing oren", "Kucing sunda"],
  fear_level: [1, 7]
};

const EMPTY_STRATEGI = {
  category: null,
  story_penyebab: {
    title: null,
    detail: null
  },
  story_tujuan: null,
  activites: [],
  fear_level: []
};

export { EMPTY_STRATEGI };
