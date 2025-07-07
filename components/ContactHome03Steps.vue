<template>
  <section class="flex w-full flex-col items-center px-2 py-12">
    <div class="mb-10 flex w-full flex-col items-center">
      <div class="mb-4 flex w-full max-w-6xl items-center">
        <div class="border-gold-200 flex-1 border-t"></div>
        <h2
          class="font-marcellus px-8 text-center text-3xl whitespace-nowrap text-neutral-900"
        >
          Follow The Following
        </h2>
        <div class="border-gold-200 flex-1 border-t"></div>
      </div>
    </div>
    <div class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
      <div
        v-for="step in steps"
        :key="step.title"
        class="custom-card relative flex min-h-[180px] items-start bg-white p-8"
      >
        <div class="mr-6 flex h-full flex-col items-center justify-center">
          <Icon :name="step.icon" size="40" class="text-[#3A3321]" />
        </div>
        <div class="flex-1 border-l pl-6">
          <div class="text-gold-700 mb-1 text-lg font-medium">
            Step {{ step.number }}
          </div>
          <div class="font-marcellus mb-1 text-2xl text-[#3A3321]">
            {{ step.title }}
          </div>
          <div class="text-base text-neutral-700">{{ step.description }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const steps = [
  {
    number: 1,
    icon: 'mdi:calendar-outline',
    title: 'Schedule an Appointment',
    description: 'Choose a convenient time to meet with our legal team',
  },
  {
    number: 2,
    icon: 'mdi:account-question-outline',
    title: 'Initial Consultation',
    description:
      'Discuss your case and get a clear understanding of your options',
  },
  {
    number: 3,
    icon: 'mdi:gavel',
    title: 'Legal Strategy',
    description: 'We develop a tailored plan to address your legal needs',
  },
  {
    number: 4,
    icon: 'mdi:check-circle-outline',
    title: 'Case Resolution',
    description:
      'Our team works to resolve your case efficiently and effectively',
  },
];
</script>

<style scoped>
.custom-card {
  background: #f7f7f8;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
