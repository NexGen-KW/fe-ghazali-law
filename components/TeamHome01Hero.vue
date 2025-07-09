<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center overflow-hidden"
    style="
      background-image: url('/fe-ghazali-law/Big-Group-Photo-2.jpg');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Overlay text container near the bottom, above the button -->
    <div
      class="absolute top-40 left-1/2 z-10 flex -translate-x-1/2 justify-center"
    >
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-[30px] py-4 text-center"
      >
        <h1 class="font-marcellus mb-4 text-[24px] text-white sm:text-[32px]">
          {{ $t('Meet Our Team') }}
        </h1>
        <p class="text-shadow-custom hidden text-white lg:block">
          {{ $t('carouselParagraph') }}
        </p>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
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
