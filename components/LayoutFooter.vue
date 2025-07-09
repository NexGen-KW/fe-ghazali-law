<template>
  <footer class="text-gold-50 bg-[#181507] py-12">
    <div
      class="container mx-auto flex flex-col gap-12 md:flex-row md:justify-between md:gap-0"
    >
      <!-- Left: Logo, Description, Social -->
      <div class="flex min-w-[260px] flex-1 flex-col items-start gap-6">
        <img src="/logo.svg" alt="RMG Law Logo" class="mb-2 h-24 w-auto" />
        <p class="text-gold-50 mb-6 max-w-xs text-lg">
          {{ $t('footer.description') }}
        </p>
        <div class="flex gap-4">
          <a
            href="#"
            aria-label="Facebook"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon
              icon="fa6-brands:facebook-f"
              size="40"
              class="text-[#181507]"
          /></a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon
              icon="fa6-brands:linkedin-in"
              size="40"
              class="text-[#181507]"
          /></a>
          <a
            href="#"
            aria-label="X"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            ><Icon icon="fa6-brands:x-twitter" size="40" class="text-[#181507]"
          /></a>
        </div>
      </div>
      <!-- Center: Contact Info -->
      <div
        class="border-gold-900 md:items-left flex min-w-[260px] flex-1 flex-col items-start border-r border-l px-[50px]"
      >
        <h3 class="text-gold-50 mb-4 text-2xl font-bold">
          {{ $t('footer.contactInfo') }}
        </h3>
        <p class="text-gold-50 mb-2">
          {{ $t('footer.address') }}
        </p>
        <p class="text-gold-50 mb-2">
          <span class="text-gold-50 font-bold">{{
            $t('footer.phoneLabel')
          }}</span>
          {{ $t('footer.phone') }}
        </p>
        <p class="text-gold-50 mb-2">
          <span class="text-gold-50 font-bold">{{
            $t('footer.emailLabel')
          }}</span>
          {{ $t('Ghazaly@gmail.com') }}
        </p>
      </div>
      <!-- Right: Browse Links -->
      <div
        class="md:items-left flex min-w-[200px] flex-1 flex-col items-start px-[50px]"
      >
        <h3 class="text-gold-50 mb-4 text-2xl font-bold">
          {{ $t('footer.browseLinks') }}
        </h3>
        <ul class="text-gold-50 space-y-2 text-lg">
          <li>
            <Nuxt-Link
              to="/"
              @click="scrollToTop"
              class="text-gold-50 cursor-pointer hover:underline"
              >{{ $t('footer.home') }}</Nuxt-Link
            >
          </li>
          <li>
            <Nuxt-Link to="/about" class="text-gold-50 hover:underline"
              >{{ $t('footer.about') }}
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/services" class="text-gold-50 hover:underline"
              >{{ $t('footer.services') }}
            </Nuxt-Link>
          </li>
          <li>
            <Nuxt-Link to="/team" class="text-gold-50 hover:underline"
              >{{ $t('footer.team') }}
            </Nuxt-Link>
          </li>
          <li></li>
          <li>
            <Nuxt-Link to="/contact" class="text-gold-50 hover:underline"
              >{{ $t('footer.contact') }}
            </Nuxt-Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';

const { t: $t } = useI18n();
</script>

<script lang="ts">
export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>
