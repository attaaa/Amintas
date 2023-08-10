const childRoutes = {
  path: "/materi",
  component: () => import("layouts/FullLayout.vue"),
  children: [
    {
      path: "detail/p0m1",
      component: () => import("pages/edukasi/materi/MateriDetail_P0M1.vue")
    },

    {
      path: "detail/p1m1",
      component: () => import("pages/edukasi/materi/MateriDetail_P1M1.vue")
    },

    {
      path: "detail/p2m1",
      component: () => import("pages/edukasi/materi/MateriDetail_P2M1.vue")
    },

    {
      path: "detail/p3m1",
      component: () => import("pages/edukasi/materi/MateriDetail_P3M1.vue")
    },

    {
      path: "detail/p4m1",
      component: () => import("pages/edukasi/materi/MateriDetail_P4M1.vue")
    },

    {
      path: "detail",
      component: () => import("pages/edukasi/MateriDetail.vue")
    }
  ]
};

export default childRoutes;
