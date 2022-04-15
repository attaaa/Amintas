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
      },
      {
        path: "edukasi",
        component: () => import("pages/edukasi/Edukasi.vue")
      }
    ]
  },
  {
    path: "/search",
    component: () => import("pages/Search.vue")
  },
  {
    path: "/journal",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "input",
        component: () => import("pages/JournalInput.vue")
      },
      {
        path: "edit/:id",
        component: () => import("pages/JournalInput.vue")
      },
      {
        path: "detail/:id",
        component: () => import("pages/JournalDetail.vue")
      }
    ]
  },
  {
    path: "/relaksasi",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Relaksasi.vue")
      }
    ]
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
