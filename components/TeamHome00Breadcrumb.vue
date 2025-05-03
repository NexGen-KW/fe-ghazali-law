<template>
  <UiBreadcrumb :breadcrumb />
</template>

<script lang="ts" setup>
const breadcrumb: IBreadcrumb = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'team',
    url: '/team',
  },
];
</script>
