<template>
  <div>
    <NavBar />
    <Nuxt />

    <MyFooter />
  </div>
</template>

<script>
import MyFooter from "../components/MyFooter.vue";
import NavBar from "../components/NavBar.vue";
export default {
  components: { MyFooter, NavBar },
};
</script>
