<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="ltr:font-marcellus px-8 text-center whitespace-nowrap text-neutral-900"
        >
          {{ $t('teamPage.administrativeTeam') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>

    <div
      class="grid w-full max-w-6xl gap-6"
      style="
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        justify-items: center;
      "
    >
      <div
        v-for="member in members"
        :key="member.name"
        class="relative flex w-full max-w-[300px] flex-col items-center"
      >
        <img
          :src="member.img"
          :alt="member.name"
          class="h-[420px] w-full object-cover shadow"
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-4 text-center"
        >
          <span class="text-xl font-medium text-white">{{ member.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from '#imports';
import { computed } from 'vue';

const { t } = useI18n();

const members = computed(() => [
  {
    name: t('teamPage.administrativeTeamMembers.0.name'),
    img: '3.jpg',
    slug: 'mahmoud-mansour',
  },
  {
    name: t('teamPage.administrativeTeamMembers.1.name'),
    img: '2.jpg',
    slug: 'zahida-hassan',
  },
  {
    name: t('teamPage.administrativeTeamMembers.2.name'),
    img: '8.jpg',
    slug: 'amir-elmadboli',
  },
  {
    name: t('teamPage.administrativeTeamMembers.3.name'),
    img: '11.jpg',
    slug: 'ahmed-al-tanahi',
  },
  {
    name: t('teamPage.administrativeTeamMembers.4.name'),
    img: '12.jpg',
    slug: 'ahmed-abul-wafa',
  },
]);
</script>
