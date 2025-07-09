<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] w-full items-center justify-center bg-[url(/homepage-bg.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="centered-hero-content mx-auto flex w-full max-w-7xl items-center justify-center px-4 pt-20"
    >
      <!-- Logo/Slogan on the left -->
      <div
        class="mb-4 flex w-[500px] flex-col items-center justify-center pr-8 sm:mb-0 sm:p-0"
      >
        <img
          src="/sloganandlogo.svg"
          alt="RMG Law Logo and Slogan"
          class="hide-on-short h-auto w-[300px] sm:w-[300px] lg:w-[500px]"
        />
      </div>
      <!-- Vertical Separator -->
      <div class="bg-gold-400 mx-6 hidden h-[180px] w-px md:block"></div>
      <!-- Hero Text Carousel -->
      <div class="hero-text flex flex-1 flex-col items-center justify-center">
        <div
          class="hero-msg mx-auto min-h-[200px] max-w-[600px] text-center text-white"
        >
          <transition name="slide-left" mode="out-in">
            <h1
              class="font-markazi text-left text-[48px] transition-all duration-500"
              :key="slides[currentSlide].heading"
            >
              {{ slides[currentSlide].heading }}
            </h1>
          </transition>
          <transition name="slide-left" mode="out-in">
            <p
              class="text-shadow-custom text-left text-[24px] text-white transition-all duration-500"
              :key="slides[currentSlide].paragraph"
            >
              {{ slides[currentSlide].paragraph }}
            </p>
          </transition>
        </div>
        <!-- Navigation Dots (moved outside hero-msg) -->
        <div class="mt-6 flex w-full max-w-[600px] justify-start space-x-2">
          <button
            v-for="(slide, idx) in slides"
            :key="idx"
            :class="[
              'h-3 rounded-full transition-all duration-300',
              idx === currentSlide ? 'bg-gold-400 w-8' : 'w-3 bg-white/50',
            ]"
            @click="goToSlide(idx)"
            aria-label="Go to slide"
          ></button>
        </div>
      </div>
    </div>
    <!-- Reusable Scroll Down Button -->
    <div class="absolute bottom-20 left-1/2 -translate-x-1/2">
      <ScrollDownButton target="statement" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const { t } = useI18n();

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
]);

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
section {
  align-items: center;
  justify-content: center;
}
.centered-hero-content {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.bg-gold-400 {
  background-color: #e0b354;
}
.slide-left-enter-active,
.slide-left-leave-active {
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
@media (max-width: 900px) {
  .centered-hero-content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .hero-text {
    width: 100%;
    padding-left: 0 !important;
    margin-top: 16px;
  }
}
@media (max-height: 860px) {
  .hide-on-short {
    display: none !important;
  }
}
</style>
