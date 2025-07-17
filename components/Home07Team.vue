<script setup lang="ts">
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
import { useAsyncData } from '#app';
import { queryCollection } from '#imports';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Helper to extract slug from content id
function getSlugFromId(id: string): string {
  return id
    .replace(/^team\/team\//, '')
    .replace(/\.ar\.md$/, '')
    .replace(/\.md$/, '');
}

// List of members' slugs to show
const featuredSlugs = [
  'rawan-mishari-al-ghazali',
  'bader-mishari-al-ghazali',
  'nada-bourahmah',
  'saoud-al-jasem',
];

const { locale } = useI18n();

const { data: allMembers } = await useAsyncData('team', () =>
  (queryCollection as any)('team').all(),
);

// For each featured slug, pick the correct file for the current locale
const members = computed(() => {
  const all = (allMembers.value as any[]) || [];
  return featuredSlugs
    .map((slug) => {
      let member = null;
      if (locale.value === 'ar') {
        member = all.find((m) => m.id.endsWith(`${slug}.ar.md`));
      }
      if (!member) {
        member = all.find(
          (m) => m.id.endsWith(`${slug}.md`) && !m.id.endsWith('.ar.md'),
        );
      }
      return member
        ? {
            name: member.name,
            img: member.image,
            slug,
          }
        : undefined;
    })
    .filter((m): m is { name: string; img: string; slug: string } => Boolean(m))
    .reverse();
});
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center">
    <HeaderScale :t="$t('team.subtitle')" class="mb-4" />
    <h2>
      {{ $t('team.title') }}
    </h2>
    <div
      class="mx-auto mb-8 grid w-full max-w-[1140px] grid-cols-1 justify-center justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      <div
        v-for="member in members.reverse()"
        :key="member.slug"
        class="relative flex h-[373px] max-h-[373px] max-w-[273px] flex-col items-center justify-end overflow-hidden shadow-lg"
      >
        <NuxtLink :to="`/team/${member.slug}`" class="block h-full w-full">
          <img
            :src="`/fe-ghazali-law/${member.img}`"
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
        {{ $t('team.meetCTA') }}
      </NuxtLink></BaseButton
    >
  </section>
</template>
