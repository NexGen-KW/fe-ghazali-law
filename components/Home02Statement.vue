<template>
  <section class="grid gap-8 bg-[#F6F2E566] pt-24">
    <h2
      class="text-gold-900 font-marcellus text-center text-[40px] font-medium"
    >
      {{ $t('statementHeading') }}
    </h2>
    <p class="border-gold-200 container border-y py-8 text-center text-2xl">
      {{ $t('statementParagraph') }}
    </p>
    <div class="flex justify-center">
      <BaseButton>
        {{ $t('heroCTA') }}
      </BaseButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
