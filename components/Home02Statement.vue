<template>
  <section class="grid gap-8 bg-[#F6F2E566] pt-24" id="statement">
    <h2
      class="text-gold-900 ltr:font-marcellus text-center text-[40px] font-medium"
    >
      {{ $t('statementHeading') }}
    </h2>
    <p
      class="border-gold-200 container max-w-[1024px] border-y py-8 text-center"
    >
      {{ $t('statementParagraph') }}
    </p>
    <div class="flex justify-center">
      <BaseButton>
        <NuxtLink to="/team">
          {{ $t('heroCTA') }}
        </NuxtLink>
      </BaseButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
</script>
