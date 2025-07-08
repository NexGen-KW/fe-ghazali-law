<script setup lang="ts">
defineProps<{ member?: { academic?: string } }>();
</script>

<template>
  <section
    v-if="member?.academic"
    class="flex w-full flex-col items-center px-2 py-12"
  >
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          Academic Qualifications
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
      <div class="mx-auto w-full max-w-[1140px] px-4">
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
