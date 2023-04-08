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
        latihan1Finished: false,
        latihan2: false,
        latihan2Form: false,
        latihan2Finished: false
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
    // END STATUS

    // ADJUSTMENT
    sesi: [
      // 0 = sesi 1
      {
        latihan: [
          // 0 = latihan 1
          {
            form: [
              {
                name: "Pikiran",
                value: "Test Content Pikiran"
              },
              {
                name: "Pikiran 2",
                value: "Test Content Pikiran 2"
              }
            ]
          }
        ]
      },
      {
        latihan: []
      },
      {
        latihan: []
      }
    ]
  },
  getters: {
    getLatihanData: state => sesiLatihan => {
      console.log(sesiLatihan);
      return state[sesiLatihan];
    }
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
