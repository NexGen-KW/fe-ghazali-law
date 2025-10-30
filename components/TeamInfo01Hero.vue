<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

defineProps<{
  member?: {
    name?: string;
    name_ar?: string;
    role?: string;
    role_ar?: string;
    biography?: string;
    image?: string;
  };
}>();
</script>

<template>
  <section
    class="relative flex h-[100vh] items-end justify-center bg-cover bg-top bg-no-repeat pb-32"
    :style="{ backgroundImage: `url(/${member?.image})` }"
  >
    <div class="z-10 flex justify-center">
      <div
        class="overlay-blur mx-4 w-full max-w-[1200px] rounded px-8 py-8 text-center"
      >
        <p class="text-shadow-custom mb-2 text-lg font-medium text-white">
          {{ $t('firmName') }}
        </p>
        <h1 class="font-marcellusSC mb-4 text-[32px] text-white">
          {{
            (locale === 'ar' ? member?.name_ar : member?.name) ||
            member?.name ||
            $t('Meet Our Team')
          }}
        </h1>
        <p class="text-shadow-custom text-white">
          {{
            (locale === 'ar' ? member?.role_ar : member?.role) ||
            member?.role ||
            $t('carouselParagraph')
          }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
.text-shadow-custom {
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.overlay-blur {
  background: rgba(77, 77, 77, 0.37);
  backdrop-filter: blur(7.5px);
}
.fade-cross-enter-active,
.fade-cross-leave-active {
  transition: opacity 0.5s;
}
.fade-cross-enter-from,
.fade-cross-leave-to {
  opacity: 0;
}
</style>
