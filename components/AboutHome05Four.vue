<template>
  <div class="bg-[#F7F7F8] py-10">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-4"
    >
      <div v-for="item in features" :key="item.title">
        <div
          class="font-marcellus mb-2 text-xl font-normal text-[#3B371F] md:text-2xl"
        >
          {{ item.title }}
        </div>
        <div class="text-base text-[#3B371F]">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const features = [
  {
    title: 'Cross-Border Expertise',
    description: 'Legal gateway for international companies entering Kuwait',
  },
  {
    title: 'Legal Coverage',
    description:
      'We offer legal coverage for finance, healthcare, and real estate.',
  },
  {
    title: 'Litigation & Arbitration',
    description: 'Strong advocacy in local courts and international forums',
  },
  {
    title: 'Established Client Trust',
    description: 'Serving multinational corporations and government entities',
  },
];
</script>
