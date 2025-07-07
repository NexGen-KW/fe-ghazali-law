<template>
  <button
    @click="scrollToTarget"
    class="flex items-center justify-center border-none bg-transparent p-0 focus:outline-none"
    aria-label="Scroll to next section"
    type="button"
  >
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="36"
        cy="36"
        r="34"
        stroke="#fff"
        stroke-width="2"
        fill="none"
      />
      <path
        d="M24 34l12 12 12-12"
        stroke="#fff"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{ target: string }>();

function scrollToTarget() {
  const el = document.getElementById(props.target);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>
