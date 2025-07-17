<template>
  <section
    class="relative m-auto flex h-[100dvh] max-w-[1440px] flex-col px-8 pt-[40px] lg:px-4"
  >
    <!-- Back Button -->
    <button
      class="fixed bottom-15 left-[50%] z-50 flex w-fit -translate-x-1/2 items-center justify-center gap-2 rounded-lg bg-[#f7f5ef] px-4 py-3 text-[#3a2e13] shadow-sm transition hover:bg-[#ede9dd] focus:ring-2 focus:ring-[#a08c5b] focus:outline-none lg:hidden"
      @click="goBack"
    >
      <span v-if="!isRtl" class="mr-2">&larr;</span>
      <span v-else class="ml-2">&rarr;</span>
      {{ $t('backToServices') }}
    </button>

    <!-- Content Row: Sidebar + Main Content -->
    <div class="flex flex-col gap-8 md:flex-row">
      <!-- Sidebar -->
      <aside class="hidden w-full flex-shrink-0 md:w-64 lg:block">
        <div class="flex flex-col gap-2">
          <button
            v-for="svc in services"
            :key="svc.slug"
            @click="selectService(svc.slug)"
            :class="[
              'w-full rounded-none border px-4 py-5 text-center text-base transition',
              svc.slug === currentSlug
                ? 'border-[#3a2e13] bg-white font-semibold text-[#3a2e13]'
                : 'border-[#ede9dd] bg-white text-[#3a2e13] hover:bg-[#f7f5ef]',
            ]"
          >
            {{ svc.title }}
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <div v-if="service" class="service-details" ref="serviceDetails">
          <h1 class="mb-4 text-[32px] text-[#3a2e13]">
            {{ service.title }}
          </h1>
          <p class="mb-[24px] text-[20px] text-[#3a2e13]">
            {{ service.description }}
          </p>
          <div class="space-y-4">
            <p
              v-for="(detail, idx) in service.details"
              :key="idx"
              class="mb-[24px] text-[20px] text-[#3a2e13]"
            >
              {{ detail }}
            </p>
          </div>
        </div>
        <div v-else>Loading...</div>
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router';
import { useServices } from '~/composables/useServices';
import { computed, ref, nextTick, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  service: any;
  currentSlug: string;
}>();

const emit = defineEmits(['select', 'back']);
const router = useRouter();
const route = useRoute();
const { services } = useServices();
const { localeProperties } = useI18n();
const isRtl = computed(() => localeProperties.value.dir === 'rtl');

const serviceDetails = ref<HTMLElement | null>(null);

function isMobile() {
  return window.innerWidth < 768;
}

function selectService(slug: string) {
  router.push(`/services/${slug}`);
}

function goBack() {
  router.push({ name: 'services' });
}

onMounted(() => {
  if (route.query.scroll === '1' && isMobile() && serviceDetails.value) {
    nextTick(() => {
      serviceDetails.value?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Remove the scroll param for cleanliness
      const { scroll, ...rest } = route.query;
      router.replace({ query: rest });
    });
  }
});
</script>
