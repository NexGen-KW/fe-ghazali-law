<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center bg-[url(/Big-Group-Photo-2.jpg)] bg-cover bg-center bg-no-repeat pt-20 lg:pt-[200px]"
  >
    <div class="hero-text pt-20">
      <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
        <h1 class="font-arabic text-gold-500 text-[56px]">
          {{ $t('firmName') }}
        </h1>
        <p class="text-shadow-custom text-white">
          {{ $t('carouselParagraph') }}
        </p>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="statement" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ScrollDownButton from './ui/ScrollDownButton.vue';
</script>

<style scoped>
section {
  align-items: start;
}
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
