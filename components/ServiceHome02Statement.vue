<template>
  <section class="mt-8 flex w-full flex-col items-center" id="statement">
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
