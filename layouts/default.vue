<template>
  <div class="h-full">
    <NavBar />
    <Nuxt class="" />

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
<style >
#__nuxt {
	height: 100%;
  }
  #__layout {
	height: 100%;
  }
</style>