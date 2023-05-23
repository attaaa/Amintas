import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// import example from './module-example'
import account from "./account";
import app from "./app";
import edukasi from "./edukasi";
import journal from "./journal";
import restrukturisasi from "./restrukturisasi";
import strategi from "./strategi";

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      app,
      journal,
      strategi,
      account,
      restrukturisasi,
      edukasi
    },
    plugins: [createPersistedState()],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  });

  return Store;
}
