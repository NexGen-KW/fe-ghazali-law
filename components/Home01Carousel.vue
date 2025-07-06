<template>
  <section
    class="relative mt-[-111px] flex h-[100vh] bg-[url(/Big-Group-Photo-2.jpg)] bg-cover bg-center bg-no-repeat pt-[170px]"
  >
    <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
      <h1 class="font-marcellusSC text-[32px]">
        {{ $t('carouselHeading') }}
      </h1>
      <p class="text-shadow-custom text-white">
        {{ $t('carouselParagraph') }}
      </p>
    </div>
    <!-- <div class="absolute inset-0" /> -->
  </section>
</template>

<script lang="ts" setup></script>
<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
