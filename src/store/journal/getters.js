/*
export function someGetter (state) {
}
*/

export const getJournalData = state => journalId => {
  return state.journalDataList.filter(item => item.id == journalId);
};
