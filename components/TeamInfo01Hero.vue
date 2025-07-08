<script setup lang="ts">
import ScrollDownButton from '~/components/ui/ScrollDownButton.vue';

defineProps<{
  member?: {
    name?: string;
    role?: string;
    biography?: string;
    image?: string;
  };
}>();
</script>

<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center bg-cover bg-no-repeat"
    :style="{
      backgroundImage: `url(/fe-ghazali-law/${member?.image})`,
    }"
  >
    <!-- Overlay text container near the bottom, above the button -->
    <div
      class="absolute bottom-40 left-1/2 z-10 flex -translate-x-1/2 justify-center"
    >
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-8 py-8 text-center"
      >
        <h1 class="font-marcellusSC mb-4 text-[32px] text-white">
          {{ member?.name || $t('Meet Our Team') }}
        </h1>
        <p class="text-shadow-custom text-white">
          {{ member?.role || $t('carouselParagraph') }}
        </p>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-20 left-1/2 z-20 -translate-x-1/2">
      <ScrollDownButton target="bio" />
    </div>
  </section>
</template>

<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.overlay-blur {
  background: rgba(77, 77, 77, 0.37);
  backdrop-filter: blur(7.5px);
}
.fade-cross-enter-active,
.fade-cross-leave-active {
  transition: opacity 0.5s;
}
.fade-cross-enter-from,
.fade-cross-leave-to {
  opacity: 0;
}
</style>
