<script setup lang="ts">
defineProps<{ member?: { participations?: string } }>();
</script>

<template>
  <section
    v-if="member?.participations"
    class="container flex w-full flex-col items-center py-0 pb-[24px]"
  >
    <div class="flex w-full flex-col items-center">
      <UiSectionHeader :title="$t('legislativeAndAcademicParticipations')" />
      <div class="mx-auto w-full pt-[24px]">
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
