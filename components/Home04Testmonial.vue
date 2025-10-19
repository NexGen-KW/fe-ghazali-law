<template>
  <section
    class="border-gold-200 flex w-full flex-col items-center justify-center py-12"
  >
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
        :dir="isRtl ? 'rtl' : 'ltr'"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        class="testimonial-swiper"
      >
        <SwiperSlide
          v-for="testimonial in locale === 'ar'
            ? testimonials_ar
            : testimonials"
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

        <div
          :class="[
            'swiper-button-prev !text-gold-500 !absolute',
            isRtl ? '!right-4' : '!left-4',
          ]"
        ></div>
        <div
          :class="[
            'swiper-button-next !text-gold-500 !absolute',
            isRtl ? '!left-4' : '!right-4',
          ]"
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
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n();
const isRtl = computed(() => locale.value === 'ar');

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

const testimonials_ar = [
  {
    text: 'التعاون مع هذه الشركة كان نقطة تحول في أعمالنا. فريقهم القانوني يجلب رؤية تجارية حادة، احترافية لا مثيل لها، وفهم واضح للوائح المحلية والدولية. لقد قدموا باستمرار حلول ليست فقط سليمة قانونياً ولكنها محاذاة استراتيجية مع أهدافنا',
    author: 'معتز صلاح، الرئيس التنفيذي لشركة تكنو',
  },
  {
    text: 'لوريم إيبسوم دولار سيت أميت كونسيكتيتور أدبيسينج إليت. كويسكوام، كووس.',
    author: 'أحمد، الرئيس التنفيذي لشركة تكنو',
  },
  {
    text: 'فريقهم القانوني يجلب رؤية تجارية حادة، احترافية لا مثيل لها، وفهم واضح للوائح المحلية والدولية. لقد قدموا باستمرار حلول ليست فقط سليمة قانونياً ولكنها محاذاة استراتيجية مع أهدافنا',
    author: 'محمد، الرئيس التنفيذي لشركة تكنو',
  },
];
</script>

<style scoped>
.testimonial-swiper {
  height: 100%;
}

/* Custom navigation button styles to make them smaller */
.testimonial-swiper .swiper-button-prev,
.testimonial-swiper .swiper-button-next {
  width: 40px !important;
  height: 40px !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-radius: 50% !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease;
}

.testimonial-swiper .swiper-button-prev::after,
.testimonial-swiper .swiper-button-next::after {
  font-size: 16px !important;
  font-weight: bold !important;
}

/* Hover effects */
.testimonial-swiper .swiper-button-prev:hover,
.testimonial-swiper .swiper-button-next:hover {
  background-color: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
}
</style>
