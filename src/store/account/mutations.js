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

const setHomeVisited = state => {
  state.homeVisited = true;
};

const setStrategiInputActivitiesVisited = state => {
  state.strategiInputActivitiesVisited = true;
};

const setStrategiVisited = state => {
  state.strategiVisited = true;
};

const setDistortionVisited = state => {
  state.distortionVisited = true;
};

export {
  deleteAccount,
  loginAccount,
  registerAccount,
  setDistortionVisited,
  setHomeVisited,
  setStrategiInputActivitiesVisited,
  setStrategiVisited
};
