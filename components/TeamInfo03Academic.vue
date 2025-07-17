<script setup lang="ts">
defineProps<{ member?: { academic?: string } }>();
</script>

<template>
  <section
    v-if="member?.academic"
    class="container flex w-full flex-col items-center py-0 pb-[24px]"
  >
    <div class="flex w-full flex-col items-center">
      <UiSectionHeader :title="$t('academicQualifications')" />
      <div class="mx-auto w-full pt-[24px]">
        <p
          v-for="(para, idx) in (member?.academic || '').split(/\n\n+/)"
          :key="idx"
          class="mb-6 text-lg text-neutral-700"
        >
          {{ para }}
        </p>
      </div>
    </div>
  </section>
</template>
