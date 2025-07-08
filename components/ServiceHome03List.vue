<template>
  <div class="mt-12 mb-16 flex w-full justify-center">
    <div
      class="grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="service-card relative min-w-[367px] overflow-hidden border-l border-[#e5e1d8] bg-[#f7f7f7] px-6 pt-5 transition-colors duration-500"
      >
        <h3 class="mb-2 font-semibold text-[#3a2e13]">{{ service.title }}</h3>
        <p class="mb-4 text-[#3a2e13]">{{ service.description }}</p>
        <NuxtLink
          :to="`/services/${slugify(service.title)}`"
          class="mt-2 inline-block rounded px-6 py-2 font-semibold text-[#a08c5b] transition hover:brightness-110"
        >
          Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const services = [
  {
    title: 'Trade - Commercial Field',
    description:
      'Legal support for trade agreements and cross-border transactions.',
  },
  {
    title: 'Corprate Field',
    description:
      'We provide legal support for company formation and governance.',
  },
  {
    title: 'Banking Field',
    description: 'Advising on banking regulations and compliance in Kuwait.',
  },
  {
    title: 'Investment Field',
    description:
      'Legal guidance for secure and strategic investments in Kuwait',
  },
  {
    title: 'Intellectual Property Field',
    description:
      'Safeguarding your trademarks and copyrights with legal expertise.',
  },
  {
    title: 'Contracting & Real-Estate Field',
    description:
      'Legal support for real estate, construction, and development.',
  },
  {
    title: 'Arbitration Field',
    description:
      'Resolving disputes efficiently through expert-led arbitration proceedings',
  },
  {
    title: 'Energy Field',
    description:
      "Support for energy projects and investment in Kuwait's energy sector.",
  },
  {
    title: 'Taxation',
    description: 'Advising on tax compliance to optimize your operations.',
  },
];
</script>
