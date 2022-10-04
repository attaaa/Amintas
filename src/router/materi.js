const childRoutes = {
  path: "/materi",
  component: () => import("layouts/FullLayout.vue"),
  children: [
    {
      path: "detail",
      component: () => import("pages/edukasi/MateriDetail.vue")
    }
  ]
};

export default childRoutes;
