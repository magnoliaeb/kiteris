<template>
  <div class="">
    <Hero :title="'Presentación empresa'" />

    <section class="py-16 bg-gray-100">
      <div class="container mx-auto max-w-7xl">
        <!-- grid -->
        <div class="flex flex-wrap items-start">
          <!-- col -->
          <div class="w-full md:w-5/12 p-4 ">
            <img class="w-full object-cover h-full" src="http://placeimg.com/640/480/people" alt="" />
          </div>
          <!-- col -->
          <div class="w-full md:w-7/12 p-4">
            <h2
              class="text-lg sm:text-lg md:text-4xl font-bold mb-6 text-left text-primary-500"
            >
              Nosotros
            </h2>
            <div class="space-y-6">
              <p class="text-lg text-gray-600">
                Prestamos servicios basados en la calidad del servicio, en la
                calidad humana de los equipos, y en la aportación de valor a
                través de nuestra experiencia.
              </p>
              <p class="text-lg text-gray-600">
                Disponemos de los mejores profesionales (aptitud y actitud) para
                dedicar nuestros esfuerzos en la consecución de las metas de
                nuestros clientes, intensamente pero de forma empática y
                flexible. Más de 70 personas localizadas en Barcelona, Madrid,
                Lisboa, y Cartagena.
              </p>
              <p class="text-lg text-gray-600">
                La filosofía de los Socios de Kiteris es estar cerca de los
                Clientes y proyectos. Somos operativos y ponemos nuestra
                experiencia sobre el terreno al servicio directo de nuestros
                Clientes y profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="container mx-auto max-w-7xl">
        <!-- grid -->
        <div class="flex flex-wrap items-start">
          <!-- col -->
          <div class="w-full md:w-5/12 p-4 order-last">
            <img class="w-full object-cover h-full" src="http://placeimg.com/640/480/city" alt="" />
          </div>
          <!-- col -->
          <div class="w-full md:w-7/12 p-4 order-first">
            <h2
              class="text-lg sm:text-lg md:text-4xl font-bold mb-6 text-left text-primary-500"
            >
              Nuestra experiencia
            </h2>
            <div class="space-y-6">
              <p class="text-lg text-gray-600">
                Los socios fundadores de Kiteris tenemos cada uno más de 20 años
                de experiencia en el sector de Consultoría a nivel nacional e
                internacional, y este proyecto capitaliza nuestra trayectoria
                para construir una compañía moderna, cercana y en la que todos
                los que colaboren puedan aportar su talento para marcar la
                diferencia.
              </p>
              <p class="text-lg text-gray-600">
                Nos hemos propuesto crear una estructura “lean” muy ligera y con
                muy pocos niveles jerárquicos, donde todos seamos accesibles
                para todos y compartamos una visión única e ilusionante, donde
                trabajemos a gusto y la comunicación circule con fluidez.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2
          class="text-lg sm:text-lg md:text-4xl font-bold mb-6 text-left text-primary-500"
        >
          Sobre el nombre «Kiteris»
        </h2>
        <div class="space-y-4">
          <p class="text-gray-600 text-lg">
            En nuestras sesiones de búsqueda de nombre, tarea cada vez más
            difícil en este mundo globalizado, queríamos un nombre conectado con
            alguna de nuestras claves filosóficas. Haciendo research en
            distintas fuentes (diccionarios zulús, suajili, mapuche, …), dimos
            con una palabra que nos pareció muy adecuada, además por
            proporcionar un referente cinéfilo reciente.
          </p>
          <p class="text-gray-600 text-lg">
            James Cameron, el aclamado director de cine (Terminator, Abbys, …),
            encargó a un lingüista la creación de la lengua propia de los
            habitantes azules del planeta Pandora, el Na’vi, para su premiada
            película “Avatar”.
          </p>
          <p class="text-gray-600 text-lg">
            “Kiteris” lo derivamos de la palabra “kite’e”, que en la lengua
            Na’vi significa “Servicio”, que enlaza perfectamente con nuestro
            lema “Pasión por el Servicio”. Valoramos también utilizar la doble
            “e” (“Kiteeris”), pero nos pareció poco práctico y confuso.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Hero from '../components/Hero.vue'
  export default {
  components: { Hero },
    
  }
</script>

<style lang="scss" scoped>

</style>