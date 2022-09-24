const registerAccount = (state, inputData) => {
  state.account = { ...inputData };
};

const deleteAccount = state => {
  state.account = {};
};

export { registerAccount, deleteAccount };
