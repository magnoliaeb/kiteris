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
                class="bg-primary-500 rounded-full text-center w-64 sm:w-80 lg:w-64 px-6 py-3 text-white uppercase font-bold text-sm tracking-wide hover:bg-blue-300 mx-auto block md:mx-0 mt-10 hover:bg-sucess-500 border border-primary-500"
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
            class="md:container mx-auto px-3  py-16 lg:p-16 h-full  px-3 bg-gray-50"
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
          <div class="md:container mx-auto px-3  py-16 lg:p-16 px-6  h-full">
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

    <section class="py-16 bg-primary-500">
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
           <input type="text" class="w-full rounded focus:outline-none focus:placeholder-primary-200  py-4 px-4 placeholder-gray-300 " placeholder="Nombre y Apellido*" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="text" class="w-full rounded focus:outline-none focus:placeholder-primary-200  py-4 px-4 placeholder-gray-300 " placeholder="Empresa" >
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="email" class="w-full rounded focus:outline-none focus:placeholder-primary-200  py-4 px-4 placeholder-gray-300 " placeholder="Email" required>
          </div>
          <div class="w-full md:w-1/2 p-4 h-full">
           <input type="tel" class="w-full rounded focus:outline-none focus:placeholder-primary-200  py-4 px-4 placeholder-gray-300 " placeholder="Telefono">
          </div>
          <div class="w-full p-4 h-full">
           <textarea name="" id="" cols="4" rows="5"  class="w-full rounded focus:outline-none focus:placeholder-primary-200  py-4 px-4 placeholder-gray-300 " placeholder="Mensaje" ></textarea>
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
  </div>
</template>

<script>
import LastArticles from "../components/LastArticles.vue";
export default {
  components: { LastArticles },
};
</script>

<style lang="scss" scoped></style>
