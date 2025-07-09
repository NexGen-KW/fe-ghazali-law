<template>
  <section
    id="about"
    class="relative mt-[-111px] flex h-[100vh] items-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="hero-msg mx-auto max-w-[977px] px-4 text-center text-white sm:px-6 md:px-8"
    >
      <h1 class="mb-4 text-white">
        {{ $t('aboutHeroHeading') }}
      </h1>
      <p class="text-shadow-custom text-base text-white md:text-[24px]">
        {{ $t('aboutHeroParagraph') }}
      </p>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="contact" />
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
</style>
