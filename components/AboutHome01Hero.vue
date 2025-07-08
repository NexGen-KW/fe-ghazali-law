<template>
  <section
    id="about"
    class="relative mt-[-111px] flex h-[100vh] items-center justify-center bg-[url(/background.jpg)] bg-cover bg-center bg-no-repeat pt-[200px] sm:h-[45vh]"
  >
    <div
      class="hero-msg mx-auto max-w-[977px] px-4 text-center text-white sm:px-6 md:px-8"
    >
      <h1 class="font-marcellusSC text-[24px] sm:text-[32px] md:text-[32px]">
        {{ $t('aboutHeroHeading') }}
      </h1>
      <p class="text-shadow-custom text-base text-white sm:text-lg md:text-xl">
        {{ $t('aboutHeroParagraph') }}
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
