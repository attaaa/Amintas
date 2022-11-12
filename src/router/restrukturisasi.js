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
    {
      path: "sesi1",
      component: () => import("pages/restrukturisasi/sesi/Sesi1.vue")
    },
    {
      path: "sesi1/latihan1",
      component: () =>
        import("pages/restrukturisasi/latihan/IdentifikasiPikiranNegatif.vue")
    }
  ]
};

export default childRoutes;
