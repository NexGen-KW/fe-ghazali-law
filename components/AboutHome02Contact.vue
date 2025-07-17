<template>
  <section
    class="container"
    id="contact"
    :class="[
      'border-gold-200 grid grid-cols-1 justify-between gap-4 text-center lg:grid-cols-2 lg:text-left',
      localeProperties.dir === 'ltr' ? 'xl:pl-[155px]' : 'xl:pr-[155px]',
    ]"
  >
    <div class="justify-content-center flex flex-col lg:pl-10">
      <UiHeaderScale t="heroDifference" />
      <h2>
        {{ $t('aboutContactHeading') }}
      </h2>
      <p class="leading-[34px]">
        {{ $t('aboutContactParagraph') }}
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
        class="h-[200px] w-full max-w-[626px] object-contain sm:h-[250px] md:h-[300px] lg:h-[371px]"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
import { useI18n } from 'vue-i18n';
const { localeProperties } = useI18n();
</script>
