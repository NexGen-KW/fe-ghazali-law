<script setup lang="ts">
const route = useRoute();
const { locale } = useI18n();

const slug = computed(() => route.params.slug);
const post = ref(null);
const loading = ref(true);
const error = ref<unknown | null>(null);

async function fetchMember() {
  loading.value = true;
  error.value = null;
  try {
    // Use locale-specific file path
    const filePath =
      locale.value === 'ar' ? `/team/${slug.value}.ar` : `/team/${slug.value}`;
    post.value = await (queryCollection as any)('team').path(filePath).first();
    // console.log('Fetched member:', post.value);
    // console.log('Current locale:', locale.value);
    // console.log('File path used:', filePath);
  } catch (e) {
    error.value = e as unknown;
    post.value = null;
  } finally {
    loading.value = false;
  }
}

watch([locale, slug], fetchMember, { immediate: true });
</script>

<template>
  <LayoutMain>
    <template v-if="loading">
      <div>Loading...</div>
    </template>
    <template v-else-if="error">
      <div class="text-red-500">Error loading member data.</div>
    </template>
    <template v-else-if="post">
      <TeamInfo01Hero :member="post" />
      <TeamInfo02Bio :member="post" />
      <TeamInfo03Academic :member="post" />
      <TeamInfo04Experience :member="post" />
      <TeamInfo05Participation :member="post" />
    </template>
    <template v-else>
      <div>Member not found.</div>
    </template>
  </LayoutMain>
</template>
