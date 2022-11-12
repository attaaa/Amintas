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

const activateStrategi = context => {
  context.commit("activateStrategi");
};

const clearActiveStrategi = context => {
  context.commit("clearActiveStrategi");
};

// const delJournal = (context, journalId) => {
//   context.commit("delJournal", journalId);
// };

// const updateJournal = (context, journalData) => {
//   context.commit("updateJournal", journalData);
// };

export {
  updateInputStrategi,
  activateStrategi,
  clearActiveStrategi,
  clearInputStrategi
};
