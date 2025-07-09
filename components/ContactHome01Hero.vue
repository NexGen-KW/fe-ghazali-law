<template>
  <section
    id="about"
    class="relative mt-[-111px] flex h-[100dvh] items-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
      <h1>
        {{ $t('contactPage.title') }}
      </h1>
      <p class="text-shadow-custom text-white">
        {{ $t('contactPage.subtitle') }}
      </p>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="information" />
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
