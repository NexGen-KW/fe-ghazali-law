<template>
  <div class="border-gold-200">
    <section
      class="justify-space-between container flex w-full flex-col items-center bg-white lg:flex-row"
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
      <AccordionRoot class="max-w-[660px]" type="single" :collapsible="true">
        <template v-for="item in services" :key="item.title">
          <AccordionItem
            class="border-b border-[var(--color-gold-200)] py-6"
            :value="item.title"
            v-slot="{ open }"
          >
            <AccordionHeader class="flex">
              <AccordionTrigger
                class="text-gold-900 font-marcellus flex w-full cursor-pointer items-center text-left text-[22px] font-medium select-none"
              >
                <span class="mr-6 text-2xl font-bold">
                  <Icon :icon="open ? 'ic:round-remove' : 'ic:round-add'" />
                </span>
                {{ item.title }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              class="AccordionContent text-gold-900 pt-3 pl-10 font-sans text-[17px] font-normal"
            >
              <div>{{ item.description }}</div>
            </AccordionContent>
          </AccordionItem>
        </template>
      </AccordionRoot>
    </section>
  </div>
</template>

<script setup lang="ts">
import HeaderScale from '~/components/ui/HeaderScale.vue';
import { Icon } from '@iconify/vue';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui';

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

const openIdx = ref<number | null>(1);
</script>

<style>
.AccordionContent {
  overflow: hidden;
}
.AccordionContent[data-state='open'] {
  animation: slideDown 300ms ease-out;
}
.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms ease-out;
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--reka-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--reka-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
