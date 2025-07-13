<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="ltr:font-marcellus px-8 text-center whitespace-nowrap text-neutral-900"
        >
          {{ $t('teamPage.localDepartment') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>
    <div
      class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      style="justify-items: center"
    >
      <div
        v-for="member in members"
        :key="member.name"
        class="relative flex flex-col items-center"
      >
        <NuxtLink :to="`/team/${member.slug}`">
          <img
            :src="member.img"
            :alt="member.name"
            class="h-[420px] w-[350px] object-cover"
          />
        </NuxtLink>
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
    name: t('teamPage.localMembers.0.name'),
    img: t('teamPage.localMembers.0.img'),
    slug: t('teamPage.localMembers.0.slug'),
  },
  {
    name: t('teamPage.localMembers.1.name'),
    img: t('teamPage.localMembers.1.img'),
    slug: t('teamPage.localMembers.1.slug'),
  },
]);
</script>
