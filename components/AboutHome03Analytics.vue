<template>
  <div class="font-marcellus border-t border-[#D6CBA1] bg-white py-12">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-4"
    >
      <div v-for="item in analytics" :key="item.title">
        <div class="mb-2 text-5xl font-light text-[#C6B16B] md:text-6xl">
          {{ item.number }}
        </div>
        <div class="mb-1 text-lg font-semibold">{{ item.title }}</div>
        <div class="text-base text-gray-800" v-html="item.description"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const analytics = [
  {
    number: '+30',
    title: 'Years of Experience',
    description: 'Delivering trusted legal<br />solutions since 1992',
  },
  {
    number: '+50',
    title: 'International Clients',
    description: 'Fortune 500 companies<br />and global institutions',
  },
  {
    number: '+10',
    title: 'Core Practice Areas',
    description: 'Corporate, commercial,<br />investment, and more.',
  },
  {
    number: '+4',
    title: 'Jurisdictions Covered',
    description: 'Advising across the US, UK,<br />GCC, and beyond',
  },
];
</script>
