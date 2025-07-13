<template>
  <section class="flex w-full flex-col items-center justify-center py-12">
    <div class="mb-4 flex items-center justify-center">
      <span
        v-for="n in 5"
        :key="n"
        class="mx-0.5 text-[22px] text-[var(--color-gold-500)]"
        >★</span
      >
    </div>
    <div class="mx-auto w-full max-w-[1100px] flex-1">
      <Swiper
        v-if="localeReady"
        :key="locale"
        :modules="[SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
        :navigation="{
          nextEl: '.swiper-button-prev',
          prevEl: '.swiper-button-next',
        }"
        class="testimonial-swiper"
      >
        <SwiperSlide
          v-for="testimonial in testimonials"
          :key="testimonial.author"
        >
          <div
            class="flex h-full flex-col items-center justify-center px-8 md:px-16"
          >
            <p
              class="max-w-4xl text-center text-base leading-relaxed font-normal md:text-start md:text-lg"
            >
              {{ testimonial.text }}
            </p>
            <div
              class="mt-4 text-center text-sm text-[#7A869A] italic md:text-start md:text-base"
            >
              {{ testimonial.author }}
            </div>
          </div>
        </SwiperSlide>
        <div
          class="swiper-button-prev !text-gold-500 !absolute !top-1/2 !ms-4 !-translate-y-1/2"
        ></div>
        <div
          class="swiper-button-next !text-gold-500 !absolute !top-1/2 !me-4 !-translate-y-1/2"
        ></div>
      </Swiper>
    </div>
    <BaseButton>
      <NuxtLink to="/contact">
        {{ $t('contactCTA') }}
      </NuxtLink>
    </BaseButton>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  Navigation as SwiperNavigation,
  Pagination as SwiperPagination,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref, watch, nextTick, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n();

const localeReady = ref(true);
watch(locale, () => {
  localeReady.value = false;
  nextTick(() => {
    localeReady.value = true;
  });
});

const testimonials = computed(() => [
  { text: t('testimonials.0.text'), author: t('testimonials.0.author') },
  { text: t('testimonials.1.text'), author: t('testimonials.1.author') },
  { text: t('testimonials.2.text'), author: t('testimonials.2.author') },
]);
</script>

<style scoped>
.testimonial-swiper {
  height: 100%;
}
.testimonial-swiper .swiper-button-prev,
.testimonial-swiper .swiper-button-next {
  width: 40px !important;
  height: 40px !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-radius: 50% !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease;
  z-index: 10 !important;
}
.testimonial-swiper .swiper-button-prev::after,
.testimonial-swiper .swiper-button-next::after {
  font-size: 16px !important;
  font-weight: bold !important;
}
.testimonial-swiper .swiper-button-prev:hover,
.testimonial-swiper .swiper-button-next:hover {
  background-color: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}
/* Ensure stable layout during language transitions */
.testimonial-swiper .swiper-slide {
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.testimonial-swiper .swiper-slide > div {
  width: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
