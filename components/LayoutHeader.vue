<template>
  <header
    class="relative z-20 flex h-[111px] items-center justify-between border-b bg-transparent px-[81px]"
    style="border-bottom: 1px solid #797879"
  >
    <img src="/logo.svg" alt="Logo" class="h-[85px] w-auto object-contain" />

    <ul class="flex space-x-4">
      <template v-for="(item, index) in navigation" :key="index">
        <li>
          <NuxtLink
            :to="item.url"
            class="hover:text-gold-500 font-medium text-white capitalize transition-colors"
            :style="{
              color: $route.path === item.url ? 'var(--color-gold-500)' : '',
            }"
          >
            {{ $t(`breadcrumb.${item.label}`) }}
          </NuxtLink>
        </li>
      </template>
    </ul>

    <button
      type="button"
      @click="handleLocaleChange"
      class="flex items-center gap-2 text-white"
    >
      <span>{{ alternateLocale.symbol }}</span>
      <Icon name="ic:outline-language" size="24px" />
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
