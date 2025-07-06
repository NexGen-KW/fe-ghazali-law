<template>
  <header
    class="relative z-20 flex h-[111px] items-center justify-between border-b bg-transparent px-4 px-[81px] lg:px-[81px]"
    style="border-bottom: 1px solid #797879"
  >
    <img src="/logo.svg" alt="Logo" class="h-[85px] w-auto object-contain" />

    <!-- Desktop Navigation -->
    <ul class="hidden space-x-4 lg:flex">
      <template v-for="(item, index) in navigation" :key="index">
        <li>
          <NuxtLink
            :to="item.url"
            class="hover:text-gold-500 font-medium text-white capitalize transition-colors"
            :style="{
              color: route.path === item.url ? 'var(--color-gold-500)' : '',
            }"
          >
            {{ $t(`breadcrumb.${item.label}`) }}
          </NuxtLink>
        </li>
      </template>
    </ul>

    <!-- Desktop Language Switcher -->
    <button
      type="button"
      @click="handleLocaleChange"
      class="hidden items-center gap-2 text-white lg:flex"
    >
      <span>{{ alternateLocale.symbol }}</span>
      <Icon name="ic:outline-language" size="24px" />
    </button>

    <!-- Mobile Burger Menu Button -->
    <button
      type="button"
      @click="toggleMobileMenu"
      class="flex items-center gap-2 text-white lg:hidden"
    >
      <Icon
        :name="isMobileMenuOpen ? 'ic:outline-close' : 'ic:outline-menu'"
        size="24px"
        class="transition-transform duration-300"
      />
    </button>
  </header>

  <!-- Mobile Navigation Overlay -->
  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-0 z-30 lg:hidden"
    @click="closeMobileMenu"
  >
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Mobile Menu Panel -->
    <div
      class="absolute top-0 right-0 h-full w-80 transform bg-white shadow-lg transition-transform duration-300"
      @click.stop
    >
      <div class="flex h-full flex-col">
        <!-- Mobile Menu Header -->
        <div
          class="flex items-center justify-between border-b border-gray-200 p-6"
        >
          <img
            src="/logo.svg"
            alt="Logo"
            class="h-12 w-auto cursor-pointer object-contain transition-transform duration-200 hover:scale-105"
          />
          <button
            type="button"
            @click="closeMobileMenu"
            class="rounded-lg p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 hover:text-gray-800"
          >
            <Icon name="ic:outline-close" size="24px" />
          </button>
        </div>

        <!-- Mobile Navigation Links -->
        <nav class="flex-1 p-6">
          <ul class="space-y-4">
            <template v-for="(item, index) in navigation" :key="index">
              <li>
                <NuxtLink
                  :to="item.url"
                  @click="closeMobileMenu"
                  class="hover:text-gold-500 block rounded-lg px-4 py-3 font-medium text-gray-800 capitalize transition-colors"
                  :class="{
                    'bg-gold-500 text-white': route.path === item.url,
                    'hover:bg-gray-100': route.path !== item.url,
                  }"
                >
                  {{ $t(`breadcrumb.${item.label}`) }}
                </NuxtLink>
              </li>
            </template>
          </ul>
        </nav>

        <!-- Mobile Language Switcher -->
        <div class="border-t border-gray-200 p-6">
          <button
            type="button"
            @click="handleLocaleChange"
            class="hover:text-gold-500 flex items-center gap-2 text-gray-800 transition-colors"
          >
            <span>{{ alternateLocale.symbol }}</span>
            <Icon name="ic:outline-language" size="20px" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales, setLocale } = useI18n();
const route = useRoute();

const alternateLocale = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)[0];
});

const handleLocaleChange = () => {
  console.log('Switching locale to:', alternateLocale.value.code);
  setLocale(alternateLocale.value.code);
};

// Mobile menu state
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

// Close mobile menu when route changes
watch(
  () => route.path,
  () => {
    if (isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  },
);

// Close mobile menu on escape key
onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen.value) {
      closeMobileMenu();
    }
  };

  document.addEventListener('keydown', handleEscape);

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
  });
});
</script>
