const childRoutes = {
  path: "/restrukturisasi",
  component: () => import("layouts/FullLayout.vue"),
  children: [
    {
      path: "",
      component: () => import("pages/restrukturisasi/Main.vue")
    },
    {
      path: "intro",
      component: () => import("pages/restrukturisasi/Introduction.vue")
    },

    // sesi1
    {
      path: "sesi1",
      component: () => import("pages/restrukturisasi/sesi/Sesi1.vue")
    },
    {
      path: "sesi1/materi1",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_1/Materi1.vue")
    },
    {
      path: "sesi1/materi2",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_1/Materi2.vue")
    },
    {
      path: "sesi1/materi3",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_1/Materi3.vue")
    },
    {
      path: "sesi1/latihan1",
      component: () =>
        import("pages/restrukturisasi/latihan/IdentifikasiPikiranNegatif.vue")
    },
    {
      path: "sesi1/latihan2",
      component: () =>
        import("pages/restrukturisasi/latihan/CatatanPikiranNegatif.vue")
    },

    // sesi2
    {
      path: "sesi2",
      component: () => import("pages/restrukturisasi/sesi/Sesi2.vue")
    },
    {
      path: "sesi2/materi1",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_2/Materi1.vue")
    },
    {
      path: "sesi2/materi2",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_2/Materi2.vue")
    },
    {
      path: "sesi2/latihan1",
      component: () =>
        import("pages/restrukturisasi/latihan/CatatanPolaPikirNegatif.vue")
    },

    // sesi3
    {
      path: "sesi3",
      component: () => import("pages/restrukturisasi/sesi/Sesi3.vue")
    },
    {
      path: "sesi3/materi1",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_3/Materi1.vue")
    },
    {
      path: "sesi3/materi2",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_3/Materi2.vue")
    },
    {
      path: "sesi3/materi3",
      component: () =>
        import("pages/restrukturisasi/sesi/materi_sesi_3/Materi3.vue")
    },
    {
      path: "sesi3/latihan1",
      component: () =>
        import("pages/restrukturisasi/latihan/BermainPeranReporter.vue")
    },
    {
      path: "sesi3/latihan2",
      component: () =>
        import("pages/restrukturisasi/latihan/MenjagaKeseimbanganPikiran.vue")
    },
    {
      path: "sesi3/latihan3",
      component: () =>
        import("pages/restrukturisasi/latihan/BermainPeranPengacara.vue")
    },

    {
      path: "bantuan",
      component: () => import("pages/restrukturisasi/sesi/AnalisisABC.vue")
    },

    //
    //
    //
    {
      path: ":sesi/:materi",
      component: () => import("pages/restrukturisasi/MateriContainer.vue")
    }
  ]
};

export default childRoutes;
