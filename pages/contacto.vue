<template>
  <div>
    <!-- hero -->
    <Hero :title="'Contácto'" />

    <section class="py-16 ">
      <div class="md:container mx-auto px-6 md:max-w-7xl">
        <!-- grid -->
        <div class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div class="w-full md:w-1/2 p-4">
            <h3 class="text-lg font-medium">
              Contacta con nosotros

            </h3>
            <div>

               <!-- grid -->
        <form class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="text" class="w-full rounded focus:outline-none border-gray-300 border focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Nombre y Apellido*" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="text" class="w-full rounded focus:outline-none border-gray-300 border focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Empresa" >
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="email" class="w-full rounded focus:outline-none border-gray-300 border focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Email" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="tel" class="w-full rounded focus:outline-none border-gray-300 border focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Telefono">
          </div>
          <div class="w-full p-4 h-full">
           <textarea name="" id="" cols="4" rows="5"  class="w-full rounded focus:outline-none border-gray-300 border focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Mensaje" ></textarea>
          </div>
          <div class="flex justify-center w-full">
           <div>
              <input type="checkbox" name="" id="">
            <span class="text-tiny text-gray-500">Acepto la clausula del apartado de contacto web</span>
           </div>
          </div>
          <div class="flex-none w-full flex justify-center">
            <button
                class="bg-gray-300 rounded-full text-center w-64 sm:w-80 lg:w-64 px-6 py-3 text-black uppercase font-bold text-sm tracking-wide hover:bg-blue-300  block  mt-10 hover:bg-gray-500 border border-gray-300 hover:border-gray-500"
              >
                enviar
              </button>
          </div>
        </form>
            </div>
            
          </div>
          <!-- col -->
          <div class="w-full md:w-1/2 p-4">
            <h3 class="text-lg font-medium">
              Oficinas

            </h3>
            <div class="space-y-4">
              
              <div v-for="(item, index) in oficinas" :key="index">
                <h3 class="font-medium text-lg">{{ item.title }}</h3>
                <p class="text-sm text-gray-500 mb-2">{{ item.address }}</p>
                <div class="bg-gray-400 w-full h-80"></div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </section>

   
  </div>
</template>

<script>
import Hero from '../components/Hero.vue';

export default {
  components: { Hero },
  data() {
    return {
      oficinas: [
        { title: 'Barcelona', address: 'Carrer del Camp, 79. 08022 Barcelona' },
        { title: 'Madrid', address: 'Calle del Poeta Joan Maragall, 19, 7º E. 28020 Madrid' },
        { title: 'Cartagena', address: 'Calle Jabonerías, 15, 1º. 30201 Cartagena' },
      ]
    }
  },
};
</script>

<style lang="scss" scoped></style>
