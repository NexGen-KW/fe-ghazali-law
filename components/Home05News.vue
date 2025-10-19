<template>
  <section
    class="flex w-full flex-col items-center justify-center bg-[#f7f7f7] py-16"
  >
    <UiHeaderScale t="heroDifference" />
    <h2>{{ $t('news.heading') }}</h2>
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="item in news"
        :key="item.key"
        class="mx-auto flex min-h-[552px] w-full max-w-[367px] flex-col rounded-md border border-gray-100 bg-white shadow-md"
      >
        <img
          loading="lazy"
          :src="item.image"
          :alt="$t(item.titleKey)"
          class="mb-4 h-[242px] w-full rounded-t-md object-cover"
        />
        <div class="flex h-full flex-col justify-between p-6">
          <div>
            <h3>{{ $t(item.titleKey) }}</h3>
            <p class="mb-4 text-gray-500">{{ $t(item.descriptionKey) }}</p>
            <p class="mb-6 font-semibold">{{ $t(item.dateKey) }}</p>
          </div>
          <BaseButton class="w-full">
            {{ $t('readMore') }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import BaseButton from '~/components/ui/BaseButton.vue';
const news = [
  {
    key: 'governance',
    image: 'kuwait1.jpg',
    titleKey: 'news.items.governance.title',
    descriptionKey: 'news.items.governance.description',
    dateKey: 'news.items.governance.date',
  },
  {
    key: 'imf',
    image: 'kuwait2.jpg',
    titleKey: 'news.items.imf.title',
    descriptionKey: 'news.items.imf.description',
    dateKey: 'news.items.imf.date',
  },
  {
    key: 'investment',
    image: 'kuwait3.jpg',
    titleKey: 'news.items.investment.title',
    descriptionKey: 'news.items.investment.description',
    dateKey: 'news.items.investment.date',
  },
];
</script>
