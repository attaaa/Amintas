/*
export function someAction (context) {
}
*/

const addJournal = (context, journalData) => {
  context.commit("addJournal", journalData);
};

const delJournal = (context, journalId) => {
  context.commit("delJournal", journalId);
};

const updateJournal = (context, journalData) => {
  context.commit("updateJournal", journalData);
};

export { addJournal, delJournal, updateJournal };
