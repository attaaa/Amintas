const registerAccount = (state, inputData) => {
  state.account = { ...inputData };
  state.isLoggedIn = true;
};

const deleteAccount = state => {
  state.account = {};
};

const loginAccount = (state, value) => {
  state.isLoggedIn = value;
};

export { registerAccount, deleteAccount, loginAccount };
