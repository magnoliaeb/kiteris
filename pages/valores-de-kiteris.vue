<template>
  <div>
    <!-- hero -->
    <Hero :title="'Valores de Kiteris'" />
    <!-- valores -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="text-lg sm:text-lg md:text-3xl font-bold mb-8 text-left">
          Estos son nuestros valores. Tanto en nuestras relaciones internas,
          como en la relación con nuestros clientes.
        </h2>
        <!-- grid -->
        <div class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div
            class="w-full md:w-1/2 lg:w-1/4 p-4 h-full"
            v-for="(item, index) in valores"
            :key="index"
          >
            <!-- card -->
            <div
              class="bg-white h-full p-10 md:shadow-lg hover:shadow-2xl md:rounded-lg "
            >
              <div class="w-12 h-12 bg-gray-500 mx-auto"></div>
              <div class="text-center my-6">
                <h3 class="text-lg font-medium">{{ item.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-16 ">
      <div class="container mx-auto px-6 max-w-6xl">
        <h2 class="text-lg sm:text-lg md:text-3xl font-bold mb-8 text-left">
          Buscamos Personas (¡y Clientes!) que sintonicen y se comprometan con
          nuestros valores.
        </h2>
        <!-- grid -->
        <div class="flex flex-wrap flex-row justify-center">
          <!-- col -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4 h-full">
            <h3 class="text-lg font-medium">
              Que busquen y apuesten por la calidad:
            </h3>
            <p>
              Calidad del servicio: Aportamos valor a partir del momento en que
              cumplimos con las expectativas del cliente.
            </p>
            <p>
              Calidad técnica: Especialización de los equipos en las
              metodologías y tecnologías con las que trabajamos. Formación
              continua.
            </p>
            <p>
              Calidad humana: Sintonía de toda la empresa con nuestros valores.
              Los ponemos en práctica.
            </p>
            <div class="w-20 h-0.5 bg-primary-500 mt-8"></div>
          </div>
          <!-- col -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4 h-full">
            <h3 class="text-lg font-medium">
              Que apuesten por la mejora continua.
            </h3>
            <p>
              La compañía siempre está en proceso de mejora, facilitado por el
              entorno de colaboración a todos los niveles. Innovación.
            </p>
            <div class="w-20 h-0.5 bg-primary-500 mt-8"></div>
          </div>
          <!-- col -->
          <div class="w-full md:w-1/2 lg:w-1/3 p-4 h-full">
            <h3 class="text-lg font-medium">
              Que apuesten por la cultura corporativa.
            </h3>
            <p>
              Todos somos la compañía, todos estamos comprometidos con el
              proyecto de empresa.
            </p>
            <div class="w-20 h-0.5 bg-primary-500 mt-8"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ultims articulos -->
    <LastArticles />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import LastArticles from "../components/LastArticles.vue";
export default {
  components: { LastArticles, Hero },
  data() {
    return {
      valores: [
        { title: "Transparencia", icon: "" },
        { title: "Pragmatismo", icon: "" },
        { title: "Cercanía", icon: "" },
        { title: "Calidad", icon: "" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
