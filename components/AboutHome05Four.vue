<template>
  <div class="bg-[#F7F7F8] py-10">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-4"
    >
      <div v-for="item in features" :key="item.key">
        <div
          class="font-marcellus mb-2 text-xl font-normal text-[#3B371F] md:text-2xl"
        >
          {{ $t(item.titleKey) }}
        </div>
        <div class="text-base text-[#3B371F]">
          {{ $t(item.descriptionKey) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const features = [
  {
    key: 'crossBorder',
    titleKey: 'aboutFeatures.crossBorder.title',
    descriptionKey: 'aboutFeatures.crossBorder.description',
  },
  {
    key: 'legalCoverage',
    titleKey: 'aboutFeatures.legalCoverage.title',
    descriptionKey: 'aboutFeatures.legalCoverage.description',
  },
  {
    key: 'litigation',
    titleKey: 'aboutFeatures.litigation.title',
    descriptionKey: 'aboutFeatures.litigation.description',
  },
  {
    key: 'clientTrust',
    titleKey: 'aboutFeatures.clientTrust.title',
    descriptionKey: 'aboutFeatures.clientTrust.description',
  },
];
</script>
