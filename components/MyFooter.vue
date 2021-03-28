<template>
     <div class="md:container md:max-w-7xl mx-auto pt-10 px-6 md:px-0">
      <!-- grid -->
      <div class="flex flex-wrap flex-row justify-center">
        <!-- col -->
        <div class="w-full md:w-1/2 lg:w-1/4 text-center p-4">
          <img class="mx-auto" src="../assets/img/HoritzontalBi.png" alt="">
        </div>
        <!-- col -->
        <div class="w-full md:w-1/2 lg:w-1/4 text-center md:text-left p-4">
          
          <h3 class="font-semibold lg:text-lg text-gray-800 text-sm md:text-base">Barcelona</h3>
          <address class="text-gray-500 not-italic mt-4 text-xs md:text-base">Carrer del Camp, 79 08022 Barcelona</address>
          <a class="text-sucess text-xs md:text-base" href="mailto:info@kiteris.com">info@kiteris.com</a>
        </div>
        <!-- col -->
        <div class="w-full md:w-1/2 lg:w-1/4 text-center md:text-left p-4">
          
          <h3 class="font-semibold lg:text-lg text-gray-800 text-sm md:text-base">Madrid</h3>
          <address class="text-gray-500 not-italic mt-4 text-xs md:text-base">Calle Poeta Joan Maragall, 19, 7º E 28020 Madrid</address>
          <a class="text-sucess text-xs md:text-base" href="mailto:info@kiteris.com">info@kiteris.com</a>
        </div>
        <!-- col -->
        <div class="w-full md:w-1/2 lg:w-1/4 text-center md:text-left p-4">
          
          <h3 class="font-semibold lg:text-lg text-gray-800 text-sm md:text-base">Cartagena</h3>
          <address class="text-gray-500 not-italic mt-4 text-xs md:text-base">Calle Jabonerías, 15, 1º 30201 Cartagena</address>
          <a class="text-sucess text-xs md:text-base" href="mailto:info@kiteris.com">info@kiteris.com</a>
        </div>

      </div>
      <div class="w-full h-px bg-gray-100"></div>
      <div class="flex justify-center py-10 text-center">
        <p class="text-gray-500 text-xs md:text-sm lg:text-base">
          <strong class="text-primary text-sm">© KITERIS 2021</strong> · Project Management & IT Services · 
          <router-link class="text-primary" to="/">Aviso Legal</router-link>
           · 
           <router-link class="text-primary" to="/">Política de privacidad</router-link>
            ·
            <router-link class="text-primary" to="/">Política de cookies</router-link>

        </p>
      </div>
    </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>