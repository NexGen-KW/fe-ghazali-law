<template>
  <section
    id="services"
    class="relative mt-[-111px] flex h-[35vh] items-center justify-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat pt-[170px]"
  >
    <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
      <h1 class="font-marcellusSC text-[32px]">
        {{ $t('OUR SERVICES') }}
      </h1>
      <p class="text-shadow-custom text-white">
        {{
          $t(
            'We offer tailored corporate and commercial legal services, combining in-depth knowledge of Kuwait’s legal system with a global perspective to support your business at every stage.',
          )
        }}
      </p>
    </div>
  </section>
  <section class="mt-8 flex w-full flex-col items-center">
    <div class="w-full max-w-[1042px] text-center">
      <h2 class="font-marcellus mb-4 text-center text-[#3a2e13]">
        Services Presented
      </h2>
      <hr class="mb-6 border-t border-[#e5e1d8]" />
      <p class="mb-6 text-[#3a2e13]">
        We offer a range of corporate and commercial legal services for local
        and international clients. Our team combines legal expertise with
        strategic insight to deliver solutions that protect your interests and
        support your business objectives. Whether launching a new venture or
        navigating regulatory challenges, we are here to guide you.
      </p>
      <hr class="border-t border-[#e5e1d8]" />
    </div>
  </section>
  <section class="mt-12 mb-16 flex w-full justify-center">
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
  </section>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';

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
<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

section {
  padding: 50px 0;
}

/* Service card hover gradient effect */
.service-card {
  background: #f7f7f7;
  transition: background 0.5s;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #f3f3f5;
  z-index: 0;
  width: 0;
  transition: width 0.5s;
}
.service-card:hover::before {
  width: 100%;
}
.service-card > * {
  position: relative;
  z-index: 1;
}
</style>
