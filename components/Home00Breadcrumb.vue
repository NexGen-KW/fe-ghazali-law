<template>
  <UiBreadcrumb :breadcrumb />
</template>

<script lang="ts" setup>
const breadcrumb: IBreadcrumb = [
  {
    label: 'home',
    url: '/',
  },
];
</script>
