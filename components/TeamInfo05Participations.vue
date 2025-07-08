<script setup lang="ts">
defineProps<{
  member?: {
    participations?: string[];
  };
}>();
</script>

<template>
  <div
    v-if="member?.participations && member.participations.length > 0"
    class="bg-gray-50 py-12"
  >
    <div class="mx-auto max-w-4xl px-4">
      <h2 class="mb-8 text-center text-3xl font-bold">
        Legislative and Academic Participations
      </h2>
      <div class="grid gap-6">
        <div
          v-for="(participation, index) in member.participations"
          :key="index"
          class="rounded-lg border-l-4 border-green-500 bg-white p-6 shadow-sm"
        >
          <p class="text-lg font-medium text-gray-900">{{ participation }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
