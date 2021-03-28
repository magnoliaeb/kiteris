<template>
     <section class="py-16 bg-primary">
      <div class="lg:container mx-auto px-3">
        <div class="text-center">
          <h2 class="text-lg sm:text-lg md:text-4xl font-bold mb-4 text-white">
            ¿Quieres más información sobre nuestro servicio kiteris 3D?
          </h2>
          <p class="text-gray-200 leading-snug">
            Cuéntanos cómo hacéis las cosas. Añadir una dimensión más nos lleva
            al siguiente nivel en las interacciones entre tu producto y tus
            clientes.
          </p>
          <p class="text-gray-200 leading-snug">
            Dinos lo que necesitas y nosotros lo hacemos realidad.
          </p>
          <p class="text-gray-200 leading-snug mt-10">
            ¿QUIERES PROBARLO? ¡CONTÁCTANOS!
          </p>
        </div>
        <!-- grid -->
        <form class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="text" class="w-full rounded focus:outline-none focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Nombre y Apellido*" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="text" class="w-full rounded focus:outline-none focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Empresa" >
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="email" class="w-full rounded focus:outline-none focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Email" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="tel" class="w-full rounded focus:outline-none focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Telefono">
          </div>
          <div class="w-full p-4 h-full">
           <textarea name="" id="" cols="4" rows="5"  class="w-full rounded focus:outline-none focus:placeholder-primary  py-4 px-4 placeholder-gray-300 " placeholder="Mensaje" ></textarea>
          </div>
          <div class="flex justify-center w-full">
           <div>
              <input type="checkbox" name="" id="">
            <span class="text-tiny text-gray-200">Acepto la clausula del apartado de contacto web</span>
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
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>