<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <MainNavbar />
  </q-layout>
</template>

<script>
import MainNavbar from "components/MainNavbar";
export default {
  name: "MainLayout",
  components: { MainNavbar }
};
</script>
