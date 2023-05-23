export default {
  namespaced: true,
  state: {
    searchHistory: [],
    materialHistory: []
  },
  mutations: {
    addToSearchHistory(state, payload) {
      state.searchHistory.unshift(payload);
    },
    addToMaterialHistory(state, payload) {
      state.materialHistory.unshift(payload);
    },
    removeSearchHistoryAt(state, payload) {
      const temp = [...state.searchHistory];
      state.searchHistory.splice(payload, 1);
    },
    resetSearchHistory(state) {
      state.searchHistory = [];
    },
    resetMaterialHistory(state) {
      state.materialHistory = [];
    }
  }
};
