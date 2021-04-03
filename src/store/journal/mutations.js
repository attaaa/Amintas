/*
export function someMutation (state) {
}
*/

export const addJournal = (state, journalData) => {
  state.journalDataList.push(journalData);
};
