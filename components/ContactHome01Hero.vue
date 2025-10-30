<template>
  <section
    id="about"
    class="relative mt-[-111px] flex h-[35vh] items-center justify-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat pt-[170px]"
  >
    <div class="hero-msg mx-auto max-w-[977px] text-center text-white">
         
      <h1 class="font-marcellusSC text-[32px]">
          {{ $t('firmName') }}

        </h1>
      <h1 class="font-marcellusSC text-[32px]">
        {{ $t('contactHeroHeading') }}
      </h1>
      <!-- <p class="text-shadow-custom text-white">
        {{ $t('contactHeroParagraph') }}
      </p> -->
    </div>
  </section>
</template>

<script lang="ts" setup></script>
<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
