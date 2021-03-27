<template>
    <!-- hero -->
    <div class="text-6xl">
      <div
        class="h-full w-full bg-no-repeat bg-cover bg-fixed"
        style="background-image: url('http://placeimg.com/640/480/nature');"
      >
        <div class="bg-black h-full flex items-center justify-center bg-opacity-50 py-32 md:py-36">
          <h1 class="text-white font-bold md:text-9xl text-3xl">{{ title }}</h1>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>