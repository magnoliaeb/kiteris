<template>
  <div>
    <section>
      <!-- grid -->
      <div class="flex flex-wrap">

        <!-- col -->
        <div class="w-full lg:w-1/2 order-last">
          <div class="md:container mx-auto py-16 lg:p-16 h-full  px-6 ">
            <h2 class="text-xl md:text-4xl font-bold text-gray-800 mb-8">
              NUESTRO ENFOQUE
            </h2>
            <ul class="divide-y-2 divide-gray-200 space-y-2">
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Convertimos los datos de nuestros clientes en ACTIVOS
                  TANGIBLES, de forma práctica y extendida a toda la
                  organización, en un proceso progresivo y de calidad.
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Entendemos los proyectos como una suma de pasos e iteraciones
                  (“sprints”) que nos permiten conseguir resultados rápidos y
                  aplicar mejora continua.
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Adaptamos la estrategia de proyecto al cliente pero siempre
                  con un enfoque “ágil” y con equipos de trabajo mixtos
                  proveedor-cliente.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- col -->
        <div class="w-full lg:w-1/2 order-first">
          <img
            class="h-full w-full"
            src="https://dummyimage.com/1201x800"
            alt=""
          />
        </div>
      </div>

      <!-- grid -->
      <div class="flex flex-wrap">
        <!-- col -->
        <div class="w-full lg:w-1/2 flex lg:order-first">
          <div
            class="md:container mx-auto py-16 lg:p-16 px-6  h-full"
          >
            <h2 class="text-xl md:text-4xl font-bold mb-8">
              PROPUESTA DE VALOR
            </h2>
            <ul class="space-y-2 divide-y-2 divide-gray-200">
              <li class="flex items-center p-2">
                <div class="h-10 w-10 bg-gray-500 mr-4"></div>
                <p class="text-gray-800 font-medium text-lg leading-snug">
                  Construir soluciones de largo recorrido, robustas y
                  escalables.
                </p>
              </li>

              <li class="flex items-center p-2">
                <div class="h-10 w-10 bg-gray-500 mr-4"></div>
                <p class="text-gray-800 font-medium text-lg leading-snug">
                  Trabajar en proyectos ágiles que permitan obtener resultados
                  rápidos.
                </p>
              </li>
              <li class="flex items-center p-2">
                <div class="h-10 w-10 bg-gray-500 mr-4"></div>
                <p class="text-gray-800 font-medium text-lg leading-snug">
                  Demostrar la utilidad de la solución en la toma de decisiones.
                </p>
              </li>
              <li class="flex items-center p-2">
                <div class="h-10 w-10 bg-gray-500 mr-4"></div>
                <p class="text-gray-800 font-medium text-lg leading-snug">
                  Hacer que el proceso de análisis, diagnóstico y toma de
                  decisiones sea intuitivo y rápido.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- col -->
        <div class="w-full lg:w-1/2 lg:order-last hidden md:block">
          <img
            class="h-full w-full"
            src="https://dummyimage.com/1201x800"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- casos de éxito -->
    <section class="bg-gray-50 py-16">
      <div class="lg:container mx-auto">
        <h2 class="text-lg sm:text-lg md:text-4xl font-bold mb-8 text-center">
          Nuestros casos de éxito
        </h2>
        <!-- grid -->
        <div class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div class="w-full md:w-5/12 p-4 h-full">
            <!-- card -->
            <div
              class="bg-white h-full p-8 md:shadow-lg hover:shadow-2xl md:rounded-lg"
            >
              <img
                class="w-full"
                src="https://dummyimage.com/1201x800"
                alt=""
              />
              <div class="text-center">
                <h2 class="font-semibold uppercase text-sm md:text-base mt-4">
                  HERRAMIENTA DE CÁLCULO Y ANÁLISIS DE LOS MÁRGENES DE UNA
                  COMERCIALIZADORA ELÉCTRICA
                </h2>
                <p class="text-gray-500 mt-10 text-xs md:text-sm">
                  Caso de éxito kiteris DATA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ultims articulos -->
    <LastArticles />
  </div>
</template>

<script>
import LastArticles from "../components/LastArticles.vue";
export default {
  components: { LastArticles },
};
</script>

<style lang="scss" scoped></style>
