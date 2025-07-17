<template>
  <section class="flex w-full flex-col items-center" id="statement">
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

<script lang="ts" setup></script>
<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
