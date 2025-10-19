<template>
  <div class="font-marcellus border-t border-[#D6CBA1] bg-white py-12">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 text-center md:grid-cols-4"
    >
      <div v-for="item in analytics" :key="item.key">
        <div class="mb-2 text-5xl font-light text-[#C6B16B] md:text-6xl">
          {{ item.number }}
        </div>
        <div class="mb-1 text-lg font-semibold">{{ $t(item.titleKey) }}</div>
        <div
          class="text-base text-gray-800"
          v-html="locale === 'ar' ? item.descriptionAr : item.descriptionEn"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const analytics = [
  {
    key: 'experience',
    number: '+30',
    titleKey: 'analytics.experience.title',
    descriptionEn: 'Delivering trusted legal<br />solutions since 1992',
    descriptionAr: 'تقديم حلول قانونية موثوقة<br />منذ 1992',
  },
  {
    key: 'clients',
    number: '+50',
    titleKey: 'analytics.clients.title',
    descriptionEn: 'Fortune 500 companies<br />and global institutions',
    descriptionAr: 'شركات فورتشن 500<br />ومؤسسات عالمية',
  },
  {
    key: 'practice',
    number: '+10',
    titleKey: 'analytics.practice.title',
    descriptionEn: 'Corporate, commercial,<br />investment, and more.',
    descriptionAr: 'الشركات، التجارة،<br />الاستثمار، والمزيد.',
  },
  {
    key: 'jurisdictions',
    number: '+4',
    titleKey: 'analytics.jurisdictions.title',
    descriptionEn: 'Advising across the US, UK,<br />GCC, and beyond',
    descriptionAr:
      'نقدم المشورة عبر الولايات المتحدة والمملكة المتحدة<br />ودول مجلس التعاون الخليجي وما بعدها',
  },
];
</script>
