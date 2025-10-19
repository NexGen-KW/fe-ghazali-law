<template>
  <section
    class="relative m-auto flex h-[100vh] max-w-[1440px] flex-col pt-[40px]"
  >
    <!-- Back Button -->
    <button
      class="mb-8 flex w-fit items-center text-[#3a2e13] hover:underline"
      @click="goBack"
    >
      <span class="mr-2">&larr;</span> {{ $t('servicesInfo.backButton') }}
    </button>

    <!-- Content Row: Sidebar + Main Content -->
    <div class="flex flex-col gap-8 md:flex-row">
      <!-- Sidebar -->
      <aside class="w-full flex-shrink-0 md:w-64">
        <div class="flex flex-col gap-2">
          <button
            v-for="svc in [...services].reverse()"
            :key="svc.slug"
            @click="selectService(svc.slug)"
            :class="[
              'font-montserrat w-full rounded-none border px-4 py-5 text-center text-base transition',
              svc.slug === currentSlug
                ? 'border-[#3a2e13] bg-white font-semibold text-[#3a2e13]'
                : 'border-[#ede9dd] bg-white font-normal text-[#3a2e13] hover:bg-[#f7f5ef]',
            ]"
          >
            {{ locale === 'ar' && svc.title_ar ? svc.title_ar : svc.title }}
          </button>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1">
        <div v-if="service" class="service-details">
          <h1 class="font-marcellus mb-4 text-[32px] text-[#3a2e13]">
            {{
              locale === 'ar' && service.title_ar
                ? service.title_ar
                : service.title
            }}
          </h1>
          <p class="mb-[24px] text-[20px] text-[#3a2e13]">
            {{
              locale === 'ar' && service.description_ar
                ? service.description_ar
                : service.description
            }}
          </p>
          <div class="space-y-4">
            <p
              v-for="(detail, idx) in locale === 'ar' && service.details_ar
                ? service.details_ar
                : service.details"
              :key="idx"
              class="mb-[24px] text-[20px] text-[#3a2e13]"
            >
              {{ detail }}
            </p>
          </div>
        </div>
        <div v-else>{{ $t('servicesInfo.notFound') }}</div>
      </main>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const props = defineProps<{
  service?: {
    title: string;
    title_ar?: string;
    description: string;
    description_ar?: string;
    details: string[];
    details_ar?: string[];
  } | null;
  services: Array<{
    slug: string;
    title: string;
    title_ar?: string;
  }>;
  currentSlug: string;
}>();

const emit = defineEmits(['select', 'back']);

const router = useRouter();

function selectService(slug: string) {
  router.push(`/services/${slug}`);
}

function goBack() {
  router.push({ name: 'services' });
}
</script>
