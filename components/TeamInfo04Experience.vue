<script setup lang="ts">
defineProps<{ member?: { experience?: string } }>();
</script>

<template>
  <section
    v-if="member?.experience"
    class="container flex w-full flex-col items-center py-0 pb-[24px]"
  >
    <div class="flex w-full flex-col items-center">
      <UiSectionHeader :title="$t('professionalExperience')" />
      <div class="mx-auto w-full pt-[24px]">
        <p
          v-for="(para, idx) in (member?.experience || '').split(/\n\n+/)"
          :key="idx"
          class="mb-6 text-lg text-neutral-700"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </section>
</template>
