<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center overflow-hidden"
  >
    <!-- Crossfade background images -->
    <div class="absolute inset-0 z-0 h-full w-full">
      <transition-group name="fade-cross" tag="div">
        <div
          v-for="(img, idx) in visibleImages"
          :key="img.key"
          class="absolute inset-0 h-full w-full bg-cover bg-center"
          :style="{ backgroundImage: `url(/${img.src})`, opacity: img.opacity }"
        ></div>
      </transition-group>
    </div>
    <!-- Overlay text container near the bottom, above the button -->
    <div
      class="absolute bottom-40 left-1/2 z-10 flex w-full -translate-x-1/2 justify-center"
    >
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-8 py-8 text-center"
      >
        <h1 class="font-marcellusSC mb-4 text-[32px] text-white">
          {{ $t('Meet Our Team') }}
        </h1>
        <p class="text-shadow-custom text-white">
          {{ $t('carouselParagraph') }}
        </p>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-20 left-1/2 z-20 -translate-x-1/2">
      <ScrollDownButton target="statement" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ScrollDownButton from './ui/ScrollDownButton.vue';

const images = Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`);
const currentImageIndex = ref(0);
const previousImageIndex = ref(0);

interface VisibleImage {
  key: string;
  src: string;
  opacity: number;
}

const visibleImages = ref<VisibleImage[]>([
  { key: '0', src: images[0], opacity: 1 },
]);
let intervalId: number | undefined;

const nextImage = () => {
  previousImageIndex.value = currentImageIndex.value;
  const nextIdx = (currentImageIndex.value + 1) % images.length;
  currentImageIndex.value = nextIdx;
  // Show both images for crossfade
  visibleImages.value = [
    {
      key: String(previousImageIndex.value) + '-old',
      src: images[previousImageIndex.value],
      opacity: 1,
    },
    { key: String(nextIdx) + '-new', src: images[nextIdx], opacity: 0 },
  ];
  // Animate opacity
  setTimeout(() => {
    visibleImages.value = [
      {
        key: String(previousImageIndex.value) + '-old',
        src: images[previousImageIndex.value],
        opacity: 0,
      },
      { key: String(nextIdx) + '-new', src: images[nextIdx], opacity: 1 },
    ];
  }, 10); // allow DOM update
  // Remove old image after fade
  setTimeout(() => {
    visibleImages.value = [
      { key: String(nextIdx) + '-new', src: images[nextIdx], opacity: 1 },
    ];
  }, 510); // match fade duration
};

onMounted(() => {
  visibleImages.value = [{ key: '0', src: images[0], opacity: 1 }];
  intervalId = window.setInterval(nextImage, 2000); // 1 second per image (adjust as needed)
});
onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

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
