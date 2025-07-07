<template>
  <div class="flex flex-col items-center bg-white px-2 py-12" id="meet">
    <HeaderScale t="Meet RMG Experts" class="mb-10" />
    <div
      class="custom-card mx-auto flex w-full max-w-6xl flex-col items-center gap-8 p-8 md:flex-row"
    >
      <div class="flex w-full flex-shrink-0 justify-center md:w-[300px]">
        <img
          src="/1.jpg"
          alt="Rawan Mishari Al-Ghazali"
          class="x h-[380px] w-[300px] object-cover"
        />
      </div>
      <div class="flex-1 text-center md:text-left">
        <h2 class="font-marcellus text-gold-900 mb-2 text-4xl">
          Rawan Mishari Al-Ghazali
        </h2>
        <h3 class="font-500 mb-4 text-xl text-neutral-900">
          Founder and Managing Director
        </h3>
        <p class="mb-8 text-lg text-neutral-700">
          With nearly two decades of experience, Ms. Rawan Al-Ghazali is a
          leading force in Kuwait’s legal sector, known for her work in
          legislative reform, legal consultancy, and arbitration, and for
          advising institutions such as the World Bank and IMF on key national
          laws.
        </p>
        <NuxtLink to="/team/rawan-mishari-al-ghazali">
          <BaseButton>Know More</BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderScale from './ui/HeaderScale.vue';
import BaseButton from './ui/BaseButton.vue';
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
