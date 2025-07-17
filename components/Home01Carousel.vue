<template>
  <section
    class="relative mt-[-111px] flex h-[100dvh] w-full items-center justify-center bg-[url(/homepage-bg.jpg)] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="centered-hero-content carousel-950-row mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 px-4"
    >
      <!-- Logo/Slogan on the left/above -->
      <!-- Mobile/Tablet: Logo above text -->
      <div class="mb-2 flex flex-col items-center lg:hidden">
        <img
          :src="mobileLogoSrc"
          :alt="
            locale === 'ar'
              ? 'شعار ر.م.ج القانوني مع النص'
              : 'RMG Law Logo with Text'
          "
          class="h-auto w-[300px]"
        />
      </div>
      <!-- Desktop: Logo/Slogan on the left -->
      <div class="mb-4 hidden flex-col items-center md:mb-0 lg:flex">
        <img
          src="/sloganandlogo.svg"
          alt="RMG Law Logo and Slogan"
          class="h-auto w-full md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[550px]"
        />
      </div>

      <!-- Vertical Separator (hidden on mobile) -->
      <div class="bg-gold-200 mx-6 hidden h-[180px] w-px lg:block"></div>

      <!-- Hero Text Carousel -->
      <div
        class="hero-text flex w-full flex-1 flex-col items-center justify-center gap-4 md:w-auto"
      >
        <div
          class="hero-msg mx-auto flex h-fit w-full max-w-[600px] flex-col text-center text-white"
        >
          <Swiper
            v-if="isLocaleReady"
            :modules="[Autoplay, Pagination]"
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }"
            :pagination="{
              clickable: true,
              el: '.swiper-pagination-custom',
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }"
            :dir="swiperDirection"
            :key="swiperKey"
            class="hero-swiper"
          >
            <SwiperSlide
              v-for="(slide, index) in slides"
              :key="index"
              class="hero-slide"
            >
              <div class="hero-slide-content">
                <h1
                  class="carousel-heading py-0 text-center ltr:lg:text-left rtl:lg:text-right"
                >
                  {{ slide.heading }}
                </h1>
                <p
                  class="carousel-paragraph text-shadow-custom mt-4 text-center text-white ltr:lg:text-left rtl:lg:text-right"
                >
                  {{ slide.paragraph }}
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <!-- Custom Pagination -->
        <div
          class="mt-[20px] flex w-full max-w-[600px] justify-center space-x-2 text-center lg:justify-start lg:text-start"
        >
          <div class="swiper-pagination-custom"></div>
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
import { computed, watch, nextTick } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import ScrollDownButton from './ui/ScrollDownButton.vue';
import { useI18n } from '#imports';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const { t, locale } = useI18n();

const isLocaleReady = computed(() => !!locale.value);

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

// RTL support
const isRTL = computed(() => locale.value === 'ar');

// Computed image source for mobile logo
const mobileLogoSrc = computed(() =>
  locale.value === 'ar'
    ? '/fe-ghazali-law/logowithtextar.svg'
    : '/fe-ghazali-law/logowithtext.svg',
);

// Watch for locale changes to handle RTL/LTR properly
watch(locale, () => {
  // Force re-render when locale changes with a small delay
  setTimeout(() => {
    nextTick(() => {
      // This will trigger a re-render of the Swiper component
    });
  }, 100);
});

const swiperKey = computed(() => `${locale.value}-${isRTL.value}`);

// Handle RTL direction more carefully
const swiperDirection = computed(() => {
  return isRTL.value ? 'rtl' : 'ltr';
});
</script>

<style scoped>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* Swiper Custom Styles */
.hero-swiper {
  width: 100%;
  height: 100%;
  max-width: 100%;
  cursor: pointer;
}

.hero-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.hero-slide-content {
  width: 100%;
  text-align: center;
  padding: 0 1rem;
}

/* Custom Pagination Styles */
:deep(.swiper-pagination-custom) {
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-top: 0;
}

:deep(.swiper-pagination-bullet-custom) {
  width: 15px;
  height: 0.5rem;
  background-color: #ebe3c7;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;
  border: none;
  outline: none;
}

:deep(.swiper-pagination-bullet-active-custom) {
  background-color: #ceba75;
  width: 25px;
  border-radius: 0.25rem;
}

:deep(.swiper-pagination-bullet-custom:hover) {
  background-color: rgba(255, 255, 255, 0.8);
  transform: scale(1.1);
}

/* RTL Support */
[dir='rtl'] :deep(.swiper-pagination-custom) {
  flex-direction: row-reverse;
}

/* Ensure RTL Swiper works properly */
.hero-swiper[dir='rtl'] {
  direction: rtl;
}

.hero-swiper[dir='ltr'] {
  direction: ltr;
}

/* Responsive Design */
@media (min-width: 1024px) {
  .carousel-950-row {
    flex-direction: row !important;
    gap: 0 !important;
    padding-top: 5rem !important;
  }

  .hero-slide-content {
    text-align: left;
    padding: 0;
  }

  :deep(.swiper-pagination-custom) {
    justify-content: flex-start;
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-slide-content {
    padding: 0 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
  }

  .carousel-heading {
    font-size: 1.875rem;
    line-height: 2.25rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
  }

  .carousel-paragraph {
    font-size: 1rem;
    line-height: 1.5rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
  }
}

/* Tablet Responsive */
@media (min-width: 769px) and (max-width: 949px) {
  .hero-slide-content {
    padding: 0 2rem;
  }

  .carousel-heading {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .carousel-paragraph {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
}

/* Extra Small Mobile Responsive */
@media (max-width: 480px) {
  .hero-slide-content {
    padding: 0 0.5rem;
    width: 100%;
  }

  .hero-msg {
    max-width: 100%;
  }

  .carousel-heading {
    font-size: 1.5rem;
    line-height: 1.875rem;
    width: 100%;
  }

  .carousel-paragraph {
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 100%;
  }
}

/* Large Desktop Responsive */
@media (min-width: 1280px) {
  .hero-slide-content {
    padding: 0;
  }

  .carousel-heading {
    font-size: 3rem;
    line-height: 3.5rem;
  }

  .carousel-paragraph {
    font-size: 1.25rem;
    line-height: 2rem;
  }
}

/* Hide default Swiper pagination */
:deep(.swiper-pagination) {
  display: none;
}
</style>
