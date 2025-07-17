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
          <p class="text-gold-50 mb-2">{{ $t('footer.findUsOn') }}</p>
          <a
            v-for="(social, idx) in socialLinks"
            :key="idx"
            :href="social.href"
            :aria-label="social.label"
            class="bg-gold-300 hover:bg-gold-500 text-gold-50 rounded p-3 px-[12px]"
            target="_blank"
          >
            <Icon :icon="social.icon" size="40" class="text-[#181507]" />
          </a>
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
          <span dir="ltr">{{ $t('footer.phone') }}</span>
        </p>
        <p class="text-gold-50 mb-2">
          <span class="text-gold-50 font-bold">{{
            $t('footer.emailLabel')
          }}</span>
          Mail@alghazali-law.com
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
          <template v-for="(item, index) in navigation" :key="index">
            <li>
              <Nuxt-Link :to="item.url" class="text-gold-50 hover:underline">
                {{ $t(`footer.${item.label}`) }}
              </Nuxt-Link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';
import { navigation } from '~/static/navigation';

const { t: $t } = useI18n();

const socialLinks = [
  // {
  //   href: '#',
  //   label: 'Facebook',
  //   icon: 'fa6-brands:facebook-f',
  // },
  {
    href: 'https://www.linkedin.com/company/rmglf/',
    label: 'LinkedIn',
    icon: 'fa6-brands:linkedin-in',
  },
  // {
  //   href: '#',
  //   label: 'X',
  //   icon: 'fa6-brands:x-twitter',
  // },
];
</script>
