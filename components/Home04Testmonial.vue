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
        :modules="[SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="testimonial-swiper"
      >
        <SwiperSlide
          v-for="testimonial in testimonials"
          :key="testimonial.author"
        >
          <div class="flex h-full flex-col items-center justify-center px-16">
            <p class="text-center text-lg font-normal">
              {{ testimonial.text }}
            </p>
            <div class="mt-4 text-center text-[#7A869A] italic">
              {{ testimonial.author }}
            </div>
          </div>
        </SwiperSlide>

        <div class="swiper-button-prev !text-gold-500 !absolute !left-4"></div>
        <div class="swiper-button-next !text-gold-500 !absolute !right-4"></div>
      </Swiper>
    </div>
    <BaseButton>
      {{ $t('contactCTA') }}
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

const testimonials = [
  {
    text: "Partnering with this firm has been a game-changer for our business. Their legal team brings sharp commercial insight, unmatched professionalism, and a clear understanding of both local and international regulations. They've consistently delivered solutions that are not only legally sound but strategically aligned with our goals",
    author: 'Moataz Salah, CEO of Techno Co.',
  },
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    author: 'Ahmed, CEO of Techno Co.',
  },
  {
    text: "Their legal team brings sharp commercial insight, unmatched professionalism, and a clear understanding of both local and international regulations. They've consistently delivered solutions that are not only legally sound but strategically aligned with our goals",
    author: 'Mohamed, CEO of Techno Co.',
  },
];
</script>

<style scoped>
.testimonial-swiper {
  height: 100%;
}
</style>
