<template>
  <section class="flex w-full flex-col items-center justify-center py-12">
    <HeaderScale :t="$t('team.subtitle')" class="mb-4" />
    <h2>
      {{ $t('team.title') }}
    </h2>
    <div
      class="mx-auto mb-8 grid w-full max-w-[1140px] grid-cols-1 justify-center justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="member in members"
        :key="member.name"
        class="relative flex h-[373px] max-h-[373px] w-[273px] flex-col items-center justify-end overflow-hidden shadow-lg"
      >
        <NuxtLink
          :to="`/team/${slugify(member.name)}`"
          class="block h-full w-full"
        >
          <img
            :src="member.img"
            :alt="member.name"
            class="h-full w-full object-cover object-top"
          />
        </NuxtLink>
        <div
          class="absolute bottom-0 left-0 w-full bg-black/35 p-4 text-center text-lg font-medium text-white"
        >
          {{ member.name }}
        </div>
      </div>
    </div>
    <BaseButton>
      <NuxtLink to="/team">
        {{ $t('Meet All The Team') }}
      </NuxtLink></BaseButton
    >
  </section>
</template>

<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const members = [
  {
    name: 'Rawan Mishari Al-Ghazali',
    img: 'member1.jpg',
    slug: slugify('Rawan Mishari Al-Ghazali'),
  },
  {
    name: 'Bader Mishari Al-Ghazali',
    img: '5.jpg',
    slug: slugify('Bader Mishari Al-Ghazali'),
  },
  {
    name: 'Nada Bourahmah',
    img: '4.jpg',
    slug: slugify('Nada Bourahmah'),
  },
  {
    name: 'Saoud Al Jasem',
    img: '9.jpg',
    slug: slugify('Saoud Al Jasem'),
  },
];
</script>
