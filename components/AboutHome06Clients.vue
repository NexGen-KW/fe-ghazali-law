<template>
  <section class="bg-white text-center">
    <!-- Reusable section header -->
    <div class="mb-4 flex justify-center">
      <HeaderScale :t="t('aboutClientsTitle')" />
    </div>
    <!-- Heading -->
    <h2
      class="ltr:font-marcellus mb-6 text-center text-2xl font-bold text-[#3B371F] md:text-3xl"
    >
      {{ t('aboutClientsTitle') }}
    </h2>
    <!-- Description box -->
    <div class="mx-auto max-w-4xl border-t border-b border-[#F3EEDC] px-4 py-8">
      <p class="text-lg text-[#3B371F] md:text-xl">
        {{ t('aboutClientsParagraph') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HeaderScale from './ui/HeaderScale.vue';

const { t } = useI18n();
const clients = computed(() => [
  {
    title: t('aboutClients.0.title'),
    description: t('aboutClients.0.description'),
  },
]);
</script>
