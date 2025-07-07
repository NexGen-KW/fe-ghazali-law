<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useAsyncData } from '#app';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  academic: string[];
  experience: string[];
  participations: string[];
}

const route = useRoute();
const slug = route.params.slug as string;

const { data: member } = await useAsyncData<TeamMember>(`member-${slug}`, () =>
  queryContent(`/team/${slug}`).findOne(),
);

const { data: allMembers } = await useAsyncData('all-team', () =>
  queryContent('/team').find(),
);
console.log(allMembers);
console.log(member);
</script>

<template>
  <LayoutMain>
    <div v-if="member">
      <h1>{{ member.name }}</h1>
      <p>{{ member.role }}</p>
      <p>{{ member.bio }}</p>

      <h2>Academic</h2>
      <ul>
        <li v-for="(item, i) in member.academic" :key="i">{{ item }}</li>
      </ul>

      <h2>Experience</h2>
      <ul>
        <li v-for="(item, i) in member.experience" :key="i">{{ item }}</li>
      </ul>

      <h2>Participations</h2>
      <ul>
        <li v-for="(item, i) in member.participations" :key="i">{{ item }}</li>
      </ul>
    </div>
  </LayoutMain>
</template>
