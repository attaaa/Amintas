export default {
  namespaced: true,
  state: {
    // STATUS ---
    statusSesi: {
      sesi1: false,
      sesi2: false,
      sesi3: false
    },
    statusMateri: {
      sesi1: [false, false, false],
      sesi2: [false, false, false],
      sesi3: [false, false, false]
    },
    statusLatihan: {
      sesi1: {
        latihan1: false,
        latihan1Form: false,
        latihan2: false,
        latihan2Form: false
      }
    }
    // END STATUS
  },
  mutations: {
    setStatusSesi(state, sesi) {
      const currStatusSesi = { ...state.statusSesi };
      state.statusSesi = { ...currStatusSesi, [sesi]: true };
    },
    setStatusMateri(state, { sesi, materiIdx, value }) {
      const currStatusMateri = { ...state.statusMateri };
      currStatusMateri[sesi][materiIdx] = value;
      state.statusMateri = { ...currStatusMateri };
    },
    setStatusLatihan(state, { sesi, latihanName, value }) {
      const currStatusLatihan = { ...state.statusLatihan };
      currStatusLatihan[sesi][latihanName] = value;
      state.statusLatihan = { ...currStatusLatihan };
    }
  }
};
