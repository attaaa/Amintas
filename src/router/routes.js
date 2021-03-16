const routes = [
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/Home.vue") }]
  // },
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Home.vue")
      }
    ]
  },
  {
    path: "/search",
    component: () => import("pages/Search.vue")
  },
  {
    path: "/journal-detail",
    component: () => import("pages/JournalDetail.vue")
  },
  {
    path: "/test",
    component: () => import("layouts/TestLayout.vue")
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
