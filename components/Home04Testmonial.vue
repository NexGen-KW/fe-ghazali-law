<template>
  <section
    class="border-gold-200 flex w-full flex-col items-center justify-center border-b py-12"
  >
    <div class="mb-4 flex items-center justify-center">
      <span v-for="n in 5" :key="n" class="mx-0.5 text-[22px] text-[#C2B16D]"
        >★</span
      >
    </div>
    <div class="mx-auto flex w-full max-w-[1100px] items-center">
      <button
        @click="prev"
        class="text-gold-500 hover:text-gold-700 px-4 text-3xl focus:outline-none"
      >
        &#60;
      </button>
      <p class="flex-1 text-center text-lg font-normal">
        {{ testimonials[current].text }}
      </p>
      <button
        @click="next"
        class="text-gold-500 hover:text-gold-700 px-4 text-3xl focus:outline-none"
      >
        &#62;
      </button>
    </div>
    <div class="mt-4 text-center text-[#7A869A] italic">
      {{ testimonials[current].author }}
    </div>
    <BaseButton>
      {{ $t('contactCTA') }}
    </BaseButton>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import { ref } from 'vue';

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

const current = ref(0);

function prev() {
  current.value =
    (current.value - 1 + testimonials.length) % testimonials.length;
}
function next() {
  current.value = (current.value + 1) % testimonials.length;
}
</script>
