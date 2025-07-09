<template>
  <section class="flex w-full justify-center py-12" id="information">
    <div
      class="flex w-full max-w-6xl flex-col items-center rounded-xl px-4 py-12"
    >
      <h2
        class="ltr:font-marcellusSC mb-10 text-center text-3xl text-neutral-900"
      >
        {{ $t('contactPage.contactInfo') }}
      </h2>
      <div
        class="flex w-full flex-col items-center justify-center gap-8 md:flex-row"
      >
        <div
          v-for="item in contactInfo"
          :key="item.label"
          class="custom-card flex w-full max-w-xs flex-col items-center rounded bg-white p-8 text-center shadow-sm"
        >
          <Icon :name="item.icon" size="48" class="mb-4 text-[#3A3321]" />
          <div class="mb-2 text-xl font-normal">{{ item.label }}</div>
          <div class="text-lg font-medium text-[#3A3321]">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const contactInfo = computed(() => [
  {
    icon: 'mdi:email-outline',
    label: t('contactPage.emailLabel'),
    value: 'Al-Ghazaly@gmail.com',
  },
  {
    icon: 'mdi:phone-outline',
    label: t('contactPage.phoneLabel'),
    value: t('contactPage.phone'),
  },
  {
    icon: 'mdi:map-marker-outline',
    label: t('contactPage.addressLabel'),
    value: t('contactPage.address'),
  },
]);
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
