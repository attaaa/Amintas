export default {
  namespaced: true,
  state: {
    toast: {
      show: false,
      text: "",
      class: ""
    }
  },
  mutations: {
    setToastShow(state, value) {
      state.toast.show = value;
    },
    setToastText(state, value) {
      state.toast.text = value;
    },
    setToastClass(state, value) {
      state.toast.class = value;
    }
  },
  actions: {
    showToast(context, text) {
      if (context.state.toast.show) return;

      context.commit("setToastClass", "");
      context.commit("setToastText", text);
      context.commit("setToastShow", true);

      const timeOut = setTimeout(() => {
        context.commit("setToastShow", false);
      }, 3000);
      // clearTimeout(timeOut);
    },
    showDangerToast(context, text) {
      if (context.state.toast.show) return;

      context.commit("setToastClass", `toast-notification--danger`);
      context.commit("setToastText", text);
      context.commit("setToastShow", true);

      const timeOut = setTimeout(() => {
        context.commit("setToastShow", false);
      }, 3000);
    }
  }
};
