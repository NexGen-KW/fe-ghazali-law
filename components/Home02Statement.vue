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
      <button
        class="border-gold-900 text-gold-900 hover:bg-gold-900 hover:text-gold-100 border px-5 py-3 text-lg font-medium transition-colors duration-300 ease-in-out"
      >
        {{ $t('heroCTA') }}
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
