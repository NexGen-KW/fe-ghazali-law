<template>
  <section class="mt-8 flex w-full flex-col items-center" id="statement">
    <div class="w-full max-w-[1042px] text-center">
      <h2 class="mb-4 text-center text-[#3a2e13]">
        {{ $t('serviceStatement.servicesPresented') }}
      </h2>
      <hr class="mb-6 border-t border-[#e5e1d8]" />
      <p class="mb-6 text-[#3a2e13]">
        {{ $t('serviceStatement.paragraph') }}
      </p>
      <hr class="border-t border-[#e5e1d8]" />
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
