/*
export function someMutation (state) {
}
*/

import { EMPTY_STRATEGI } from "src/data/strategi/StrategiModel";

const updateInputStrategi = (state, strategiInputData) => {
  state.strategiInputData = strategiInputData;
};

const clearInputStrategi = state => {
  state.strategiInputData = { ...EMPTY_STRATEGI };
};

// const delJournal = (state, journalId) => {
//   const currJournalDataList = [...state.journalDataList];
//   state.journalDataList = currJournalDataList.filter(
//     item => item.id != journalId
//   );
// };

// const updateJournal = (state, journalData) => {
//   const idx = state.journalDataList.findIndex(
//     item => item.id == journalData.id
//   );
//   state.journalDataList[idx] = journalData;
// };

export { updateInputStrategi, clearInputStrategi };
