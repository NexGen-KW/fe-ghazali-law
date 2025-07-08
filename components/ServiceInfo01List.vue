<template>
  <div class="flex flex-col gap-8 md:flex-row">
    <!-- Sidebar -->
    <aside class="w-full flex-shrink-0 md:w-64">
      <button
        class="mb-6 flex items-center text-[#3a2e13] hover:underline"
        @click="goBack"
      >
        <span class="mr-2">&larr;</span> Back To Services
      </button>
      <div class="flex flex-col gap-2">
        <button
          v-for="svc in services"
          :key="svc.slug"
          @click="selectService(svc.slug)"
          :class="[
            'rounded border px-4 py-2 text-left transition',
            svc.slug === currentSlug
              ? 'border-[#3a2e13] bg-[#f7f5ef] font-semibold'
              : 'border-[#ede9dd] bg-white hover:bg-[#f7f5ef]',
          ]"
        >
          {{ svc.title }}
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1">
      <div v-if="service" class="service-details">
        <h1 class="font-marcellusSC mb-4 text-3xl text-[#3a2e13]">
          {{ service.title }}
        </h1>
        <p class="mb-6 text-lg text-[#3a2e13]">{{ service.description }}</p>
        <div class="space-y-4">
          <p
            v-for="(detail, idx) in service.details"
            :key="idx"
            class="text-[#3a2e13]"
          >
            {{ detail }}
          </p>
        </div>
      </div>
      <div v-else>Service not found.</div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const props = defineProps<{
  service?: {
    title: string;
    description: string;
    details: string[];
  } | null;
  services: Array<{
    slug: string;
    title: string;
  }>;
  currentSlug: string;
}>();

const emit = defineEmits(['select', 'back']);

const router = useRouter();

function selectService(slug: string) {
  router.push({ name: 'services', params: { slug } });
}

function goBack() {
  router.push({ name: 'services' });
}
</script>
