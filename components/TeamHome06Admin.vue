<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          {{ $t('teamSections.admin') }}
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>

    <div
      class="grid w-full max-w-6xl gap-6"
      style="
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        justify-items: center;
      "
    >
      <div
        v-for="member in members"
        :key="member.name"
        class="relative flex w-full max-w-[220px] flex-col items-center"
      >
        <img
          :src="member.img"
          :alt="member.name"
          class="h-[280px] w-full object-cover shadow"
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-3 text-center"
        >
          <span class="text-lg font-medium text-white">{{
            locale === 'ar' ? member.name_ar : member.name
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const members = [
  {
    name: 'Mr. Mahmoud Mansour',
    name_ar: 'محمود منصور',
    img: '3.jpg',
  },
  {
    name: 'Ms. Zahida Hassan',
    name_ar: 'زاهدة حسن',
    img: '2.jpg',
  },
  {
    name: 'Mr. Amir Elmadboli',
    name_ar: 'أمير حمدي أحمد المدبولي',
    img: '8.jpg',
  },
  {
    name: 'Mr. Ahmed  Al Tanahi',
    name_ar: 'أحمد الطناحي',
    img: '15.png',
  },
  {
    name: 'Mr. Ahmed Abul-Wafa',
    name_ar: 'أحمد محمود أبو الوفا',
    img: '14.png',
  },
];
</script>
