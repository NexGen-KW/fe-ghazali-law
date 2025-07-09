<template>
  <div class="mt-12 mb-16 flex w-full justify-center">
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-[64px] sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="service-card relative flex min-h-[210px] min-w-[367px] flex-col justify-between overflow-hidden border-l border-[#e5e1d8] bg-[#f7f7f7] px-6 py-5 transition-colors duration-500"
      >
        <div>
          <h3 class="mb-2 font-semibold text-[#3a2e13]">{{ service.title }}</h3>
          <p class="text[16px] mb-4 text-[#3a2e13]">
            {{ service.description }}
          </p>
        </div>

        <NuxtLink
          :to="`/services/${service.slug}`"
          class="slide-overlay-btn relative mt-2 inline-block w-[116px] overflow-hidden px-[8px] py-2 font-semibold text-[#a08c5b] transition"
        >
          <span>{{ $t('readMore') }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useServices } from '~/composables/useServices';

const { services } = useServices();
</script>

<style scoped>
.slide-overlay-btn {
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.slide-overlay-btn::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 100%;
  background: #a08c5b; /* Overlay color */
  z-index: 1;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-overlay-btn:hover::before {
  width: 100%;
}

.slide-overlay-btn span {
  position: relative;
  z-index: 2;
  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-overlay-btn:hover span {
  color: #fff; /* Text color on hover */
}
</style>
