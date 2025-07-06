<template>
  <section
    class="flex w-full flex-col items-center justify-center bg-white py-16 lg:flex-row"
  >
    <!-- Left: Header and Button -->
    <div
      class="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2 lg:self-start"
    >
      <HeaderScale t="heroDiscover" />
      <h2 class="font-marcellus mb-8 text-center text-5xl">Our Services</h2>
      <button
        class="rounded-md border border-gray-400 px-8 py-3 text-lg transition hover:bg-[var(--color-gold-50)]"
      >
        Discover All Our Services
      </button>
    </div>
    <!-- Right: Accordion -->
    <div class="flex w-full flex-col gap-2 px-4 lg:w-1/2">
      <div
        v-for="(item, idx) in services"
        :key="item.title"
        class="border-b border-[var(--color-gold-200)] py-6"
      >
        <div
          class="text-gold-900 flex cursor-pointer items-center text-[22px] font-medium select-none"
          @click="openIdx = openIdx === idx ? null : idx"
        >
          <span class="mr-6 text-2xl">
            <span v-if="openIdx === idx">&#8722;</span>
            <span v-else>&#43;</span>
          </span>
          {{ item.title }}
        </div>
        <transition name="fade">
          <div
            v-if="openIdx === idx"
            class="text-gold-900 pt-3 pl-10 text-[17px]"
          >
            {{ item.description }}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeaderScale from '~/components/ui/HeaderScale.vue';
import { ref } from 'vue';

const services = [
  {
    title: 'Contracting & Real-Estate Field',
    description:
      'Protecting your innovations, trademarks, and creative works through strategic IP registration, enforcement, and advisory — locally and internationally.',
  },
  {
    title: 'Intellectual Property Field',
    description:
      'Protecting your innovations, trademarks, and creative works through strategic IP registration, enforcement, and advisory — locally and internationally.',
  },
  {
    title: 'Arbitration Field',
    description:
      'Protecting your innovations, trademarks, and creative works through strategic IP registration, enforcement, and advisory — locally and internationally.',
  },
];

const openIdx = ref<number | null>(1); // 1 is open by default (like screenshot)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
