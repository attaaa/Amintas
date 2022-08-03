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
      },
      {
        path: "strategi",
        component: () => import("pages/strategi/Strategi.vue")
      },
      {
        path: "strategi-active",
        component: () => import("pages/strategi/StrategiActive.vue")
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
    path: "/strategi",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "input-category",
        component: () => import("src/pages/strategi/StrategiInputCategory.vue")
      },
      {
        path: "input-story1",
        component: () => import("src/pages/strategi/StrategiInputStory1.vue")
      },
      {
        path: "input-story2",
        component: () => import("src/pages/strategi/StrategiInputStory2.vue")
      },
      {
        path: "input-activities",
        component: () =>
          import("src/pages/strategi/StrategiInputActivities.vue")
      },
      {
        path: "input-level",
        component: () => import("src/pages/strategi/StrategiInputLevel.vue")
      }
    ]
  },
  {
    path: "/test",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/JournalEdit.vue")
      },
      {
        path: "onboarding",
        component: () => import("pages/onboarding/Onboarding1.vue")
      },
      {
        path: "mood/:id",
        component: () => import("pages/journal-edit/JournalEditMood.vue")
      },
      {
        path: "edukasi",
        component: () => import("pages/edukasi/EdukasiDetail.vue")
      },
      {
        path: "strategi",
        component: () => import("pages/strategi/Strategi.vue")
      },
      {
        path: "input-strategi",
        component: () => import("src/pages/strategi/StrategiInputCategory.vue")
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
