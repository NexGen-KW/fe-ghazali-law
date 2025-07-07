<template>
  <div class="bg-white py-16 text-center">
    <!-- Reusable section header -->
    <div class="mb-4 flex justify-center">
      <HeaderScale t="Trusted by Industry Leaders" />
    </div>
    <!-- Heading -->
    <h2
      class="font-marcellus mb-6 text-center text-2xl font-bold text-[#3B371F] md:text-3xl"
    >
      Our Clients
    </h2>
    <!-- Description box -->
    <div class="mx-auto max-w-4xl border-t border-b border-[#F3EEDC] px-4 py-8">
      <p class="text-lg text-[#3B371F] md:text-xl">
        We proudly represent a diverse portfolio of organizations — from
        corporations to government bodies — who rely on our legal expertise to
        navigate challenges.
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderScale from './ui/HeaderScale.vue';
</script>
