<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          Local Department
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>
    <div
      class="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
      style="justify-items: center"
    >
      <div
        v-for="member in members"
        :key="member.name"
        class="relative flex flex-col items-center"
      >
        <img
          :src="member.img"
          :alt="member.name"
          class="h-[420px] w-[350px] object-cover"
        />
        <div
          class="absolute bottom-0 left-0 w-full bg-black/40 px-2 py-4 text-center"
        >
          <span class="text-xl font-medium text-white">{{ member.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const members = [
  {
    name: 'Bader Mishari Al-Ghazali',
    img: '5.jpg',
  },
  {
    name: 'Nada Bourahmah',
    img: '4.jpg',
  },
  {
    name: 'Khadija Riyad Hakim',
    img: '6.jpg',
  },
];
</script>
