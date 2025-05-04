<template>
  <header class="container my-0.5 flex h-24 items-center justify-between">
    <img src="/logo.png" alt="Logo" class="-ms-5" />

    <ul class="flex space-x-4">
      <template v-for="(item, index) in navigation" :key="index">
        <li>
          <NuxtLink
            :to="item.url"
            class="font-medium capitalize"
            :class="{ 'text-gold-700': $route.path === item.url }"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </template>
    </ul>

    <button
      type="button"
      @click="handleLocaleChange"
      class="flex items-center gap-1"
    >
      <Icon name="ic:outline-language" size="24px" />

      <span>{{ alternateLocale.symbol }}</span>
    </button>
  </header>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();

const alternateLocale = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)[0];
});

const handleLocaleChange = () => {
  console.log('Switching locale to:', alternateLocale.value.code);

  setLocale(alternateLocale.value.code);
};
</script>
