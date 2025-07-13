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
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const faqs = computed(() => [
  {
    q: t('homeFaq.faqs.0.q'),
    a: t('homeFaq.faqs.0.a'),
  },
  {
    q: t('homeFaq.faqs.1.q'),
    a: t('homeFaq.faqs.1.a'),
  },
  {
    q: t('homeFaq.faqs.2.q'),
    a: t('homeFaq.faqs.2.a'),
  },
  {
    q: t('homeFaq.faqs.3.q'),
    a: t('homeFaq.faqs.3.a'),
  },
]);
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center px-4 py-12">
    <HeaderScale :t="$t('homeFaq.header')" class="mb-4" />
    <h2>{{ $t('homeFaq.title') }}</h2>
    <AccordionRoot
      class="w-full max-w-3xl px-4"
      type="single"
      :collapsible="true"
    >
      <AccordionItem
        v-for="faq in faqs"
        :key="faq.q"
        :value="faq.q"
        class="border-gold-200 border-b py-6"
        v-slot="{ open }"
      >
        <AccordionHeader class="flex">
          <AccordionTrigger
            class="flex w-full cursor-pointer items-center text-start font-medium select-none"
          >
            <p class="flex-1 font-semibold">{{ faq.q }}</p>
            <p
              class="border-gold-900 ml-4 flex h-10 w-10 items-center justify-center rounded-full border"
            >
              <Icon
                :icon="open ? 'ic:round-expand-less' : 'ic:round-expand-more'"
                class="text-gold-900"
              />
            </p>
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
