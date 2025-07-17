<script setup lang="ts">
defineProps<{ member?: { participations?: string } }>();
</script>

<template>
  <section
    v-if="member?.participations"
    class="flex w-full flex-col items-center"
  >
    <div class="flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2 class="ltr:font-marcellus text-center text-neutral-900">
          {{ $t('Legislative and Academic Participations') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
      <div class="mx-auto w-full max-w-[1140px] px-4">
        <p
          v-for="(para, idx) in (member?.participations || '').split(/\n\n+/)"
          :key="idx"
          class="mb-6 text-lg text-neutral-700"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </section>
</template>
