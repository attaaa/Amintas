export default {
  namespaced: true,
  state: {
    toast: {
      show: false,
      text: ""
    }
  },
  mutations: {
    setToastShow(state, value) {
      state.toast.show = value;
    },
    setToastText(state, value) {
      state.toast.text = value;
    }
  },
  actions: {
    showToast(context, text) {
      if (context.state.toast.show) return;

      context.commit("setToastText", text);
      context.commit("setToastShow", true);

      const timeOut = setTimeout(() => {
        context.commit("setToastShow", false);
      }, 3000);
      // clearTimeout(timeOut);
    }
  }
};
