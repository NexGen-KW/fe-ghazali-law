<template>
  <section
    :class="[
      'border-gold-200 grid grid-cols-1 justify-between gap-4 py-[24px] text-center lg:grid-cols-2 lg:text-left',
      localeProperties.dir === 'ltr' ? 'xl:pl-[155px]' : 'xl:pr-[155px]',
    ]"
  >
    <div class="justify-content-center flex flex-col lg:pl-10">
      <UiHeaderScale t="heroDifference" />
      <h2>
        {{ $t('differenceHeading') }}
      </h2>
      <p class="text-[18px] leading-[34px]">
        {{ $t('differenceParagraph') }}
      </p>
      <div class="flex justify-center lg:justify-start">
        <BaseButton class="mt-[32px]">
          <NuxtLink to="/contact">
            {{ $t('contactCTA') }}
          </NuxtLink>
        </BaseButton>
      </div>
    </div>
    <div class="flex w-full flex-col items-end sm:items-center">
      <img
        loading="lazy"
        src="/group-international.jpg"
        alt="difference"
        class="h-[371px] w-full max-w-[626px] object-cover"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import { useI18n } from 'vue-i18n';
const { localeProperties } = useI18n();
</script>
