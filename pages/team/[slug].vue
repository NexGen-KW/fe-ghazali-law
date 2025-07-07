<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`team-${slug}`, () => {
  return queryCollection('team').path(`/team/${slug}`).first();
});

const sections = [
  { label: 'Biography', key: 'biography', type: 'string' },
  { label: 'Academic Qualifications', key: 'academic', type: 'array' },
  { label: 'Professional Experience', key: 'experience', type: 'array' },
  {
    label: 'Legislative and Academic Participations',
    key: 'participations',
    type: 'array',
  },
];
</script>

<template>
  <LayoutMain>
    <section class="flex w-full flex-col items-center px-2 py-12">
      <div
        v-for="section in sections"
        :key="section.key"
        class="mb-10 flex w-full flex-col items-center"
      >
        <div class="mb-4 flex w-full max-w-6xl items-center">
          <div class="border-gold-200 flex-1 border-t"></div>
          <h2
            class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
          >
            {{ section.label }}
          </h2>
          <div class="border-gold-200 flex-1 border-t"></div>
        </div>
        <div class="mx-auto w-full max-w-4xl px-4">
          <template
            v-if="section.type === 'string' && post && post[section.key]"
          >
            <p class="mb-8 text-lg text-neutral-700">{{ post[section.key] }}</p>
          </template>
          <template
            v-else-if="
              section.type === 'array' &&
              post &&
              post[section.key] &&
              post[section.key].length
            "
          >
            <ul class="mb-8 list-inside list-disc text-lg text-neutral-700">
              <li v-for="(item, idx) in post[section.key]" :key="idx">
                {{ item }}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </section>
  </LayoutMain>
</template>
