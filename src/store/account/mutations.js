const registerAccount = (state, inputData) => {
  state.account = { ...inputData };
};

const deleteAccount = state => {
  state.account = {};
};

const loginAccount = (state, value) => {
  state.isLoggedIn = value;
};

export { registerAccount, deleteAccount, loginAccount };
