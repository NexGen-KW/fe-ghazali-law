<script setup lang="ts">
defineProps<{
  member?: {
    name?: string;
    role?: string;
    biography?: string;
    academic?: string[];
    experience?: string[];
    participations?: string[];
  };
}>();
</script>

<template>
  <div v-if="member" class="py-12">
    <div class="mx-auto max-w-4xl px-4">
      <h1 class="mb-4 text-3xl font-bold">{{ member.name }}</h1>
      <p class="mb-6 text-xl text-gray-600">{{ member.role }}</p>
      <div class="prose max-w-none">
        <p class="text-lg leading-relaxed">{{ member.biography }}</p>
      </div>
    </div>
  </div>
</template>
