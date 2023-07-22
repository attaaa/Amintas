export default {
  namespaced: true,
  state: {
    latihanAktif: {
      active: false,
      name: "",
      path: ""
    },
    // STATUS ---
    statusSesi: {
      sesi1: false,
      sesi2: false,
      sesi3: false
    },
    statusMateri: {
      sesi1: [true, false, false],
      sesi2: [true, false],
      sesi3: [true, false, false]
    },
    statusLatihan: {
      sesi1: {
        latihan1: false,
        latihan1Form: false,
        latihan1Finished: false,
        latihan2: false,
        latihan2Form: false,
        latihan2Finished: false
      },
      sesi2: {
        latihan1: false,
        latihan1Form: false,
        latihan1Finished: false
      }
    },
    sesi1Latihan1: {
      pikiran: "",
      selectedOptionsIdx: []
    },
    sesi1Latihan2: {
      catatan1: {
        peristiwa: "",
        pikiran: "",
        faktorPikiran: []
      },
      catatan2: {
        peristiwa: "",
        pikiran: "",
        faktorPikiran: []
      },
      catatan3: {
        peristiwa: "",
        pikiran: "",
        faktorPikiran: []
      }
    },
    sesi2Latihan1: {
      catatan1: {
        activationEvent: "",
        belief: "",
        consequence: "",
        distorsiKognitif: []
      },
      catatan2: {
        activationEvent: "",
        belief: "",
        consequence: "",
        distorsiKognitif: []
      },
      catatan3: {
        activationEvent: "",
        belief: "",
        consequence: "",
        distorsiKognitif: []
      }
    }
    // END STATUS
  },
  getters: {
    getLatihanData: state => sesiLatihan => {
      return state[sesiLatihan];
    }
  },
  mutations: {
    setLatihanAktif(state, payload) {
      state.latihanAktif = payload;
    },
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
    },
    setLatihanData(state, { sesiLatihan, data }) {
      state[sesiLatihan] = { ...data };
    },
    setFinishedLatihan(
      state,
      { sesi, currSesiLatihanFinished, nextSesiLatihan }
    ) {
      state.statusLatihan[sesi][currSesiLatihanFinished] = true;
      if (nextSesiLatihan) {
        state.statusLatihan[sesi][nextSesiLatihan] = true;
      } else {
        const nextSesi = sesi === "sesi1" ? "sesi2" : "sesi3";
        state.statusSesi[nextSesi] = true;
      }
    },

    // for dev only
    resetFinishedLatihan(
      state,
      { sesi, currSesiLatihanFinished, nextSesiLatihan }
    ) {
      state.statusLatihan[sesi][currSesiLatihanFinished] = false;
      if (nextSesiLatihan) {
        state.statusLatihan[sesi][nextSesiLatihan] = false;
      }
    }
  }
};
