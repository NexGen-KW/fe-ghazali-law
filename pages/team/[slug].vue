<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`team-${slug}`, () => {
  return queryCollection('team').path(`/team/${slug}`).first();
});
</script>

<template>
  <LayoutMain>
    <TeamInfo01Hero :member="post" />
    <TeamInfo02Bio :member="post" />
    <TeamInfo03Academic :member="post" />
    <TeamInfo04Experience :member="post" />
    <TeamInfo05Participation :member="post" />
  </LayoutMain>
</template>
