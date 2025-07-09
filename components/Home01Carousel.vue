<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] w-full items-center justify-center bg-[url(/homepage-bg.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="centered-hero-content carousel-950-row mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 pt-20"
    >
      <!-- Logo/Slogan on the left/above -->
      <div
        class="mb-4 flex w-full max-w-full flex-col items-center md:mb-0 md:max-w-[400px]"
      >
        <img
          src="/sloganandlogo.svg"
          alt="RMG Law Logo and Slogan"
          class="hide-on-short h-auto w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[400px]"
        />
      </div>

      <!-- Vertical Separator (hidden on mobile) -->
      <div class="bg-gold-200 mx-6 hidden h-[180px] w-px lg:block"></div>

      <!-- Hero Text Carousel -->
      <div
        class="hero-text flex w-full flex-1 flex-col items-center justify-center md:w-auto"
      >
        <div
          class="hero-msg mx-auto min-h-[180px] max-w-[600px] text-center text-white"
        >
          <transition
            :name="isRTL ? 'slide-right' : 'slide-left'"
            mode="out-in"
          >
            <h1
              class="carousel-heading text-center lg:text-start"
              :key="slides[currentSlide].heading"
            >
              {{ slides[currentSlide].heading }}
            </h1>
          </transition>
          <transition
            :name="isRTL ? 'slide-right' : 'slide-left'"
            mode="out-in"
          >
            <p
              class="carousel-paragraph text-shadow-custom mt-4 text-center text-white lg:text-start"
              :key="slides[currentSlide].paragraph"
            >
              {{ slides[currentSlide].paragraph }}
            </p>
          </transition>
        </div>
        <!-- Navigation Dots (moved outside hero-msg) -->
        <div
          class="mt-6 flex w-full max-w-[600px] justify-center space-x-2 text-center lg:justify-start lg:text-start"
        >
          <button
            v-for="(slide, idx) in slides"
            :key="idx"
            :class="[
              'h-2 rounded-full transition-all duration-300',
              idx === currentSlide ? 'bg-gold-400 w-8' : 'w-5 bg-white/50',
            ]"
            @click="goToSlide(idx)"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="statement" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ScrollDownButton from './ui/ScrollDownButton.vue';
import { useI18n } from '#imports';
const { t, locale } = useI18n();

// Get slides from translations
const slides = computed(() => [
  {
    heading: t('carousel.slides.0.heading'),
    paragraph: t('carousel.slides.0.paragraph'),
  },
  {
    heading: t('carousel.slides.1.heading'),
    paragraph: t('carousel.slides.1.paragraph'),
  },
  {
    heading: t('carousel.slides.2.heading'),
    paragraph: t('carousel.slides.2.paragraph'),
  },
  {
    heading: t('carousel.slides.3.heading'),
    paragraph: t('carousel.slides.3.paragraph'),
  },
]);

// Only keep isRTL for transition direction
const isRTL = computed(() => locale.value === 'ar');

const currentSlide = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

function goToSlide(idx: number) {
  currentSlide.value = idx;
  resetAutoplay();
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  resetAutoplay();
}

function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
  resetAutoplay();
}

function startAutoplay() {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, 5000);
}

function resetAutoplay() {
  if (intervalId) clearInterval(intervalId);
  startAutoplay();
}

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
@media (min-width: 950px) {
  .carousel-950-row {
    flex-direction: row !important;
    gap: 0 !important;
    padding-top: 5rem !important; /* pt-20 */
  }
}
</style>
