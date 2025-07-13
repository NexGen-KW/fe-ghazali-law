<template>
  <div class="mt-12 mb-16 flex w-full justify-center">
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[64px]"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="service-card relative flex min-h-[210px] w-full flex-col justify-between overflow-hidden border-[#EBE3C7] px-4 py-5 text-start transition-colors duration-500 sm:px-6 ltr:border-l rtl:border-r"
      >
        <div class="relative z-10">
          <h3
            class="mb-2 font-semibold text-[#3a2e13] transition-colors duration-300"
          >
            {{ service.title }}
          </h3>
          <p class="mb-4 text-[#3a2e13] transition-colors duration-300">
            {{ service.description }}
          </p>
        </div>

        <NuxtLink
          :to="`/services/${service.slug}`"
          class="slide-overlay-btn relative z-10 mt-2 inline-block w-fit overflow-hidden px-2 py-2 font-semibold text-[#a08c5b] transition sm:w-[116px] sm:px-[8px]"
        >
          <span class="text-sm sm:text-base">{{ $t('readMore') }}</span>
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
.service-card {
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f3f3f5;
  z-index: 0;
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover::before {
  left: 0;
}

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
