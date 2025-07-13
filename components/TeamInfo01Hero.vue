<script setup lang="ts">
import ScrollDownButton from '~/components/ui/ScrollDownButton.vue';

defineProps<{
  member?: {
    name?: string;
    role?: string;
    image?: string;
  };
}>();
</script>

<template>
  <section
    class="relative flex h-[calc(100dvh-111px)] items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: `url(/fe-ghazali-law/${member?.image})`,
    }"
  >
    <!-- Overlay text container near the bottom, above the button -->
    <div
      class="absolute bottom-40 left-1/2 z-10 flex -translate-x-1/2 justify-center"
    >
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-8 py-2 text-center md:py-8"
      >
        <h1 class="ltr:font-marcellusSC text-[20px] text-white md:text-[32px]">
          {{ member?.name || $t('Meet Our Team') }}
        </h1>
        <p
          class="text-shadow-custom hidden text-[16px] text-white md:block md:text-[24px]"
        >
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
