<template>
     <!-- casos de éxito -->
    <section class="bg-gray-50 py-16">
      <div class="lg:container mx-auto lg:max-w-7xl">
        <h2 class="text-lg sm:text-lg md:text-4xl font-bold mb-8 text-center">Nuestros casos de éxito</h2>
        <!-- grid -->
        <div class="flex flex-wrap flex-row">
          <!-- col -->
          <div class="w-full md:w-1/3 p-4 h-full">
            <!-- card -->
            <div class="bg-white h-full p-8 md:shadow-lg hover:shadow-2xl md:rounded-lg">
              <img class="w-full" src="http://placeimg.com/640/480/fashion" alt="" />
              <div class="text-center">
                <h2 class="font-semibold uppercase text-sm md:text-base mt-4">
                  TRANSFORMACIÓN DE LA GESTIÓN DE UNA AGENCIA DE VIAJES EN UNA
                  SOLUCIÓN DIGITAL
                </h2>
                <p class="text-gray-500 mt-10 text-xs md:text-sm">Caso de éxito agencia de viajes única</p>
              </div>
            </div>
          </div>
          <!-- col -->
          <div class="w-full md:w-1/3 p-4 h-full">
            <!-- card -->
            <div class="bg-white h-full p-8 md:shadow-lg hover:shadow-2xl md:rounded-lg">
              <img class="w-full" src="http://placeimg.com/640/480/sports" alt="" />
              <div class="text-center">
                <h2 class="font-semibold uppercase text-sm md:text-base mt-4">
                  HERRAMIENTA DE CÁLCULO Y ANÁLISIS DE LOS MÁRGENES DE UNA
                  COMERCIALIZADORA ELÉCTRICA
                </h2>
                <p class="text-gray-500 mt-10 text-xs md:text-sm">Caso de éxito kiteris DATA</p>
              </div>
            </div>
          </div>
          <!-- col -->
          <div class="w-full md:w-1/3 p-4 h-full">
            <!-- card -->
            <div class="bg-white h-full p-8 md:shadow-lg hover:shadow-2xl md:rounded-lg">
              <img class="w-full" src="http://placeimg.com/640/480/transport" alt="" />
              <div class="text-center">
                <h2 class="font-semibold uppercase text-sm md:text-base mt-4">
                  ADAPTACIÓN DE SU SOLUCIÓN DE GESTIÓN DE RIESGO DE CRÉDITO DE
                  EMPRESAS EN EL SECTOR BANCARIO
                </h2>
                <p class="text-gray-500 mt-10 text-xs md:text-sm">Caso de éxito AIS Group</p>
              </div>
            </div>
          </div>
        </div>
       <div class="px-6">
          <router-link to="/" class="bg-primary hover:bg-white hover:text-primary border hover:border-primary focus:outline-none rounded-full text-white sm:text-sm  py-2.5 uppercase my-8 md:mx-auto w-full px-8 md:w-80 flex justify-center font-bold tracking-wide text-xs">Ver todos los casos de éxito</router-link>
       </div>
      </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>