<template>
  <div>
    <!-- hero -->
    <div class="text-6xl">
      <div
        class="h-full w-full bg-no-repeat bg-cover bg-fixed"
        style="background-image: url('http://placeimg.com/640/480/technics');"
      >
        <div
          class="bg-black h-full flex items-center justify-center bg-opacity-70"
        >
          <!-- grid -->
          <div
            class="py-20 lg:py-40 container mx-auto flex items-center justify-around px-6"
          >
            <!-- col -->
            <div class="w-full lg:w-8/12">
              <h1
                class="text-white font-semibold text-2xl sm:text-xl md:text-4xl text-left"
              >
                Tus productos. Preparados para impresionar. Donde sea. 3D Web
              </h1>
              <div class="space-y-4 mt-4">
                <p class="text-gray-300 text-sm leading-relaxed">
                  Somos expertos en diseñar y crear aplicaciones específicas,
                  multisectoriales, que interactúan con elementos gráficos
                  diseñados en 3D, de gran realismo y que permiten una
                  experiencia de usuario con una percepción cercana a la
                  realidad.
                </p>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Aumenta los ratios de conversión y la fidelidad de tus
                  clientes!
                </p>
                <p class="text-gray-300 text-sm leading-relaxed">
                  Estás a un solo clic de hacerlo. Entra en nuestras demos y
                  mira cómo llevar a tus productos a la Luna.
                </p>
              </div>

              <button
                class="bg-primary rounded-full text-center w-64 sm:w-80 lg:w-64 px-6 py-3 text-white uppercase font-bold text-sm tracking-wide hover:bg-blue-300 mx-auto block md:mx-0 mt-10 hover:bg-sucess-500 border border-primary"
              >
                ver demos
              </button>
            </div>
            <div class="w-3/12 hidden lg:block">
              <img
                class="w-full object-cover"
                src="../assets/img/logo-3d.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <!-- grid -->
      <div class="flex flex-wrap">
        <!-- col -->
        <div class="w-full lg:w-1/2 order-last">
          <div
            class="md:container mx-auto px-6  py-16 lg:p-16 h-full bg-gray-50"
          >
            <h2 class="text-xl md:text-3xl font-bold text-gray-800 mb-8">
              NUEVOS DISEÑOS
            </h2>
            <p class="text-gray-500 leading-snug">
              Disponer de un visualizador 3D nos permite ofrecer un nuevo nivel
              en tu web, con una imagen espectacular que haga que tu producto se
              perciba con una experiencia única e inmersiva, desdibujando los
              límites con la realidad física.
            </p>
          </div>
        </div>
        <!-- col -->
        <div class="w-full lg:w-1/2 order-first">
          <img
            class="h-full w-full"
            src="http://placeimg.com/640/480/animals"
            alt=""
          />
        </div>
      </div>

      <!-- grid -->
      <div class="flex flex-wrap">
        <!-- col -->
        <div class="w-full lg:w-1/2 flex lg:order-first">
          <div class="md:container mx-auto px-6  py-16 lg:p-16  h-full">
            <h2 class="text-xl md:text-3xl font-bold mb-8">
              FUNCIONALIDADES EXCEPCIONALES
            </h2>

            <ul class="divide-y-2 divide-gray-200 space-y-2">
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Configuración interactiva de tus productos en tiempo real en
                  3D: Cambios de colores y texturas, Despieces y opciones,
                  Cálculo del precio con opcionales y distintas configuraciones
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Interacción en escena: iluminación, movimientos de cámara
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Creación de “hotspots” para resaltar determinadas
                  características o lanzar determinados eventos
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Animaciones automáticas
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Paseos virtuales
                </p>
              </li>
              <li class="flex p-2 items-center">
                <div class="w-6 h-6 flex-none bg-gray-500 mr-4"></div>
                <p class="text-gray-500 leading-snug">
                  Y muchas más!
                </p>
              </li>
            </ul>
          </div>
        </div>
        <!-- col -->
        <div class="w-full lg:w-1/2 lg:order-last hidden md:block">
          <img
            class="h-full w-full"
            src="http://placeimg.com/640/480/business"
            alt=""
          />
        </div>
      </div>
    </section>

    <fFormSevice />
  </div>
</template>

<script>
import FormSevice from "../components/FormSevice.vue";
import LastArticles from "../components/LastArticles.vue";
export default {
  components: { LastArticles, FormSevice },
   head() {
      return {
        title: 'Kiteris 3d',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Kiteris 3d page description'
          }
        ]
      }
    }
};
</script>

<style lang="scss" scoped></style>
