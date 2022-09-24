const registerAccount = (context, inputData) => {
  context.commit("registerAccount", inputData);
};

const deleteAccount = context => {
  context.commit("deleteAccount");
};

export { registerAccount, deleteAccount };
