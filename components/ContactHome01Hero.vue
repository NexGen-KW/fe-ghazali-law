<template>
  <section
    id="contact"
    class="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[url(/contact_us.jpg)] bg-cover bg-center bg-no-repeat lg:bg-fixed"
  >
    <!-- Dark overlay for better text contrast -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div
      class="hero-msg relative z-10 mx-auto max-w-[977px] px-4 text-center text-white sm:px-6 md:px-8"
    >
      <div
        class="rounded-lg bg-white/10 p-4 shadow-2xl backdrop-blur-sm sm:p-6 md:p-8"
      >
        <h1 class="mb-4 text-center break-words text-white drop-shadow-2xl">
          {{ $t('contactPage.title') }}
        </h1>
        <p
          class="text-shadow-custom text-sm leading-relaxed break-words text-white drop-shadow-lg sm:text-base md:text-lg lg:text-xl"
        >
          {{ $t('contactPage.subtitle') }}
        </p>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <!-- <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="statement" />
    </div> -->
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
