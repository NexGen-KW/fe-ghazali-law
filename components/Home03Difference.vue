<template>
  <section
    :class="[
      'border-gold-200 grid grid-cols-1 justify-center gap-4 text-center lg:grid-cols-2 lg:text-left',
    ]"
  >
    <div class="justify-content-center flex flex-col lg:pl-10">
      <div class="px-10">
        <UiHeaderScale t="heroDifference" />
        <h2>
          {{ $t('differenceHeading') }}
        </h2>
        <p class="text-center leading-[34px] lg:text-start">
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
    </div>
    <div class="flex flex-col">
      <div class="relative">
        <img
          loading="lazy"
          :src="`/fe-ghazali-law/diff.jpg`"
          alt="difference"
          class="h-auto w-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
