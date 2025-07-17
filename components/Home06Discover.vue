<template>
  <div class="border-gold-200">
    <section
      class="justify-space-between container flex w-full flex-col items-center bg-white lg:flex-row"
    >
      <!-- Left: Header and Button -->
      <div
        class="mb-10 flex w-full flex-col items-center justify-center lg:mb-0 lg:w-1/2 lg:self-start"
      >
        <HeaderScale :t="`${$t('discoverHeaderScale')}`" />
        <h2 class="ltr:font-marcellus mb-8 text-center">
          {{ $t('discoverHeading') }}
        </h2>
        <BaseButton>
          <NuxtLink to="/services">
            {{ $t('discoverCTA') }}
          </NuxtLink>
        </BaseButton>
      </div>
      <!-- Right: Accordion -->
      <AccordionRoot
        class="w-full max-w-[660px]"
        type="single"
        :collapsible="true"
      >
        <template v-for="(item, idx) in services" :key="item.title">
          <AccordionItem
            :class="[
              idx !== services.length - 1
                ? 'border-b border-[var(--color-gold-200)]'
                : '',
              'py-6',
            ]"
            :value="item.title"
            v-slot="{ open }"
          >
            <AccordionHeader class="flex">
              <AccordionTrigger
                class="text-gold-900 ltr:font-montserrat flex w-full cursor-pointer items-center text-left font-medium select-none"
              >
                <span
                  class="mx-3 flex h-8 w-8 items-center justify-center text-2xl font-bold"
                >
                  <Icon :icon="open ? 'ic:round-remove' : 'ic:round-add'" />
                </span>
                {{ item.title }}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent
              class="AccordionContent text-gold-900 pt-3 font-sans text-[17px] font-normal ltr:pl-4 rtl:pr-4"
            >
              <div class="text-gold-800 overflow-hidden break-words">
                {{ item.description }}
              </div>
            </AccordionContent>
          </AccordionItem>
        </template>
      </AccordionRoot>
    </section>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/ui/BaseButton.vue';
import HeaderScale from '~/components/ui/HeaderScale.vue';
import { Icon } from '@iconify/vue';
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'reka-ui';

import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = computed(() => [
  {
    title: t('services.contracting.title'),
    description: t('services.contracting.description'),
  },
  {
    title: t('services.intellectualProperty.title'),
    description: t('services.intellectualProperty.description'),
  },
  {
    title: t('services.arbitration.title'),
    description: t('services.arbitration.description'),
  },
]);

const openIdx = ref<number | null>(1);
</script>

<style>
.AccordionContent {
  overflow: hidden;
}
</style>
