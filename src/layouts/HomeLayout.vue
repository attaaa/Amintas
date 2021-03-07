<template>
  <div>
    <div>
      <router-view />
    </div>
    <MainNavbar />
  </div>
</template>

<script>
import MainNavbar from "components/MainNavbar";

export default {
  name: "HomeLayout",
  components: { MainNavbar }
};
</script>
