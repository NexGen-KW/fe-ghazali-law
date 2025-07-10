<template>
  <div class="flex flex-col items-center bg-white px-2 py-12">
    <HeaderScale :t="$t('teamPage.meetCTA')" class="mb-10" />
    <div
      class="custom-card mx-auto flex w-full max-w-6xl flex-col items-center gap-8 p-8 md:flex-row"
    >
      <div class="flex w-full flex-shrink-0 justify-center md:w-[300px]">
        <img
          src="/1.jpg"
          alt="Rawan Mishari Al-Ghazali"
          class="x h-[380px] w-[300px] object-cover"
        />
      </div>
      <div class="flex-1 text-center md:text-start">
        <h2 class="ltr:font-marcellus text-gold-900 mb-2 text-4xl">
          {{ $t('teamPage.memberName') }}
        </h2>
        <h3 class="font-500 mb-4 text-xl text-neutral-900">
          {{ $t('teamPage.memberRole') }}
        </h3>
        <p class="mb-8 text-lg text-neutral-700">
          {{ $t('teamPage.memberBiography') }}
        </p>
        <NuxtLink to="/team/rawan-mishari-al-ghazali">
          <BaseButton>{{ $t('teamPage.knowMore') }}</BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
