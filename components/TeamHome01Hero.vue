<template>
  <section class="flex max-h-[calc(100dvh-111px)] flex-col px-0 py-0">
    <!-- Hero Image -->
    <div
      class="relative flex w-full flex-1 items-center justify-center overflow-hidden"
      id="team-hero"
    >
      <img
        src="/Big-Group-Photo-2.jpg"
        alt="Team group"
        class="h-auto max-h-full w-auto max-w-full object-contain"
      />
    </div>

    <!-- Text Section -->
    <div class="bg-white py-10">
      <div class="container mx-auto px-4 text-center">
        <h1
          class="ltr:font-marcellus mb-4 text-center font-bold text-[#3B371F]"
        >
          {{ $t('teamPage.subtitle') }}
        </h1>
        <p class="mx-auto text-[#3B371F]/80">
          {{ $t('teamPage.paragraph') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// import ScrollDownButton from './ui/ScrollDownButton.vue';
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
