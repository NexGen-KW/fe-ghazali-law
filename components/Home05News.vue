<template>
  <section
    class="flex w-full flex-col items-center justify-center bg-[#f7f7f7]"
  >
    <UiHeaderScale t="newsTitle" />
    <h2>{{ t('newsSectionTitle') }}</h2>
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="item in news"
        :key="item.title"
        class="mx-auto flex min-h-[552px] w-full max-w-[367px] flex-col rounded-md border border-gray-100 bg-white shadow-md"
      >
        <img
          loading="lazy"
          :src="`/fe-ghazali-law/${item.image}`"
          :alt="item.title"
          class="mb-4 h-[242px] w-full rounded-t-md object-cover"
        />
        <div class="flex h-full flex-col justify-between p-6">
          <div>
            <h3>{{ item.title }}</h3>
            <p class="mb-4 text-gray-500">{{ item.description }}</p>
            <p class="mb-6 font-semibold">{{ item.date }}</p>
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
const { t } = useI18n();

const news = computed(() => [
  {
    image: t('news.0.image'),
    title: t('news.0.title'),
    description: t('news.0.description'),
    date: t('news.0.date'),
  },
  {
    image: t('news.1.image'),
    title: t('news.1.title'),
    description: t('news.0.description'),
    date: t('news.1.date'),
  },
  {
    image: t('news.2.image'),
    title: t('news.2.title'),
    description: t('news.0.description'),
    date: t('news.2.date'),
  },
]);
</script>
