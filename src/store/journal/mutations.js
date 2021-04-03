/*
export function someMutation (state) {
}
*/
let testData = {
  id: 2,
  created_at: "31-10-2020",
  mood: "a",
  emotions: ["marah", "malu", "putus asa"],
  story: {
    title: "ini judul cerita",
    detail: "ini detail cerita"
  },
  identification: "ini identifikasi pikiran",
  distortions: ["all-or-none thinking", "mind reading"],
  challenge: "",
  alternative: ""
};

export const addJournal = state => {
  state.journalDataList.push(testData);
};
