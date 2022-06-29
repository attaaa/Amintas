/*
export function someAction (context) {
}
*/

const updateInputStrategi = (context, strategiInputData) => {
  context.commit("updateInputStrategi", strategiInputData);
};

const clearInputStrategi = context => {
  context.commit("clearInputStrategi");
};

// const delJournal = (context, journalId) => {
//   context.commit("delJournal", journalId);
// };

// const updateJournal = (context, journalData) => {
//   context.commit("updateJournal", journalData);
// };

export { updateInputStrategi };
