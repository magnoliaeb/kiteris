<template>
  <nav class="bg-primary-500 py-0.5 px-6 md:px-16 fixed w-full">
    <div
      class="container w-full mx-auto lg:max-w-full flex items-center justify-between "
    >
      <div>
        <router-link to="/">
          <img class="h-16 md:h-20" src="../assets/img/HoritzontalBlanc.png" alt="" />
        </router-link>
      </div>
      <div class="flex items-center">
        <div class="lg:hidden">
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
        </div>
        <ul
          class="hidden lg:flex text-white lg:space-x-8 text-base font-semibold mr-8"
        >
          <li v-for="(item, index) in items" :key="index">
            <router-link :to="{ name: item.link}" class="tracking-wide lowercase">{{
              item.title
            }}</router-link>
          </li>
        </ul>
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
      items: [
        { title: "Empresa", link: "empresa" },
        { title: "Servicios", link: "servicios" },
        { title: "Kiteris data", link: "kiteris-data" },
        { title: "Kiteris 3D", link: "Empresa" },
        { title: "Valores de kiteris", link: "Empresa" },
        { title: "Empleos", link: "Empresa" },
        { title: "Contacto", link: "Empresa" },
      ],
    };
  },
};
</script>
