<template>
  <nav class="bg-primary py-0.5 px-6 md:px-6  w-full z-40 fixed">
    <div
      class="lg:container w-full mx-auto lg:max-w-6xl flex items-center justify-between "
    >
      <div>
        <router-link to="/">
          <img class="h-16 md:h-20" src="../assets/img/HoritzontalBlanc.png" alt="" />
        </router-link>
      </div>
      <div class="flex items-center">
        <button @click="showMenu = !showMenu" class="lg:hidden">
          <svg
            class="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div v-if="showMenu" class="hidden lg:block absolute bottom-0 left-0 lg:relative  top-16 lg:top-0 w-full bg-primary ">
          <ul
            class="flex flex-col lg:flex-row text-white lg:space-x-7 text-base font-semibold lg:mr-8 bg-primary-500 py-3"
          >
            <li class=" text-left py-1.5 px-6 lg:py-0 lg:px-0" v-for="(item, index) in items" :key="index">
              <router-link :to="{ name: item.link }" class="tracking-wide text-base">{{
                item.title
              }}</router-link>
            </li>
          </ul>

        </div>
        <div class="flex items-center space-x-6">
          <div class="lg:flex space-x-2 hidden">
            <div class="w-6 h-6 bg-gray-100"></div>
            <div class="w-6 h-6 bg-gray-100"></div>
          </div>
          <!-- <div class="divide-error-500 "></div> -->
          <div class="w-6 h-6 bg-gray-100 hidden md:block"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
      items: [
        { title: "empresa", link: "empresa" },
        { title: "servicios", link: "servicios" },
        { title: "kiteris data", link: "kiteris-data" },
        { title: "kiteris 3D", link: "kiteris-3d" },
        { title: "valores de kiteris", link: "valores-de-kiteris" },
        { title: "empleos", link: "Empresa" },
        { title: "contacto", link: "contacto" },
      ],
    };
  },
};
</script>
