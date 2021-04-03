/*
export function someAction (context) {
}
*/

export const addJournal = (context, journalData) => {
  context.commit("addJournal", journalData);
};
