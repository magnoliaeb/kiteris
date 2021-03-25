<template>
  <div>
    <div v-show="showAlert"
      class="bg-black text-center text-white p-2 md:py-4 xs:flex justify-center items-center relative font-light hidden"
    >
      <p class="text-sm ">
        <span class="mr-2">Introducing the Vercel Experts Marketplace</span>
        <span class="border-l pl-2 border-gray-400 font-light">Explore →</span>
      </p>
      <a
        @click="showAlert = false"
        href="#"
        class="text-gray-400 absolute right-4 w-6 h-6 lg:block hidden"
      >
      <svg class="h-full w-full"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
      
      </a>
    </div>

    <nav class="w-full bg-white border-b border-gray-200 ">
      <div class="lg:container mx-auto ">
        <div class="lg:flex justify-between px-4 py-3 items-center">
         <div class="flex justify-between items-center">
            <nuxt-link to="/">
            <img src="../assets/img/hashicorp (3).svg" alt="" class="h-8 md:h-auto"/>
          </nuxt-link>
          <div class="h-6 w-6 text-gray-700 lg:hidden">
            <svg class="h-full w-full"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="8" x2="20" y2="8" />  <line x1="4" y1="16" x2="20" y2="16" /></svg>

          </div>
         </div>
          <div class="hidden lg:block text-gray-500 space-x-4">
            <a href="#" class="hover:text-black">Temlate</a>
            <a href="#" class="hover:text-black">Analytics</a>
            <a href="#" class="hover:text-black">Pricing</a>
          
          </div>
          <div class="hidden lg:block text-gray-500 space-x-4">
            <a href="#" class="hover:text-black">Contact</a>
            <a href="#" class="hover:text-black">Login</a>
            <a
              href="#"
              class="bg-black text-white px-3 py-1.5 rounded-md border-2 border-black hover:bg-white hover:text-black"
              >Sign Up</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAlert: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
