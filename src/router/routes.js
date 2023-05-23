import materi from "./materi";
import restrukturisasi from "./restrukturisasi";

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
      },
      {
        path: "me",
        component: () => import("pages/Me.vue")
      }
    ]
  },
  {
    path: "/onboarding",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/onboarding/Onboarding1.vue")
      }
    ]
  },
  {
    path: "/register",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Register.vue")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Login.vue")
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
    path: "/edukasi",
    component: () => import("layouts/FullLayout.vue"),
    children: [
      {
        path: "search",
        component: () => import("src/pages/edukasi/EdukasiSearch.vue")
      },
      {
        path: "edukasi-detail/cemas-dan-gangguan",
        component: () =>
          import("src/pages/edukasi/edukasi-detail/CemasDanGangguan.vue")
      },
      {
        path: "edukasi-detail/kecemasan-mahasiswa",
        component: () =>
          import("src/pages/edukasi/edukasi-detail/KecemasanMahasiswa.vue")
      },
      {
        path: "edukasi-detail/beragam-gangguan",
        component: () =>
          import("src/pages/edukasi/edukasi-detail/BeragamGangguan.vue")
      },
      {
        path: "edukasi-detail/menangani-kecemasan",
        component: () =>
          import("src/pages/edukasi/edukasi-detail/MenanganiKecemasan.vue")
      },
      {
        path: "edukasi-detail/:id",
        component: () => import("src/pages/edukasi/EdukasiDetail.vue")
      }
    ]
  },
  restrukturisasi,
  materi,
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
        path: "test",
        component: () => import("pages/Test.vue")
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
