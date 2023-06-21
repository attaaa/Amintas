/*
export function someMutation (state) {
}
*/

import { EMPTY_STRATEGI } from "src/data/strategi/StrategiModel";
import { generateTimeStamp } from "src/helper/generateDate";

const updateInputStrategi = (state, strategiInputData) => {
  state.strategiInputData = { ...strategiInputData };
};

const clearInputStrategi = state => {
  state.strategiInputData = { ...EMPTY_STRATEGI };
};

const activateStrategi = state => {
  state.strategiActive = {
    ...JSON.parse(JSON.stringify(state.strategiInputData)),
    date: generateTimeStamp()
  };
};

const clearActiveStrategi = state => {
  state.strategiActive = null;
};

const setActivityStatus = (state, { activityIndex, status }) => {
  state.strategiActive.activities[activityIndex].status = status;
};

const setActivityChecked = (state, { activityIndex, checked }) => {
  state.strategiActive.activities[activityIndex].checked = checked;
};

const sortActivity = state => {
  state.strategiActive.activities.sort((a, b) => b.level - a.level);
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

export {
  activateStrategi,
  clearActiveStrategi,
  clearInputStrategi,
  setActivityChecked,
  setActivityStatus,
  sortActivity,
  updateInputStrategi
};
