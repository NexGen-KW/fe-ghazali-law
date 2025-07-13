<template>
  <div class="bg-white py-16 text-center">
    <!-- Icon -->
    <div class="mb-4 flex justify-center">
      <img src="/logo.svg" alt="Antlers" class="w-20" />
    </div>
    <!-- Heading -->
    <h2 class="mb-4 text-center text-3xl font-normal md:text-4xl">
      {{ t('aboutJourneyTitle') }}
    </h2>
    <!-- Subheading -->
    <p class="mx-auto mb-10 max-w-2xl text-base text-gray-700">
      {{ t('aboutJourneyParagraph') }}
    </p>
    <!-- Enhanced Interactive Timeline -->
    <div
      class="mx-auto mb-10 flex max-w-3xl flex-col items-center justify-center"
    >
      <div class="relative w-full px-2 md:px-8" style="min-height: 140px">
        <!-- Alternating year labels and timeline -->
        <div class="relative flex w-full items-center">
          <div
            class="absolute top-1/2 right-0 left-0 z-0 h-0.5 bg-[#3B371F]/60"
          ></div>
          <div
            v-for="(milestone, idx) in milestones"
            :key="'dot-' + milestone.year"
            class="relative z-10 flex w-1/4 flex-col items-center"
          >
            <!-- Year label above for even, below for odd -->
            <span
              v-if="idx % 2 === 0"
              :class="[
                'font-markazi mb-2 text-base transition-all duration-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
                idx === activeIndex
                  ? 'font-bold text-[#3B371F]'
                  : 'text-[#3B371F]/80',
              ]"
            >
              {{ milestone.year }}
            </span>
            <span v-else style="height: 32px"></span>
            <!-- Vertical line from year to dot -->
            <span class="block h-6 w-px bg-[#3B371F]/60"></span>
            <button
              class="focus:outline-none"
              @click="selectMilestone(idx)"
              aria-label="Select year"
            >
              <span
                :class="[
                  'block h-3.5 w-3.5 rounded-full border-2 transition-all duration-300',
                  idx === activeIndex
                    ? 'scale-110 border-[#e0b354] bg-[#e0b354] shadow-lg'
                    : 'border-[#3B371F]/60 bg-white',
                ]"
              ></span>
            </button>
            <span class="block h-6 w-px bg-[#3B371F]/60"></span>
            <!-- Year label below for odd, above for even -->
            <span
              v-if="idx % 2 === 1"
              :class="[
                'font-markazi mt-2 text-base transition-all duration-300 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
                idx === activeIndex
                  ? 'font-bold text-[#3B371F]'
                  : 'text-[#3B371F]/80',
              ]"
            >
              {{ milestone.year }}
            </span>
            <span v-else style="height: 32px"></span>
          </div>
        </div>
      </div>
    </div>
    <!-- Milestone card -->
    <div
      class="mx-auto mb-4 max-w-3xl border border-[#F3EEDC] bg-white px-4 py-10 md:px-16"
    >
      <div
        class="font-markazi mb-2 text-2xl font-medium text-[#3B371F] md:text-3xl md:text-[48px]"
      >
        {{ milestones[activeIndex].year }}
      </div>
      <div class="text-base text-[#3B371F] md:text-lg">
        {{ milestones[activeIndex].description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const milestones = computed(() => [
  {
    year: t('aboutJourney.0.year'),
    description: t('aboutJourney.0.description'),
  },
  {
    year: t('aboutJourney.1.year'),
    description: t('aboutJourney.1.description'),
  },
  {
    year: t('aboutJourney.2.year'),
    description: t('aboutJourney.2.description'),
  },
  {
    year: t('aboutJourney.3.year'),
    description: t('aboutJourney.3.description'),
  },
]);

const activeIndex = ref(0);
function selectMilestone(idx: number) {
  activeIndex.value = idx;
}
</script>

<style scoped></style>
