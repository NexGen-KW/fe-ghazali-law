<template>
  <section class="flex w-full justify-center py-12">
    <div
      class="flex w-full max-w-6xl flex-col items-center rounded-xl px-4 py-12"
    >
      <h2 class="font-marcellusSC mb-10 text-center text-3xl text-neutral-900">
        {{ $t('contactInformation.heading') }}
      </h2>
      <div
        class="flex w-full flex-col items-center justify-center gap-8 md:flex-row"
      >
        <div
          v-for="item in contactInfo"
          :key="item.key"
          class="custom-card flex w-full max-w-xs flex-col items-center rounded bg-white p-8 text-center shadow-sm"
        >
          <Icon :name="item.icon" size="48" class="mb-4 text-[#3A3321]" />
          <div class="mb-2 text-xl font-normal">{{ $t(item.labelKey) }}</div>
          <div class="text-lg font-medium text-[#3A3321]">
            {{
              item.key === 'location'
                ? $t('contactInformation.location.value')
                : item.value
            }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const contactInfo = [
  {
    key: 'email',
    icon: 'mdi:email-outline',
    labelKey: 'contactInformation.email.label',
    value: 'Mail@alghazali-law.com',
  },
  {
    key: 'phone',
    icon: 'mdi:phone-outline',
    labelKey: 'contactInformation.phone.label',
    value: '009651802234',
  },
  {
    key: 'location',
    icon: 'mdi:map-marker-outline',
    labelKey: 'contactInformation.location.label',
    value: 'Al-Shohdaa St, Kuwait',
  },
];
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
