<template>
  <section
    id="services"
    class="relative mt-[-111px] flex h-[35vh] items-center justify-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat pt-[170px]"
  >
    <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
      <h1 class="font-marcellusSC text-[32px]">
        {{ $t('servicesHeroHeading') }}
      </h1>
      <p class="text-shadow-custom text-white">
        {{ $t('servicesHeroParagraph') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';
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
