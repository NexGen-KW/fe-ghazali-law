<template>
  <section
    :class="[
      'border-gold-200 relative grid grid-cols-1 items-center justify-center gap-4 overflow-hidden py-8 text-center lg:py-26 xl:py-[130px]',
    ]"
  >
    <!-- Stylish background gazelle image -->
    <div
      class="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      aria-hidden="true"
    >
      <img
        loading="lazy"
        :src="`/fe-ghazali-law/gazelle.svg`"
        alt=""
        class="h-auto w-full max-w-2xl scale-125 object-contain opacity-10 blur-sm select-none"
      />
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <UiHeaderScale t="heroDifference" />
        <h2>
          {{ $t('differenceHeading') }}
        </h2>
        <p class="text-center leading-[34px]">
          {{ $t('differenceParagraph') }}
        </p>
        <div class="flex justify-center">
          <BaseButton class="mt-[32px]">
            <NuxtLink to="/contact">
              {{ $t('contactCTA') }}
            </NuxtLink>
          </BaseButton>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <!-- No foreground image -->
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
