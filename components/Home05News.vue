<template>
  <section
    class="flex w-full flex-col items-center justify-center bg-[#f7f7f7] py-16"
  >
    <UiHeaderScale t="heroDifference" />
    <h2>Our Latest News</h2>
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="item in news"
        :key="item.title"
        class="mx-auto flex min-h-[552px] w-full max-w-[367px] flex-col rounded-md border border-gray-100 bg-white shadow-md"
      >
        <img
          loading="lazy"
          :src="item.image"
          :alt="item.title"
          class="mb-4 h-[242px] w-full rounded-t-md object-cover"
        />
        <div class="flex h-full flex-col justify-between p-6">
          <div>
            <h3>{{ item.title }}</h3>
            <p class="mb-4 text-gray-500">{{ item.description }}</p>
            <p class="mb-6 font-semibold">{{ item.date }}</p>
          </div>
          <BaseButton class="w-full">
            {{ $t('readMore') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
const news = [
  {
    image: 'kuwait1.jpg',
    title: 'RMG Hosts Governance Seminar',
    description: 'Leaders gathered to explore evolving compliance standards.',
    date: '23 Mars, 2025',
  },
  {
    image: 'kuwait2.jpg',
    title: 'Rawan Al-Ghazali joins IMF Panel.',
    description: 'Ms. Al-Ghazali advises on legislation for emerging markets.',
    date: '23 Mars, 2025',
  },
  {
    image: 'kuwait3.jpg',
    title: 'Update on Investment Law',
    description: 'Latest changes to Kuwait’s FDI regulations explained.',
    date: '23 Mars, 2025',
  },
];
</script>
