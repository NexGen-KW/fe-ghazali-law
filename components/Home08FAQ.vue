<template>
  <section
    class="container flex w-full flex-col items-center justify-center px-4 py-12"
  >
    <HeaderScale t="We care about you" class="mb-4" />
    <h2 class="text-gold-900 mb-8">How Can We Help You?</h2>
    <AccordionRoot class="w-full max-w-3xl" type="single" :collapsible="true">
      <AccordionItem
        v-for="faq in faqs"
        :key="faq.q"
        :value="faq.q"
        class="border-gold-200 border-b py-6"
        v-slot="{ open }"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="text-gold-900 flex w-full cursor-pointer items-center text-left text-lg font-medium select-none"
          >
            <span class="flex-1">{{ faq.q }}</span>
            <span
              class="border-gold-900 ml-4 flex h-10 w-10 items-center justify-center rounded-full border"
            >
              <Icon
                :icon="open ? 'ic:round-expand-less' : 'ic:round-expand-more'"
                class="text-gold-900"
              />
            </span>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent
          class="AccordionContent text-gold-900 pt-3 pl-10 text-base font-normal"
        >
          <div>{{ faq.a }}</div>
        </AccordionContent>
      </AccordionItem>
    </AccordionRoot>
  </section>
</template>

<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import { Icon } from '@iconify/vue';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui';

const faqs = [
  {
    q: 'Do you provide legal support for international companies entering Kuwait?',
    a: 'Yes, we offer comprehensive legal support for international companies looking to establish or expand their business in Kuwait.',
  },
  {
    q: 'Does your firm handle cross-border legal matters?',
    a: 'Absolutely. Our team is experienced in handling cross-border transactions and disputes.',
  },
  {
    q: 'What legal services does RMG Law Firm offer?',
    a: 'We offer a wide range of legal services including corporate, commercial, arbitration, and intellectual property law.',
  },
  {
    q: 'Who are some of your notable clients?',
    a: 'We have represented a variety of notable clients across different industries. Please contact us for more details.',
  },
];
</script>

<style sco>
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
