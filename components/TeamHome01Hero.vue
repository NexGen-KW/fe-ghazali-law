<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center bg-[url(/Big-Group-Photo-2.jpg)] bg-cover bg-center bg-no-repeat pt-20 lg:pt-[200px]"
  >
    <div
      class="absolute bottom-40 left-1/2 z-10 flex w-full -translate-x-1/2 justify-center"
    >
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-8 py-8 text-center"
      >
        <h1 class="font-marcellusSC mb-4 text-[32px] text-white">
          {{ $t('teamHeroHeading') }}
        </h1>
        <p class="text-shadow-custom text-white">
          {{ $t('carouselParagraph') }}
        </p>
      </div>
    </div>
    <div class="absolute bottom-20 left-1/2 z-20 -translate-x-1/2">
      <ScrollDownButton target="meet" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ScrollDownButton from './ui/ScrollDownButton.vue';
</script>

<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.overlay-blur {
  background: rgba(77, 77, 77, 0.37);
  backdrop-filter: blur(7.5px);
}
</style>
